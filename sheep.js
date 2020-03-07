class Lammas {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// exports.foo = 'boo';
// exports.Lammas = Lammas;

module.exports = Lammas;
