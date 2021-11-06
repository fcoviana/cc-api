const {
  CreateCityRouterComposer,
  GetAllCitiesRouterComposer
} = require("../../composers/city");
const { adapt } = require("../../adapters/express-router-adapter");

const prefix = '/cities';

module.exports = (router) => {
  router.post(
    prefix,
    adapt(CreateCityRouterComposer.compose())
  );

  router.get(
    prefix,
    adapt(GetAllCitiesRouterComposer.compose())
  );
};
