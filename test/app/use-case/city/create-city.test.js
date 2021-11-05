const { CreateCityUseCase } = require('../../../../src/app/use-case/city');
const { CreateCityOutput } = require('../../../../src/app/dto/city');
const { makeSutUseCase, mockReturnCityRepository } = require('../../helper/sut-city');

describe("use-case: create city", () => {

  test("Should return city", async () => {
    const { useCase, city, cityRepositorySpy } = makeSutUseCase(CreateCityUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    const expected = mockReturnCityRepository({ cityRepositorySpy, city, method: 'create' });

    const cityCreated = await useCase.handle(city);

    expect(cityCreated).toEqual(expected);
  });

  test("Should return instanceof CreateCityOutput", async () => {
    const { useCase, city, cityRepositorySpy } = makeSutUseCase(CreateCityUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, city, method: 'create' });

    const cityCreated = await useCase.handle(city);

    expect(cityCreated).toBeInstanceOf(CreateCityOutput);
  });

  test("Should call handle", async () => {
    const { useCase, city, cityRepositorySpy } = makeSutUseCase(CreateCityUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, city, method: 'create' });

    await useCase.handle(city);

    expect(useCase.handle).toHaveBeenCalled();
    expect(useCase.handle).toHaveBeenCalledTimes(1);
    expect(useCase.handle).toHaveBeenCalledWith(city);
  });

  test("Should call create", async () => {
    const { useCase, city, cityRepositorySpy } = makeSutUseCase(CreateCityUseCase);
    mockReturnCityRepository({ cityRepositorySpy, city, method: 'create' });
    jest.spyOn(useCase, useCase.handle.name);
    await useCase.handle(city);

    expect(cityRepositorySpy.create).toHaveBeenCalled();
    expect(cityRepositorySpy.create).toHaveBeenCalledTimes(1);
    expect(cityRepositorySpy.create).toHaveBeenCalledWith(city);
  });

  test("Should call handle without parameter", async () => {
    const { useCase } = makeSutUseCase(CreateCityUseCase);

    await expect(useCase.handle()).rejects.toThrow();
    await expect(useCase.handle()).rejects.toThrow(TypeError);
    await expect(useCase.handle()).rejects.toThrow("Cannot read property 'name' of undefined");
  });

  test("Should instantiate a use-case without a repository", async () => {
    const useCase = new CreateCityUseCase();

    await expect(useCase.handle()).rejects.toThrow();
    await expect(useCase.handle()).rejects.toThrow(TypeError);
    await expect(useCase.handle()).rejects.toThrow("Cannot read property 'name' of undefined");
  });

});
