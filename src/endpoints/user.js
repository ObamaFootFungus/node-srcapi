class User {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get user by id
   * @param {String} id
   * @returns {Promise}
   */
  get(id) {
    return this.client.get(`/users/${id}`);
  }

  /**
   * Get user personal bests
   * @param {String} id
   * @returns {Promise}
   */
  getPersonalBests(id) {
    return this.client.get(`/users/${id}/personal-bests`);
  }

  /**
   * Get user by name
   * @param {String} userName
   * @returns {Promise}
   */
  getFromName(userName) {
    return this.client.get(`/users?name=${userName}`);
  }

  /**
   * Get user by twitch name
   * @param {String} userTwitch
   * @returns {Promise}
   */
  getFromTwitch(userTwitch) {
    return this.client.get(`/users?twitch=${userTwitch}`);
  }

  /**
   * Get user by hitbox name
   * @param {String} userHitbox
   * @returns {Promise}
   */
  getFromHitbox(userHitbox) {
    return this.client.get(`/users?hitbox=${userHitbox}`);
  }

  /**
   * Get user by twitter name
   * @param {String} userTwitter
   * @returns {Promise}
   */
  getFromTwitter(userTwitter) {
    return this.client.get(`/users/twitter=${userTwitter}`);
  }

  /**
   * Get user by speedrunslive name
   * @param {String} userSRL
   * @returns {Promise}
   */
  getFromSRL(userSRL) {
    return this.client.get(`/users?speedrunslive=${userSRL}`);
  }
}

module.exports = User;
