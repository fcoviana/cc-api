const SutRepositorySpy = require('../../mocks/sut-repository');

const makeCityData = () => ({
  name: 'any-name',
  state: 'any-state'
});


const makeCitiesData = () => ([
  {
    id: 'any-id',
    name: 'any-name',
    state: 'any-state'
  },
  {
    id: 'any-id',
    name: 'any-name',
    state: 'any-state'
  },
]);

const makeSutUseCase = (UseCase) => {
  const cityRepositorySpy = new SutRepositorySpy();
  const city = makeCityData();
  const cities = makeCitiesData();

  const useCase = new UseCase({
    cityRepository: cityRepositorySpy
  });

  return {
    useCase,
    city,
    cities,
    cityRepositorySpy,
  }
}

const mockReturnCityRepository = (data) => {
  const { cityRepositorySpy, city, method, cities = [] } = data;
  const mockReturn = cities.length ? [...cities] : { id: 'any-id', ...city };
  cityRepositorySpy[method].mockReturnValue(mockReturn);

  return mockReturn;
}

module.exports = {
  makeSutUseCase,
  mockReturnCityRepository,
};
