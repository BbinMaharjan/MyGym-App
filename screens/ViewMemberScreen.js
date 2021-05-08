import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {MemberUi} from '../components/listmemberUi';
import {NavHeading} from '../components/Ui';

import {useDispatch, useSelector} from 'react-redux';

import {getAllMembers} from '../store/actions/members';

const ViewMemberScreen = props => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);

  const [selectedMemberId, setSelectedMemberId] = React.useState('');
  const dispatch = useDispatch();
  const members = useSelector(state => state.membersState.members);

  React.useEffect(() => {
    dispatch(getAllMembers());
  }, []);

  const handleListTap = id => {
    props.navigation.navigate('Profile');
    setSelectedMemberId(id);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerss}>
        <NavHeading iname="bars" riname="home" title="Members" />
      </View>
      <View style={styles.mainss}>
        <ScrollView style={{backgroundColor: 'white'}}>
          {members.map(member => {
            return (
              <MemberUi
                key={member.id}
                fullname={member.fullname}
                mobile={member.mobile}
                expiredate={member.joiningdate}
                membershipno={member.membershipno}
                onPress={() => handleListTap(member.id)}
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
  },
});
export default ViewMemberScreen;
