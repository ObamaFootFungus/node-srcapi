class Game {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get game by id
   * @param {String} id
   * @returns {Promise}
   */
  get(id) {
    return this.client.get(`/games/${id}`);
  }

  /**
   * Get game categories
   * @param {String} id
   * @returns {Promise}
   */
  getCategories(id) {
    return this.client.get(`/games/${id}/categories`);
  }

  /**
   * Get game levels
   * @param {String} id
   * @returns {Promise}
   */
  getLevels(id) {
    return this.client.get(`/games/${id}/levels`);
  }

  /**
   * Get game variables
   * @param {String} id
   * @returns {Promise}
   */
  getVariables(id) {
    return this.client.get(`/games/${id}/variables`);
  }

  /**
   * Get derived games
   * @param {String} id
   * @returns {Promise}
   */
  getDerivedGames(id) {
    return this.client.get(`/games/${id}/derived-games`);
  }

  /**
   * Get game records
   * @param {String} id
   * @returns {Promise}
   */
  getRecords(id) {
    return this.client.get(`/games/${id}/records`);
  }

  /**
   * Get game by name
   * @param {String} gameName
   * @returns {Promise}
   */
  getFromName(gameName) {
    return this.client.get(`/games?name=${gameName}`);
  }

  /**
   * Get game by abbreviation
   * @param {String} gameAbbreviation
   * @returns
   */
  getFromAbbreviation(gameAbbreviation) {
    return this.client.get(`/games?abbreviation=${gameAbbreviation}`);
  }

  /**
   * Get game by release year
   * @param {Number} year
   * @returns
   */
  getFromYear(year) {
    return this.client.get(`/games?released=${year}`);
  }

  /**
   * Get game by type
   * @param {String} gameType
   * @returns
   */
  getFromType(gameType) {
    return this.client.get(`/games?gametype=${gameType}`);
  }

  /**
   * Get game by platform
   * @param {String} gamePlatform
   * @returns
   */
  getFromPlatform(gamePlatform) {
    return this.client.get(`/games?platform=${gamePlatform}`);
  }

  /**
   * Get game by region
   * @param {String} gameRegion
   * @returns
   */
  getFromRegion(gameRegion) {
    return this.client.get(`/games?region=${gameRegion}`);
  }

  /**
   * Get game by genre
   * @param {String} gameGenre
   * @returns
   */
  getFromGenre(gameGenre) {
    return this.client.get(`/games?genre=${gameGenre}`);
  }

  /**
   * Game game by engine
   * @param {String} gameEngine
   * @returns
   */
  getFromEngine(gameEngine) {
    return this.client.get(`/games?engine=${gameEngine}`);
  }

  /**
   * Game game by developer
   * @param {String} gameDeveloper
   * @returns
   */
  getFromDeveloper(gameDeveloper) {
    return this.client.get(`/games?=${gameDeveloper}`);
  }

  /**
   * Get game by publisher
   * @param {String} gamePublisher
   * @returns
   */
  getFromPublisher(gamePublisher) {
    return this.client.get(`/games?=${gamePublisher}`);
  }

  /**
   * Get game by moderator
   * @param {String} gameModerator
   * @returns
   */
  getFromModerator(gameModerator) {
    return this.client.get(`/games?moderator=${gameModerator}`);
  }

  /**
   * Get game with multiple options
   * @param {JSON} options - { name: string, abbreviation: string, released: int, gametype: string, platform: string, region: string, genre: string, engine: string, developer: string, publisher: string, moderator: string, romhack: bool, _bulk: bool }
   * @returns {Promise}
   */
  getWithOptions(options) {
    return this.client.get(
      `/games?name=${options.name}&abbreviation=${options.abbreviation}&released=${options.released}&gametype=${options.gametype}&platform=${options.platform}&region=${options.region}&genre=${options.genre}&engine=${options.engine}&developer=${options.developer}&publisher=${options.publisher}&moderator=${options.moderator}&romhack=${options.romhack}&_bulk=${options._bulk}`
    );
  }
}

module.exports = Game;
