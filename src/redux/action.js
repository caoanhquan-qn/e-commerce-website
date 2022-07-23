export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user,
  };
};

export const addItem = (productToAdd) => {
  return {
    type: 'ADD_ITEM',
    payload: productToAdd,
  };
};

export const removeItem = (productToRemove) => {
  return {
    type: 'REMOVE_ITEM',
    payload: productToRemove,
  };
};

export const minusItem = (productToRemove) => {
  return {
    type: 'MINUS_ITEM',
    payload: productToRemove,
  };
};
