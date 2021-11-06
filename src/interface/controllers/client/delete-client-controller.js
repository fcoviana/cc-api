const ControllerErros = require('../controller-erros');
const HttpResponse = require('../../helper/http-response');

module.exports = class DeleteClientController {
  constructor(deleteClientUseCase) {
    this.deleteClientUseCase = deleteClientUseCase;
  }

  async handle(httpRequest) {
    try {
      const data = httpRequest.body;
      const clientDeleted = await this.deleteClientUseCase.handle(data);

      return HttpResponse.ok({ ...clientDeleted });
    } catch (error) {
      return ControllerErros.handle(error);
    }
  }
};
