'use strict';
/*
 * Copyright (c) 2016 TopCoder, Inc. All rights reserved.
 */

/**
 * This service will provide database operation.
 */
const Joi = require('joi');
const logger = require('../../../common/logger');
const User = require('../../../models/User');

/**
 * Create new User
 * @param {Object} user the new user
 * @param {Function} cb the callback function
 */
function* createUser(user, cb) {
  User.create(user, (err, newUser) => {
    cb(err, newUser._id);
  });
}

createUser.schema = {
  user: Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    role: Joi.string().valid(['admin', 'user'])
  }),
  cb: Joi.func().required()
};


module.exports = {
  createUser
};

logger.buildService(module.exports);
