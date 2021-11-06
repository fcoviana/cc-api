const { GetAllClientsUseCase } = require('../../../../src/app/use-case/client');
const { GetAllClientsOutput } = require('../../../../src/app/dto/client');
const { makeSutUseCase, mockReturnClientRepository } = require('../../helper/sut-client');

describe("use-case: get all clients", () => {

  test("Should return clients", async () => {
    const { useCase, clients, clientRepositorySpy } = makeSutUseCase(GetAllClientsUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    const expected = mockReturnClientRepository({ clientRepositorySpy, clients, method: 'fetchAll' });

    const clientsList = await useCase.handle();

    expect(clientsList).toEqual(expected);
  });

  test("Should return instanceof GetAllClientsOutput", async () => {
    const { useCase, clients, clientRepositorySpy } = makeSutUseCase(GetAllClientsUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnClientRepository({ clientRepositorySpy, clients, method: 'fetchAll' });


    const clientsList = await useCase.handle();
    clientsList.forEach(client => {
      expect(client).toBeInstanceOf(GetAllClientsOutput);
    });
  });

  test("Should call handle", async () => {
    const { useCase, clients, clientRepositorySpy } = makeSutUseCase(GetAllClientsUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnClientRepository({ clientRepositorySpy, clients, method: 'fetchAll' });

    await useCase.handle();

    expect(useCase.handle).toHaveBeenCalled();
    expect(useCase.handle).toHaveBeenCalledTimes(1);
  });

  test("Should call fetchAll", async () => {
    const { useCase, clients, clientRepositorySpy } = makeSutUseCase(GetAllClientsUseCase);
    mockReturnClientRepository({ clientRepositorySpy, clients, method: 'fetchAll' });
    jest.spyOn(clientRepositorySpy, 'fetchAll');
    await useCase.handle();

    expect(clientRepositorySpy.fetchAll).toHaveBeenCalled();
    expect(clientRepositorySpy.fetchAll).toHaveBeenCalledTimes(1);
  });

  test("Should instantiate a use-case without a repository", async () => {
    const useCase = new GetAllClientsUseCase();

    await expect(useCase.handle()).rejects.toThrow();
    await expect(useCase.handle()).rejects.toThrow(TypeError);
    await expect(useCase.handle()).rejects.toThrow("Cannot read property 'fetchAll' of undefined");
  });

});
