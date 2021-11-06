const { UpdateClientUseCase } = require('../../../../src/app/use-case/client');
const { UpdateClientOutput } = require('../../../../src/app/dto/client');
const { makeSutUseCase, mockReturnClientRepository } = require('../../helper/sut-client');
const { mockReturnCityRepository } = require('../../helper/sut-city');
const { NotFoundError } = require('../../../../src/shared/utils/errors');

describe("use-case: update client", () => {

  test("Should return client", async () => {
    const { useCase, client, clientRepositorySpy, cityRepositorySpy } = makeSutUseCase(UpdateClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, city: { id: 'any-id', }, method: 'fetchOne' });
    const expected = mockReturnClientRepository({ clientRepositorySpy, client, method: 'update' });

    const clientUpdated = await useCase.handle(client);
    delete expected.age;
    expect(clientUpdated).toEqual(expected);
  });

  test("Should return instanceof UpdateClientOutput", async () => {
    const { useCase, client, clientRepositorySpy, cityRepositorySpy } = makeSutUseCase(UpdateClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, city: { id: 'any-id', }, method: 'fetchOne' });
    mockReturnClientRepository({ clientRepositorySpy, client, method: 'update' });

    const clientUpdated = await useCase.handle(client);

    expect(clientUpdated).toBeInstanceOf(UpdateClientOutput);
  });

  test("Should call handle", async () => {
    const { useCase, client, clientRepositorySpy, cityRepositorySpy } = makeSutUseCase(UpdateClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnCityRepository({ cityRepositorySpy, city: { id: 'any-id', }, method: 'fetchOne' });
    mockReturnClientRepository({ clientRepositorySpy, client, method: 'update' });

    await useCase.handle(client);

    expect(useCase.handle).toHaveBeenCalled();
    expect(useCase.handle).toHaveBeenCalledTimes(1);
    expect(useCase.handle).toHaveBeenCalledWith(client);
  });

  test("Should call update", async () => {
    const { useCase, client, clientRepositorySpy, cityRepositorySpy } = makeSutUseCase(UpdateClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    jest.spyOn(clientRepositorySpy, 'update');
    mockReturnCityRepository({ cityRepositorySpy, city: { id: 'any-id', }, method: 'fetchOne' });

    const input = {
      id: 'any-id',
      ...client,
    };

    const expected = mockReturnClientRepository({ clientRepositorySpy, client, method: 'update' });

    await useCase.handle(input);

    expect(clientRepositorySpy.update).toHaveBeenCalled();
    expect(clientRepositorySpy.update).toHaveBeenCalledTimes(1);
    expect(clientRepositorySpy.update).toHaveBeenCalledWith(expected);
  });

  test("Should call handle without parameter", async () => {
    const { useCase } = makeSutUseCase(UpdateClientUseCase);

    await expect(useCase.handle()).rejects.toThrow();
    await expect(useCase.handle()).rejects.toThrow(TypeError);
    await expect(useCase.handle()).rejects.toThrow("Cannot read property 'id' of undefined");
  });

  test("Should instantiate a use-case without a repository", async () => {
    const sut = new UpdateClientUseCase();

    await expect(sut.handle()).rejects.toThrow();
    await expect(sut.handle()).rejects.toThrow(TypeError);
    await expect(sut.handle()).rejects.toThrow("Cannot read property 'id' of undefined");
  });

  test("Should return NotFoundError fetchOne", async () => {
    const { useCase, client, cityRepositorySpy } = makeSutUseCase(UpdateClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    cityRepositorySpy.fetchOne.mockReturnValue(false);

    await expect(useCase.handle(client)).rejects.toThrow();
    await expect(useCase.handle(client)).rejects.toThrow(NotFoundError);
    await expect(useCase.handle(client)).rejects.toThrow("Cidade não encontada!");
  });


});
