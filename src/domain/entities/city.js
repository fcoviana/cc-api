const uuid = require('uuid').v4;

module.exports = class City {
  constructor(data) {
    this.id = data.id ?? uuid();
    this.name = data.name;
    this.state = data.state;
    this.createdAt = data.createdAt ?? new Date();
    this.updatedAt = new Date();
    this.deletedAt = data.deletedAt;
  }
};
