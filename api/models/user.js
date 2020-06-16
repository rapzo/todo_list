const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  name: String,
  password: String,
}, {
  toJSON: {
    transform: (document, ret) => {
      delete ret.password;
    }
  }
});


userSchema.statics.login = function login(email, password) {

};

module.exports = mongoose.model('user', userSchema);
