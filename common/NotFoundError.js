const StatusCodes = require('http-status-codes');
const AppError = require('./AppError');

class NotFoundError extends AppError {
  constructor(message) {
    super(message, StatusCodes.NotFoundError);
  }
}

module.exports = {
  NotFoundError,
};
