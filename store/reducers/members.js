import {ADD_MEMBERS, GET_MEMBERS} from '../actions/members';

const initialState = {
  members: [],
};

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBERS:
      const updatedMembers = [...state.members, action.payload];
      return {
        ...state,
        members: updatedMembers,
      };

    case GET_MEMBERS:
      return {
        ...state,
        members: action.payload,
      };

    default:
      return state;
  }
};

export default membersReducer;
