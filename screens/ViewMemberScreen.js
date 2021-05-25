import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {MemberUi} from '../components/listmemberUi';
import {NavHeading} from '../components/Ui';

import {Searchbar} from 'react-native-paper';

import {useDispatch, useSelector} from 'react-redux';

import {getAllMembers} from '../store/actions/members';

const ViewMemberScreen = props => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);

  const [selectedMemberId, setSelectedMemberId] = React.useState('');
  const dispatch = useDispatch();
  const members = useSelector(state => state.membersState.members);

  //searchbar
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  React.useEffect(() => {
    dispatch(getAllMembers());
  }, []);

  const handleListTap = memberid => {
    props.navigation.navigate('Profile', {memberid});
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerss}>
        <NavHeading iname="bars" riname="home" title="Members" />
      </View>
      <View style={styles.mainss}>
        <Searchbar
          placeholder="Search By Name"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <ScrollView style={{backgroundColor: 'white'}}>
          {members.map(member => {
            return (
              <MemberUi
                key={member.id}
                fullname={member.fullname}
                mobile={member.mobile}
                expiredate={member.joiningdate}
                membershipno={member.membershipno}
                onPress={() => {
                  handleListTap(member.id);
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerss: {
    flex: 1,
    backgroundColor: 'green',
  },
  mainss: {
    flex: 10,
    top: 2,
  },
});
export default ViewMemberScreen;
