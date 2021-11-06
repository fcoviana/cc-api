const ControllerErros = require('../controller-erros');
const HttpResponse = require('../../helper/http-response');

module.exports = class CreateClientController {
  constructor(createClientUseCase) {
    this.createClientUseCase = createClientUseCase;
  }

  async handle(httpRequest) {
    try {
      const data = httpRequest.body;
      const clientCreated = await this.createClientUseCase.handle(data);

      return HttpResponse.created({ ...clientCreated });
    } catch (error) {
      return ControllerErros.handle(error);
    }
  }
};
