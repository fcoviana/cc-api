const { GetAllCitiesOutput } = require('../../dto/city');

module.exports = class GetAllCitiesUseCase {
  constructor({ cityRepository } = {}) {
    this.cityRepository = cityRepository;
  }

  async handle() {
    const cityList = await this.cityRepository.fetchAll();

    return cityList.map(city => new GetAllCitiesOutput(city))
  }
}
