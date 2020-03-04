class Sheep {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    if (this.name === name) {
      return false;
    }
    this.name = name;
    return true;
  }
}

// exports.foo = 'boo';
// exports.Lammas = Lammas;

module.exports = Sheep;
