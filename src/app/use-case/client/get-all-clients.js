const { GetAllClientsOutput } = require('../../dto/client');

module.exports = class GetAllClientsUseCase {
  constructor({ clientRepository } = {}) {
    this.clientRepository = clientRepository;
  }

  async handle() {
    const clientList = await this.clientRepository.fetchAll();

    return clientList.map(client => new GetAllClientsOutput(client))
  }
}
