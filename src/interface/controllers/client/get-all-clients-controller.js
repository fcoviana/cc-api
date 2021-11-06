const ControllerErros = require('../controller-erros');
const HttpResponse = require('../../helper/http-response');

module.exports = class GetAllTasksController {
  constructor(getAllClientsUseCase) {
    this.getAllClientsUseCase = getAllClientsUseCase;
  }

  async handle() {
    try {
      const clientList = await this.getAllClientsUseCase.handle();

      return HttpResponse.ok(clientList);
    } catch (error) {
      return ControllerErros.handle(error);
    }
  }
};
