module.exports = class Queue {
  constructor(options) {
    options = { maxcount: 20, ...options };
    this.maxcount = options.maxcount;
    this.list = [];
  }
  add(vals, fun) {
    return new Promise((resolve, reject) => {
      const f = async () => resolve(await fun(vals));
      this.list.push(f);
      if (this.list.length === 1) {
        this.list[0]();
      }
    });
  }
  next() {
    this.list.shift();
    if (this.list.length > 0) {
      this.list[0]();
    }
  }
  get busy() {
    return this.list.length >= this.maxcount;
  }
  get count() {
    return this.list.length;
  }
};
