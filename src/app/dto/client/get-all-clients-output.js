module.exports = class GetAllClientsOutput {
  constructor(output) {
    this.id = output.id;
    this.name = output.name;
    this.gender = output.gender;
    this.age = output.age;
    this.birthDate = output.birthDate;
    this.cityId = output.cityId;
  }
}
