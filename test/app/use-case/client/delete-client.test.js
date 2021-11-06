const { DeleteClientUseCase } = require('../../../../src/app/use-case/client');
const { DeleteClientOutput } = require('../../../../src/app/dto/client');
const { makeSutUseCase, mockReturnClientRepository } = require('../../helper/sut-client');

describe("use-case: delete client", () => {

  test("Should return client", async () => {
    const { useCase, client, clientRepositorySpy } = makeSutUseCase(DeleteClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    const expected = mockReturnClientRepository({ clientRepositorySpy, client, method: 'destroy' });

    const clientDeleted = await useCase.handle({ id: 'any-id' });

    expect(clientDeleted).toEqual(expected);
  });

  test("Should return instanceof DeleteClientOutput", async () => {
    const { useCase, client, clientRepositorySpy } = makeSutUseCase(DeleteClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnClientRepository({ clientRepositorySpy, client, method: 'destroy' });

    const clientDeleted = await useCase.handle({ id: 'any-id' });

    expect(clientDeleted).toBeInstanceOf(DeleteClientOutput);
  });

  test("Should call handle", async () => {
    const { useCase, client, clientRepositorySpy } = makeSutUseCase(DeleteClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnClientRepository({ clientRepositorySpy, client, method: 'destroy' });

    await useCase.handle({ id: 'any-id' });

    expect(useCase.handle).toHaveBeenCalled();
    expect(useCase.handle).toHaveBeenCalledTimes(1);
    expect(useCase.handle).toHaveBeenCalledWith({ id: 'any-id' });
  });

  test("Should call destroy", async () => {
    const { useCase, client, clientRepositorySpy } = makeSutUseCase(DeleteClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnClientRepository({ clientRepositorySpy, client, method: 'destroy' });
    jest.spyOn(clientRepositorySpy, 'destroy');

    await useCase.handle({ id: 'any-id' });

    expect(clientRepositorySpy.destroy).toHaveBeenCalled();
    expect(clientRepositorySpy.destroy).toHaveBeenCalledTimes(1);
    expect(clientRepositorySpy.destroy).toHaveBeenCalledWith({ id: 'any-id' });
  });

  test("Should call handle without parameter", async () => {
    const { useCase } = makeSutUseCase(DeleteClientUseCase);

    await expect(useCase.handle()).rejects.toThrow();
    await expect(useCase.handle()).rejects.toThrow(TypeError);
    await expect(useCase.handle()).rejects.toThrow("Cannot read property 'id' of undefined");
  });

  test("Should instantiate a use-case without a repository", async () => {
    const useCase = new DeleteClientUseCase();

    await expect(useCase.handle()).rejects.toThrow();
    await expect(useCase.handle()).rejects.toThrow(TypeError);
    await expect(useCase.handle()).rejects.toThrow("Cannot read property 'id' of undefined");
  });

});
