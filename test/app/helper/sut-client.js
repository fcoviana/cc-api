const SutRepositorySpy = require('../../mocks/sut-repository');
const { generateAge } = require('../../../src/shared/utils');

const MOCK_BIRTH_DATE = '2002-05-08';
const makeClientData = () => ({
  name: 'any-name',
  gender: 'any-gender',
  birthDate: MOCK_BIRTH_DATE,
  cityId: 'any-cityId'
});

const makeClientsData = () => ([
  {
    id: 'any-id',
    name: 'any-name',
    gender: 'any-gender',
    birthDate: MOCK_BIRTH_DATE,
    age: generateAge(MOCK_BIRTH_DATE),
    cityId: 'any-cityId'
  },
  {
    id: 'any-id',
    name: 'any-name',
    gender: 'any-gender',
    birthDate: MOCK_BIRTH_DATE,
    age: generateAge(MOCK_BIRTH_DATE),
    cityId: 'any-cityId'
  },
]);

const makeSutUseCase = (UseCase) => {
  const cityRepositorySpy = new SutRepositorySpy();
  const clientRepositorySpy = new SutRepositorySpy();
  const client = makeClientData();
  const clients = makeClientsData();

  const useCase = new UseCase({
    cityRepository: cityRepositorySpy,
    clientRepository: clientRepositorySpy,
  });

  return {
    useCase,
    client,
    clients,
    cityRepositorySpy,
    clientRepositorySpy,
  }
}

const mockReturnClientRepository = (data) => {
  const { clientRepositorySpy, client, method, clients = [] } = data;
  const mockReturn = clients.length ? [...clients] :
    {
      ...client,
      id: 'any-id',
      age: generateAge(MOCK_BIRTH_DATE),
    };
  clientRepositorySpy[method].mockReturnValue(mockReturn);

  return mockReturn;
}

module.exports = {
  makeSutUseCase,
  mockReturnClientRepository,
};
