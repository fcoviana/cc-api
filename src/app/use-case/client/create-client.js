const { CreateClientInput, CreateClientOutput } = require('../../dto/client');
const { NotFoundError } = require('../../../shared/utils/errors');
const { generateAge } = require('../../../shared/utils');
const CityService = require('../../../domain/services/city-service');

module.exports = class CreateClientUseCase {
  constructor({ clientRepository, cityRepository } = {}) {
    this.clientRepository = clientRepository;
    this.cityService = new CityService({ cityRepository });
  }

  async handle(input) {
    const createClientInput = new CreateClientInput(input);
    if (!(await this.cityService.cityIsValid(createClientInput.cityId))) {
      throw new NotFoundError('Cidade não encontada!');
    }
    const age = generateAge(createClientInput.birthDate);

    const clientCreated = await this.clientRepository.create({ ...createClientInput, age });

    return new CreateClientOutput(clientCreated);
  }
}
