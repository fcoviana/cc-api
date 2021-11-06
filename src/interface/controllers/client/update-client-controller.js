const ControllerErros = require('../controller-erros');
const HttpResponse = require('../../helper/http-response');

module.exports = class UpdateClientController {
  constructor(updateClientUseCase) {
    this.updateClientUseCase = updateClientUseCase;
  }

  async handle(httpRequest) {
    try {
      const data = httpRequest.body;
      const clientUpdated = await this.updateClientUseCase.handle(data);

      return HttpResponse.ok({ ...clientUpdated });
    } catch (error) {
      return ControllerErros.handle(error);
    }
  }
};
