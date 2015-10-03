/**
* List.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    Title: {
      type: 'string',
      required: true
    },
    Description: {
      type: 'string',
      required: true
    },
    Status: {
      type: 'string',
      enum: ['TODO','COMPLETED'],
      defaultsTo: 'TODO',
      required: true
    }
  }
};
