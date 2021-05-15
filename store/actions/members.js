import axios from 'axios';

export const ADD_MEMBERS = 'ADD_MEMBERS';
export const GET_MEMBERS = 'GET_MEMBERS';
export const GET_ONE_MEMBER = 'GET_ONE_MEMBER';

const BASE_URL = 'https://mygym-reactnative-default-rtdb.firebaseio.com/';

const addMembers = member => ({
  type: ADD_MEMBERS,
  payload: member,
});

const getMembers = members => ({
  type: GET_MEMBERS,
  payload: members,
});

const getOneMember = memberid => ({
  type: GET_ONE_MEMBER,
  payload: memberid,
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
    //console.log(response.data);
    const allMemberIds = Object.keys(response.data);
    const members = allMemberIds.map(id => {
      const member = response.data[id];
      member['id'] = id;
      return member;
    });

    dispatch(getMembers(members));
  };
};

export const getOneMembers = memberid => {
  //console.log('inside actions', memberid);
  return async dispatch => {
    axios
      .get(`${BASE_URL}/members/${memberid}.json`)
      .then(response => {
        dispatch(getOneMember(response.data));
      })
      .catch(e => console.log('error', e));
  };
};
