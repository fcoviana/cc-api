const { GetByIdClientUseCase } = require('../../../../src/app/use-case/client');
const { GetByIdClientOutput } = require('../../../../src/app/dto/client');
const { makeSutUseCase, mockReturnClientRepository } = require('../../helper/sut-client');

describe("use-case: get by id client", () => {

  test("Should return client", async () => {
    const { useCase, client, clientRepositorySpy } = makeSutUseCase(GetByIdClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    const expected = mockReturnClientRepository({ clientRepositorySpy, client, method: 'fetchOne' });

    const clientRecord = await useCase.handle({ id: 'any-id' });

    expect(clientRecord).toEqual(expected);
  });

  test("Should return instanceof GetByIdClientOutput", async () => {
    const { useCase, client, clientRepositorySpy } = makeSutUseCase(GetByIdClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnClientRepository({ clientRepositorySpy, client, method: 'fetchOne' });

    const clientCreated = await useCase.handle({ id: 'any-id' });

    expect(clientCreated).toBeInstanceOf(GetByIdClientOutput);
  });

  test("Should call handle", async () => {
    const { useCase, client, clientRepositorySpy } = makeSutUseCase(GetByIdClientUseCase);
    jest.spyOn(useCase, useCase.handle.name);
    mockReturnClientRepository({ clientRepositorySpy, client, method: 'fetchOne' });

    await useCase.handle({ id: 'any-id' });

    expect(useCase.handle).toHaveBeenCalled();
    expect(useCase.handle).toHaveBeenCalledTimes(1);
    expect(useCase.handle).toHaveBeenCalledWith({ id: 'any-id' });
  });

  test("Should call fetchOne", async () => {
    const { useCase, client, clientRepositorySpy } = makeSutUseCase(GetByIdClientUseCase);
    mockReturnClientRepository({ clientRepositorySpy, client, method: 'fetchOne' });
    jest.spyOn(clientRepositorySpy, 'fetchOne');
    await useCase.handle({ id: 'any-id' });

    expect(clientRepositorySpy.fetchOne).toHaveBeenCalled();
    expect(clientRepositorySpy.fetchOne).toHaveBeenCalledTimes(1);
    expect(clientRepositorySpy.fetchOne).toHaveBeenCalledWith({ id: 'any-id' });
  });

  test("Should call handle without parameter", async () => {
    const { useCase } = makeSutUseCase(GetByIdClientUseCase);

    await expect(useCase.handle()).rejects.toThrow();
    await expect(useCase.handle()).rejects.toThrow(TypeError);
    await expect(useCase.handle()).rejects.toThrow("Cannot read property 'id' of undefined");
  });

  test("Should instantiate a use-case without a repository", async () => {
    const sut = new GetByIdClientUseCase();

    await expect(sut.handle()).rejects.toThrow();
    await expect(sut.handle()).rejects.toThrow(TypeError);
    await expect(sut.handle()).rejects.toThrow("Cannot read property 'id' of undefined");
  });

});
