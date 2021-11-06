const { NotFoundError } = require('../../shared/utils/errors');
const HttpResponse = require('../helper/http-response');

module.exports = class ControllerErrors {
  static handle(error) {
    if (error instanceof NotFoundError) return HttpResponse.notFoundError(error);

    return HttpResponse.serverError(error);
  }
};
