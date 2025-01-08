import ValidationError from './api.error.js';

const yourControllerFunction = async (req, res, next) => {
  try {

    sendResponse(res, { message: 'Data fetched successfully' }); 

  } catch (error) {
    if (error instanceof ValidationError) {
      sendResponse(res, null, error.status, error.message); 
    } else {

        console.error(error); 
      sendResponse(res, null, 500, 'Internal Server Error'); 
    }
  }
};

export { yourControllerFunction };