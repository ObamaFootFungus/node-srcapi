class Variable {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get variable by id
   * @param {String} id
   * @returns {Promise}
   */
  get(id) {
    return this.client.get(`/variables/${id}`);
  }
}

module.exports = Variable;
