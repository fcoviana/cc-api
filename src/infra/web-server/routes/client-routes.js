const {
  CreateClientRouterComposer,
  GetAllClientsRouterComposer,
  UpdateClientRouterComposer,
  GetByIdClientRouterComposer,
  DeleteClientRouterComposer
} = require("../../composers/client");
const { adapt } = require("../../adapters/express-router-adapter");

const prefix = '/clients';

module.exports = (router) => {
  router.post(
    prefix,
    adapt(CreateClientRouterComposer.compose())
  );

  router.get(
    `${prefix}/:id`,
    adapt(GetByIdClientRouterComposer.compose())
  );

  router.get(
    prefix,
    adapt(GetAllClientsRouterComposer.compose())
  );

  router.put(
    `${prefix}/:id`,
    adapt(UpdateClientRouterComposer.compose())
  );

  router.delete(
    `${prefix}/:id`,
    adapt(DeleteClientRouterComposer.compose())
  );
};
