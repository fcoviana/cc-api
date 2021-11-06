const { DeleteClientUseCase } = require('../../../app/use-case/client');
const DeleteClientController = require('../../../interface/controllers/client/delete-client-controller');
const { KnexClientRepository } = require('../../repositories/mysql/knex');

module.exports = class DeleteClientRouterComposer {
  static compose() {
    const deleteClientUseCase = new DeleteClientUseCase({
      clientRepository: new KnexClientRepository()
    });

    return new DeleteClientController(deleteClientUseCase);
  }
};
