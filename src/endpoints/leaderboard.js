class Leaderboard {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get leaderboard by game and category id
   * @param {String} gameID
   * @param {String} categoryID
   * @returns {Promise}
   */
  get(gameID, categoryID) {
    return this.client.get(`/leaderboards/${gameID}/category/${categoryID}`);
  }

  /**
   * Get leaderboard by game, category, and level id
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
