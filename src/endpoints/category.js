class Category {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get category
   * @param {String} id
   * @returns {Promise}
   */
  get(id) {
    return this.client.get(`/categories/${id}`);
  }

  /**
   * Get category variables
   * @param {String} id
   * @returns {Promis}
   */
  getVariables(id) {
    return this.client.get(`/categories/${id}/variables`);
  }

  /**
   * Get category records
   * @param {String} id
   * @returns {Promise}
   */
  getRecords(id) {
    return this.client.get(`/categories/${id}/records`);
  }
}

module.exports = Category;
