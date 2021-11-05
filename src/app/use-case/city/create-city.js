const { CreateCityInput, CreateCityOutput } = require('../../dto/city');

module.exports = class CreateCityUseCase {
  constructor({ cityRepository } = {}) {
    this.cityRepository = cityRepository;
  }

  async handle(input) {
    const createCityInput = new CreateCityInput(input);
    const cityCreated = await this.cityRepository.create(createCityInput);

    return new CreateCityOutput(cityCreated);
  }
}
