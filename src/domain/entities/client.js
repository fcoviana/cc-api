const uuid = require('uuid').v4;

module.exports = class Client {
  constructor(data) {
    this.id = data.id ?? uuid();
    this.name = data.name;
    this.gender = data.gender;
    this.birthDate = data.birthDate;
    this.age = data.age;
    this.cityId = data.cityId;
    this.createdAt = data.createdAt ?? new Date();
    this.updatedAt = new Date();
    this.deletedAt = data.deletedAt;
  }
};
