const KnexBaseRepository = require('./knex-base-repository');
const City = require('../../../../domain/entities/city');

module.exports = class KnexCityRepository extends KnexBaseRepository {
  constructor() {
    super();
  }

  get entity() {
    return City;
  }

  get table() {
    return 'cities';
  }
}
