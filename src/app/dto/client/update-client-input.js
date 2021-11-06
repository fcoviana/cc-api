module.exports = class UpdateClientInput {
  constructor(input) {
    this.id = input.id;
    this.name = input.name;
    this.gender = input.gender;
    this.birthDate = input.birthDate;
    this.cityId = input.cityId;
  }
}
