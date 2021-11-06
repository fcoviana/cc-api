const { CreateClientInput, CreateClientOutput } = require('../../dto/client');
const { NotFoundError } = require('../../../shared/utils/errors');
const { generateAge } = require('../../../shared/utils');

module.exports = class CreateClientUseCase {
  constructor({ clientRepository, cityRepository } = {}) {
    this.clientRepository = clientRepository;
    this.cityRepository = cityRepository;
  }

  async handle(input) {
    const createClientInput = new CreateClientInput(input);
    if (!(await this.cityIsValid(createClientInput.cityId))) {
      throw new NotFoundError('Cidade não encontada!');
    }
    const age = generateAge(createClientInput.birthDate);

    const clientCreated = await this.clientRepository.create({ ...createClientInput, age });

    return new CreateClientOutput(clientCreated);
  }

  async cityIsValid(id) {
    const city = await this.cityRepository.fetchOne({ id });
    return !!city;
  }
}
