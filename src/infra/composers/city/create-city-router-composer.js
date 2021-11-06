const { CreateCityUseCase } = require('../../../app/use-case/city');
const CreateCityController = require('../../../interface/controllers/city/create-city-controller');
const { KnexCityRepository } = require('../../repositories/mysql/knex');

module.exports = class CreateCityRouterComposer {
  static compose() {
    const createCityUseCase = new CreateCityUseCase({
      cityRepository: new KnexCityRepository()
    });

    return new CreateCityController(createCityUseCase);
  }
};
