import { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Friend } from "../screens/Home";
import { FriendItem } from "./FriendItem";

const styles = StyleSheet.create({
  totalLikes: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
  },
  list: {
    marginTop: 20,
  },
});

interface FriendListProps {
  friends: Friend[];
  onUnfollow: () => void;
}

export const FriendList: React.FC<FriendListProps> = ({
  friends,
  onUnfollow,
}) => {
  const totalLikes = useMemo(() => {
    return friends.reduce((likes, friend) => likes + friend.likes, 0);
  }, [friends]);

  return (
    <View>
      <Text style={styles.totalLikes}>Total de likes: {totalLikes}</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
        {friends.map(friend => (
          <FriendItem key={friend.id} data={friend} onUnfollow={onUnfollow} />
        ))}
      </ScrollView>
    </View>
  );
};
