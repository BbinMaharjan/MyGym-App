import axios from 'axios';

export const ADD_MEMBERS = 'ADD_MEMBERS';
export const GET_MEMBERS = 'GET_MEMBERS';

const BASE_URL = 'https://mygym-reactnative-default-rtdb.firebaseio.com/';

const addMembers = member => ({
  type: ADD_MEMBERS,
  payload: member,
});

const getMembers = members => ({
  type: GET_MEMBERS,
  payload: members,
});

// Actions

export const addMembersToFirebase = member => async (dispatch, getState) => {
  const baseUrl = getState().configState.baseURL;
  const response = await axios.post(`${baseUrl}/members.json`, member);
  member.id = response.data.name;
  dispatch(addMembers(member));
};

export const getAllMembers = () => {
  return async dispatch => {
    const response = await axios.get(`${BASE_URL}/members.json`);

    const allMemberIds = Object.keys(response.data);
    const members = allMemberIds.map(id => {
      const member = response.data[id];
      member['id'] = id;
      return member;
    });

    dispatch(getMembers(members));
  };
};
