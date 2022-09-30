class Notification {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets notifications for the currently authenticated user
   * @returns {Promise}
   */
  get() {
    return this.client.get(`/notifications`);
  }
}

module.exports = Notification;
