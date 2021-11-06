const { GetByIdClientUseCase } = require('../../../app/use-case/client');
const GetByIdClientController = require('../../../interface/controllers/client/get-by-id-client-controller');
const { KnexClientRepository } = require('../../repositories/mysql/knex');

module.exports = class GetByIdClientRouterComposer {
  static compose() {
    const getByIdClientUseCase = new GetByIdClientUseCase({
      clientRepository: new KnexClientRepository()
    });

    return new GetByIdClientController(getByIdClientUseCase);
  }
};
