const ControllerErros = require('../controller-erros');
const HttpResponse = require('../../helppers/http-response');

module.exports = class GetAllCitiesController {
  constructor(getAllCitiesUseCase) {
    this.getAllCitiesUseCase = getAllCitiesUseCase;
  }

  async handle() {
    try {
      const citiesList = await this.getAllCitiesUseCase.handle(filters);

      return HttpResponse.ok(citiesList);
    } catch (error) {
      return ControllerErros.handle(error);
    }
  }
};
