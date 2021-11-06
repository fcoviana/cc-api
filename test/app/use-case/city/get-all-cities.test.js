const { GetAllCitiesUseCase } = require('../../../../src/app/use-case/city');
const { GetAllCitiesOutput } = require('../../../../src/app/dto/city');
const { makeSutUseCase, mockReturnCityRepository } = require('../../helper/sut-city');

describe("use-case: get all cities", () => {

  test("Should return cities", async () => {
    const { useCase, cities, cityRepositorySpy } = makeSutUseCase(GetAllCitiesUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    const expected = mockReturnCityRepository({ cityRepositorySpy, cities, method: 'fetchAll' });

    const citiesList = await useCase.handle();

    expect(citiesList).toEqual(expected);
  });

  test("Should return instanceof GetAllCitiesOutput", async () => {
    const { useCase, cities, cityRepositorySpy } = makeSutUseCase(GetAllCitiesUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, cities, method: 'fetchAll' });


    const citiesList = await useCase.handle();
    citiesList.forEach(city => {
      expect(city).toBeInstanceOf(GetAllCitiesOutput);
    });
  });

  test("Should call handle", async () => {
    const { useCase, cities, cityRepositorySpy } = makeSutUseCase(GetAllCitiesUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, cities, method: 'fetchAll' });

    await useCase.handle();

    expect(useCase.handle).toHaveBeenCalled();
    expect(useCase.handle).toHaveBeenCalledTimes(1);
  });

  test("Should call fetchAll", async () => {
    const { useCase, cities, cityRepositorySpy } = makeSutUseCase(GetAllCitiesUseCase);
    mockReturnCityRepository({ cityRepositorySpy, cities, method: 'fetchAll' });
    jest.spyOn(cityRepositorySpy, 'fetchAll');
    await useCase.handle();

    expect(cityRepositorySpy.fetchAll).toHaveBeenCalled();
    expect(cityRepositorySpy.fetchAll).toHaveBeenCalledTimes(1);
  });

  test("Should instantiate a use-case without a repository", async () => {
    const useCase = new GetAllCitiesUseCase();

    await expect(useCase.handle()).rejects.toThrow();
    await expect(useCase.handle()).rejects.toThrow(TypeError);
    await expect(useCase.handle()).rejects.toThrow("Cannot read property 'fetchAll' of undefined");
  });

});
