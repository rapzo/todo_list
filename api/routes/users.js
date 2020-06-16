const {Router} = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {authentication, login} = require('../middlewares/auth');
const router = new Router();

const SALT = 'sfsg345"#%Wf';

router.post('/register', async function (req, res) {
  const {email, name, password} = req.body;

  const user = new User({name, email});

  const hash = crypto.pbkdf2Sync(password, SALT, 1000, 64, 'sha512').toString('hex');

  user.password = hash;

  try {
    await user.save();

    return res.json({
      token: login(user),
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message,
    });
  }
});

router.post('/login', async function (req, res) {
  const {email, password} = req.body;

  try {
    const user = await User.findOne({email});

    const hash = crypto.pbkdf2Sync(password, SALT, 1000, 64, 'sha512').toString('hex');

    if (hash !== user.password) {
      throw new Error('Invalid password');
    }

    return res.json({
      token: login(user)
    });
  } catch (e) {
    return res.status(400).json({
      error: e.message,
    });
  }
});

router.get('/profile', authentication(), async (req, res) => {
  return res.json(await User.findOne({
    email: req.user.email,
  }));
})

router.delete('/:id', async (req, res) => {
  try {
    const result = await User.findById(req.params.id);

    await result.delete();

    return res.status(200).send();
  } catch (e) {
    res.statusCode = 400;

    return res.json({
      error: e.message
    });
  }
});

module.exports = router;