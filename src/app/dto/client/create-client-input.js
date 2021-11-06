module.exports = class CreateClientInput {
  constructor(input) {
    this.name = input.name;
    this.gender = input.gender;
    this.birthDate = input.birthDate;
    this.cityId = input.cityId;
  }
}
