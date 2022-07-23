export const initialUserState = { currentUser: null };
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
