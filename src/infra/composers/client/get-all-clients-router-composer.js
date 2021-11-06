const { GetAllClientsUseCase } = require('../../../app/use-case/client');
const GetAllClientsController = require('../../../interface/controllers/client/get-all-clients-controller');
const { KnexClientRepository } = require('../../repositories/mysql/knex');

module.exports = class GetAllClientsRouterComposer {
  static compose() {
    const getAllClientsUseCase = new GetAllClientsUseCase({
      clientRepository: new KnexClientRepository()
    });

    return new GetAllClientsController(getAllClientsUseCase);
  }
};
