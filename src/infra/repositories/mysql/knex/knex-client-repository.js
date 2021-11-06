const KnexBaseRepository = require('./knex-base-repository');
const Client = require('../../../../domain/entities/client');

module.exports = class KnexClientRepository extends KnexBaseRepository {
  constructor() {
    super();
  }

  get entity() {
    return Client;
  }

  get table() {
    return 'clients';
  }
}
