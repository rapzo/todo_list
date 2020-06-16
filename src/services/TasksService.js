export class TasksService {
  _id = 0;

  tasks = [];

  constructor(tasks = []) {
    this.tasks = tasks;
  }

  setAll(tasks) {
    this.tasks = tasks;
    return this.tasks;
  }

  add({description}) {
    const now = new Date().toISOString();

    this.tasks.push({
      id: this.id++,
      description,
      createdAt: now,
      updatedAt: now,
      finishedAt: null
    });

    return this.tasks;
  }

  remove(id) {
    const tasks = this.tasks.filter(task => task.id !== id);

    this.tasks = tasks;

    return this.tasks;
  }

  complete(id) {
    const now = new Date().toISOString();
    const task = this.tasks.find(task => task.id === id);
    const tasks = this.tasks.filter(task => task.id !== id);

    this.tasks = [
      ...tasks,
      {
        ...task,
        finishedAt: now,
      },
    ];

    return this.tasks;
  }
}