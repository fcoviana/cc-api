const { CreateClientUseCase } = require('../../../app/use-case/client');
const CreateClientController = require('../../../interface/controllers/client/create-client-controller');
const { KnexCityRepository, KnexClientRepository } = require('../../repositories/mysql/knex');

module.exports = class CreateClientRouterComposer {
  static compose() {
    const createClientUseCase = new CreateClientUseCase({
      cityRepository: new KnexCityRepository(),
      clientRepository: new KnexClientRepository()
    });

    return new CreateClientController(createClientUseCase);
  }
};
