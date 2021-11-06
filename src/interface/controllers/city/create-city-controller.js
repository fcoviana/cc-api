const ControllerErros = require('../controller-erros');
const HttpResponse = require('../../helper/http-response');

module.exports = class CreateTaskController {
  constructor(createCityUseCase) {
    this.createCityUseCase = createCityUseCase;
  }

  async handle(httpRequest) {
    try {
      const data = httpRequest.body;
      const cityCreated = await this.createCityUseCase.handle(data);

      return HttpResponse.created({ ...cityCreated });
    } catch (error) {
      return ControllerErros.handle(error);
    }
  }
};
