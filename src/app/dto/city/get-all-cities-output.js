module.exports = class GetAllCitiesOutput {
  constructor(output) {
    this.id = output.id;
    this.name = output.name;
    this.state = output.state;
  }
}
