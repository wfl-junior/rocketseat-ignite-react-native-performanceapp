import { ScrollView, StyleSheet } from "react-native";
import { Friend } from "../screens/Home";
import { FriendItem } from "./FriendItem";

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

interface FriendListProps {
  friends: Friend[];
}

export const FriendList: React.FC<FriendListProps> = ({ friends }) => (
  <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
    {friends.map(friend => (
      <FriendItem key={friend.id} {...friend} />
    ))}
  </ScrollView>
);
