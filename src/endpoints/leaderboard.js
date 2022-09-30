class Leaderboard {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {String} gameID
   * @param {String} categoryID
   * @returns {Promise}
   */
  get(gameID, categoryID) {
    return this.client.get(`/leaderboards/${gameID}/category/${categoryID}`);
  }

  /**
   *
   * @param {String} gameID
   * @param {String} categoryID
   * @param {String} levelID
   * @returns {Promise}
   */
  getLevel(gameID, categoryID, levelID) {
    return this.client.get(
      `/leaderboards/${gameID}/level/${levelID}/${categoryID}`
    );
  }
}

module.exports = Leaderboard;
