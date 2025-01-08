
const ValidationError = function(message) {
    Error.call(this, message);
    this.name = 'ValidationError';
    this.status = 400; // Bad Request
  };
  
  ValidationError.prototype = Object.create(Error.prototype);
  ValidationError.prototype.constructor = ValidationError;
  
  export default ValidationError;