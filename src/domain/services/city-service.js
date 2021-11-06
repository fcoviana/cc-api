module.exports = class CityService {
  constructor({ cityRepository } = {}) {
    this.cityRepository = cityRepository;
  }

  async cityIsValid(id) {
    const city = await this.cityRepository.fetchOne({ id });
    return !!city;
  }
}
