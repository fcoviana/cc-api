const { UpdateClientUseCase } = require('../../../app/use-case/client');
const UpdateClientController = require('../../../interface/controllers/client/update-client-controller');
const { KnexCityRepository, KnexClientRepository } = require('../../repositories/mysql/knex');

module.exports = class UpdateClientRouterComposer {
  static compose() {
    const updateClientUseCase = new UpdateClientController({
      cityRepository: new KnexCityRepository(),
      clientRepository: new KnexClientRepository()
    });

    return new UpdateClientUseCase(updateClientUseCase);
  }
};
