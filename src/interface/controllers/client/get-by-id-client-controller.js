const ControllerErros = require('../controller-erros');
const HttpResponse = require('../../helppers/http-response');

module.exports = class GetByIdClientController {
  constructor(getByIdClientUseCase) {
    this.getByIdClientUseCase = getByIdClientUseCase;
  }

  async handle(httpRequest) {
    try {
      const data = httpRequest.params;
      const clientRecovered = await this.getByIdClientUseCase.handle(data);

      return HttpResponse.ok({ ...clientRecovered });
    } catch (error) {
      return ControllerErros.handle(error);
    }
  }
};
