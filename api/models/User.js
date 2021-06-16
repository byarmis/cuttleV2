/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	email: {
  		type: 'string',
  		required: true,
  	},
  	encryptedPassword: {
  		type: 'string',
  		required: true,
  	},
  	game: {
  		model: 'game',
  	},
    pNum: {
        type: 'integer'
    },
    hand: {
    	collection: 'card',
    	via: 'hand',
    },
  	points: {
  		collection: 'card',
  		via: 'points',
  	},
  	runes: {
  		collection: 'card',
  		via: 'runes',
  	},
    frozenId: {
      type: 'integer',
      defaultsTo: 0,
    },
  }
};

