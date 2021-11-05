module.exports = class CreateCityOutput {
  constructor(output) {
    this.id = output.id;
    this.name = output.name;
    this.state = output.state;
  }
}
