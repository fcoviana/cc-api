const { DeleteClientInput, DeleteClientOutput } = require('../../dto/client');

module.exports = class DeleteClientUseCase {
  constructor({ clientRepository } = {}) {
    this.clientRepository = clientRepository;
  }

  async handle(input) {
    const deleteInput = new DeleteClientInput(input);
    const clientDeleted = await this.clientRepository.destroy(deleteInput);

    return new DeleteClientOutput(clientDeleted);
  }
}
