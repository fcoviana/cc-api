const { GetAllCitiesUseCase } = require('../../../app/use-case/city');
const GetAllCitiesController = require('../../../interface/controllers/city/get-all-cities-controller');
const { KnexCityRepository } = require('../../repositories/mysql/knex');

module.exports = class GetAllCitiesRouterComposer {
  static compose() {
    const getAllCitiesUseCase = new GetAllCitiesUseCase({
      cityRepository: new KnexCityRepository()
    });

    return new GetAllCitiesController(getAllCitiesUseCase);
  }
};
