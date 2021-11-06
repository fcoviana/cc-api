const { UpdateClientInput, UpdateClientOutput } = require('../../dto/client');
const { NotFoundError } = require('../../../shared/utils/errors');
const { generateAge } = require('../../../shared/utils');
const CityService = require('../../../domain/services/city-service');

module.exports = class UpdateClientUseCase {
  constructor({ clientRepository, cityRepository } = {}) {
    this.clientRepository = clientRepository;
    this.cityService = new CityService({ cityRepository });
  }

  async handle(input) {
    const updateInput = new UpdateClientInput(input);
    if (!(await this.cityService.cityIsValid(updateInput.cityId))) {
      throw new NotFoundError('Cidade não encontada!');
    }
    const age = generateAge(updateInput.birthDate);
    const clientUpdated = await this.clientRepository.update({ ...updateInput, age });

    return new UpdateClientOutput(clientUpdated);
  }
}
