module.exports = class SutRepositorySpy {
  create = jest.fn();
  destroy = jest.fn();
  fetchAll = jest.fn();
  fetchOne = jest.fn();
  update = jest.fn();
};
