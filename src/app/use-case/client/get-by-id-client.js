const { GetByIdClientInput, GetByIdClientOutput } = require('../../dto/client');

module.exports = class GetByIdClientUseCase {
  constructor({ clientRepository } = {}) {
    this.clientRepository = clientRepository;
  }

  async handle(input) {
    const getByIdInput = new GetByIdClientInput(input);
    const clientRecovered = await this.clientRepository.fetchOne(getByIdInput);

    return new GetByIdClientOutput(clientRecovered);
  }
}
