import {ADD_MEMBERS, GET_MEMBERS, GET_ONE_MEMBER} from '../actions/members';

const initialState = {
  members: [],
  member: {},
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

    case GET_ONE_MEMBER:
      return {
        ...state,
        member: action.payload,
      };

    default:
      return state;
  }
};

export default membersReducer;
