'use strict';
var uuid = require('node-uuid');

// private variables
var hash = Symbol();

class Project {
	constructor(data) {
		this.bidId = data.bidId || data.bid_id || uuid.v4();
		this.projectId = data.projectId || data.project_id
		this.owner = data.owner
		this.amount = data.amount
	}

	toJson() {
		return {
			bidId: this.bidId,
			projectId: this.projectId,
			owner: this.owner,
			amount: this.amount
		}
	}

	toDbModel() {
		return  {
			bid_id: this.bidId,
			project_id: this.projectId,
			owner: this.owner,
			amount: this.amount
		}
	}

}

module.exports = function(userData) {
	return new Project(userData);
}