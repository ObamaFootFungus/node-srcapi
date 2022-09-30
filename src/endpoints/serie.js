class Serie {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get serie by id
   * @param {String} id
   * @returns {Promise}
   */
  get(id) {
    return this.client.get(`/series/${id}`);
  }

  /**
   * Get games in serie
   * @param {String} id
   * @returns {Promise}
   */
  getGames(id) {
    return this.client.get(`/series/${id}/games`);
  }

  /**
   * Get serie by name
   * @param {String} serieName
   * @returns {Promise}
   */
  getFromName(serieName) {
    return this.client.get(`/series?name=${serieName}`);
  }

  /**
   * Get serie by abbreviation
   * @param {String} serieAbbreviation
   * @returns {Promise}
   */
  getFromAbbreviation(serieAbbreviation) {
    return this.client.get(`/series?abbreviation=${serieAbbreviation}`);
  }

  /**
   * Get serie by moderator
   * @param {String} serieModerator
   * @returns {Promise}
   */
  getFromName(serieModerator) {
    return this.client.get(`/series?moderator=${serieModerator}`);
  }

  /**
   * Get series with multiple options
   * @param {JSON} options - { name: string, abbreviation: string, moderator: string }
   * @returns {Promise}
   */
  getWithOptions(options) {
    return this.client.get(
      `/series?name=${options.name}&abbreviation=${options.abbreviation}&moderator=${options.moderator}`
    );
  }
}

module.exports = Serie;
