'use strict';

/**
 * book-now service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-now.book-now');
