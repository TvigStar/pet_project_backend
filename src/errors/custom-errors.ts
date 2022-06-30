export const customErrors = {
  //400
  BAD_REQUEST_USER_REGISTERED: {
    message: 'User is already registered',
    customCode: 4001
  },
  BAD_REQUEST_USER_ACTIVATED: {
    message: 'User is already activated',
    customCode: 4002
  },
  BAD_REQUEST_NO_TOKEN: {
    message: 'Token is not present'
  },

  BAD_REQUEST_NO_STOCK:{
    message: 'product is not present'
  },

  BAD_REQUEST_WRONG_PRODUCT_COUNT: {
    message: 'wrong product count'
  },
  BAD_REQUEST_CART_NOT_FOUND: {
    message: 'cart or user not found'
  },

  //401
  UNAUTHORIZED_BAD_TOKEN: {
    message: 'Something wrong with token'
  },

  //403

  FORBIDDEN_USER_NOT_CONFIRMED: {
    message: 'user not confirmed ',
    code: 4031
  },
  //404
  NOT_FOUND: {
    message: 'Record not found'
  }

};
