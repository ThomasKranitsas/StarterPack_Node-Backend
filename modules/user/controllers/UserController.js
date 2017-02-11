'use strict';
/*
 * Copyright (c) 2016 TopCoder, Inc. All rights reserved.
 */

/**
 * This controller exposes database REST action.
 */
const UserService = require('../services/UserService');

/**
 * Create user
 * @param req the request
 * @param res the response
 */
function* createUser(req, res) {
  yield UserService.createUser(req.body);
  res.status(200).end();
}

module.exports = {
  createUser
};
