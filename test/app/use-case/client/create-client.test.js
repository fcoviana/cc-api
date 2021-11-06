const { CreateClientUseCase } = require('../../../../src/app/use-case/client');
const { CreateClientOutput } = require('../../../../src/app/dto/client');
const { makeSutUseCase, mockReturnClientRepository } = require('../../helper/sut-client');
const { mockReturnCityRepository } = require('../../helper/sut-city');
const { NotFoundError } = require('../../../../src/shared/utils/errors');

describe("use-case: create client", () => {

  test("Should return client", async () => {
    const { useCase, client, clientRepositorySpy, cityRepositorySpy } = makeSutUseCase(CreateClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, city: { id: 'any-id', }, method: 'fetchOne' });
    const expected = mockReturnClientRepository({ clientRepositorySpy, client, method: 'create' });

    const clientCreated = await useCase.handle(client);

    expect(clientCreated).toEqual(expected);
  });

  test("Should return instanceof CreateClientOutput", async () => {
    const { useCase, client, clientRepositorySpy, cityRepositorySpy } = makeSutUseCase(CreateClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, city: { id: 'any-id', }, method: 'fetchOne' });
    mockReturnClientRepository({ clientRepositorySpy, client, method: 'create' });

    const clientCreated = await useCase.handle(client);

    expect(clientCreated).toBeInstanceOf(CreateClientOutput);
  });

  test("Should call handle", async () => {
    const { useCase, client, clientRepositorySpy, cityRepositorySpy } = makeSutUseCase(CreateClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, city: { id: 'any-id', }, method: 'fetchOne' });
    mockReturnClientRepository({ clientRepositorySpy, client, method: 'create' });

    await useCase.handle(client);

    expect(useCase.handle).toHaveBeenCalled();
    expect(useCase.handle).toHaveBeenCalledTimes(1);
    expect(useCase.handle).toHaveBeenCalledWith(client);
  });

  test("Should call create", async () => {
    const { useCase, client, clientRepositorySpy, cityRepositorySpy } = makeSutUseCase(CreateClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, city: { id: 'any-id', }, method: 'fetchOne' });
    const clientInput = mockReturnClientRepository({ clientRepositorySpy, client, method: 'create' });
    delete clientInput.id;

    await useCase.handle(client);

    expect(clientRepositorySpy.create).toHaveBeenCalled();
    expect(clientRepositorySpy.create).toHaveBeenCalledTimes(1);
    expect(clientRepositorySpy.create).toHaveBeenCalledWith(clientInput);
  });

  test("Should call handle without parameter", async () => {
    const { useCase } = makeSutUseCase(CreateClientUseCase);

    await expect(useCase.handle()).rejects.toThrow();
    await expect(useCase.handle()).rejects.toThrow(TypeError);
    await expect(useCase.handle()).rejects.toThrow("Cannot read property 'name' of undefined");
  });

  test("Should instantiate a use-case without a repository", async () => {
    const useCase = new CreateClientUseCase();

    await expect(useCase.handle()).rejects.toThrow();
    await expect(useCase.handle()).rejects.toThrow(TypeError);
    await expect(useCase.handle()).rejects.toThrow("Cannot read property 'name' of undefined");
  });

  test("Should return NotFoundError fetchOne", async () => {
    const { useCase, client, cityRepositorySpy } = makeSutUseCase(CreateClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    cityRepositorySpy.fetchOne.mockReturnValue(false);

    await expect(useCase.handle(client)).rejects.toThrow();
    await expect(useCase.handle(client)).rejects.toThrow(NotFoundError);
    await expect(useCase.handle(client)).rejects.toThrow("Cidade não encontada!");
  });

});
