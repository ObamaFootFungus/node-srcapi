class Run {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get run by id
   * @param {String} id
   * @returns {Promise}
   */
  get(id) {
    return this.client.get(`/runs/${id}`);
  }

  /**
   * Get run by user
   * @param {String} userId
   * @returns {Promise}
   */
  getFromUser(userId) {
    return this.client.get(`/runs?user=${userId}`);
  }

  /**
   * Get run by guest
   * @param {String} guestId
   * @returns {Promise}
   */
  getFromGuest(guestId) {
    return this.client.get(`/runs?guest=${guestId}`);
  }

  /**
   * Get run by examienr
   * @param {String} examinerId
   * @returns {Promise}
   */
  getFromExaminer(examinerId) {
    return this.client.get(`/runs?examiner=${examinerId}`);
  }

  /**
   * Get run by game
   * @param {String} gameId
   * @returns {Promise}
   */
  getFromGame(gameId) {
    return this.client.get(`/runs?game=${gameId}`);
  }

  /**
   * Get run by level
   * @param {String} levelId
   * @returns {Promise}
   */
  getFromLevel(levelId) {
    return this.client.get(`/runs?level=${levelId}`);
  }

  /**
   * Get run by category
   * @param {String} categoryId
   * @returns {Promise}
   */
  getFromCategory(categoryId) {
    return this.client.get(`/runs?category=${categoryId}`);
  }

  /**
   * Get run by platform
   * @param {String} platformId
   * @returns {Promise}
   */
  getFromPlatforum(platformId) {
    return this.client.get(`/runs?platform=${platformId}`);
  }

  /**
   * Get run by region
   * @param {String} regionId
   * @returns {Promise}
   */
  getFromRegion(regionId) {
    return this.client.get(`/runs?region=${regionId}`);
  }

  /**
   * Get run with multiple options
   * @param {JSON} options - { user: string, guest: string, examiner: string, game: string, level: string, category: string, platform: string, region: string, emulated: bool, status: string }
   * @returns {Promise}
   */
  getWithOptions(options) {
    return this.client.get(
      `/runs?user=${options.user}&guest=${options.guest}&examiner=${options.examiner}&game=${options.game}&level=${options.level}&category=${options.category}&platform=${options.platform}&region=${options.region}&emulated=${options.emulated}&status=${options.status}`
    );
  }

  /**
   * Deletes a run by id, requires authentication
   * @param {String} id
   * @returns {Promise}
   */
  deleteRun(id) {
    return this.client.delete(`/runs/${id}`);
  }

  /**
   *
   * @param {JSON} runJSON - $schema "type": "object",
  "required": ["category", "platform", "times"],
  "properties": {
    "category": {
      "$ref": "definitions.json#/encoded-id"
    },
    "level": {
      "$ref": "definitions.json#/encoded-id"
    },
    "date": {
      "type": "string",
      "format": "date"
    },
    "region": {
      "$ref": "definitions.json#/encoded-id"
    },
    "platform": {
      "$ref": "definitions.json#/encoded-id"
    },
    "verified": {
      "type": "boolean",
      "default": false
    },
    "times": {
      "type": "object",
      "minItems": 1,
      "properties": {
        "realtime": {
          "type": "number"
        },
        "realtime_noloads": {
          "type": "number"
        },
        "ingame": {
          "type": "number"
        }
      }
    },
    "players": {
      "$ref": "definitions.json#/player-list"
    },
    "emulated": {
      "type": "boolean",
      "default": false
    },
    "video": {
      "type": "string",
      "maxLength": 255
    },
    "comment": {
      "type": "string",
      "maxLength": 2000
    },
    "splitsio": {
      "type": "string",
      "maxLength": 50
    },
    "variables": {
      "type": "object",
      "properties": {},
      "additionalProperties": {
        "type": "object",
        "required": ["type", "value"],
        "properties": {
          "type": {
            "type": "string",
            "enum": ["pre-defined", "user-defined"]
          },
          "value": {
            "type": "string"
          }
        }
      }
    }
  }
   * @returns {Promise}
   */
  createRun(runJSON) {
    return this.client.post(`/runs`, runJSON);
  }

  /**
   * Verify a run, requires authentication
   * @param {String} id
   * @returns {Promise}
   */
  verifyRun(id) {
    return this.client.put(`/runs/${id}/status`, {
      status: {
        status: "verified",
      },
    });
  }

  /**
   * Reject a run, requires authentication
   * @param {String} id
   * @param {String} reason
   * @returns {Promise}
   */
  rejectRun(id, reason) {
    return this.client.put(`/runs/${id}/status`, {
      status: {
        status: "rejected",
        reason: reason,
      },
    });
  }

  /**
   * Set the players for a run
   * @param {String} id
   * @param {JSON[]} usersArray - [
    {"rel": "user", "id": "<user ID here>"},
    {"rel": "user", "id": "<other user ID here>"},
    {"rel": "guest", "name": "someone with no sr.com account"}
  ]
   * @returns
   */
  setPlayers(id, usersArray) {
    return this.client.put(`/runs/${id}/players`, {
      players: usersArray,
    });
  }
}

module.exports = Run;
