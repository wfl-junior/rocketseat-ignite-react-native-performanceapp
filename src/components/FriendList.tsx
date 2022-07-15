import { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Friend } from "../screens/Home";
import { FriendItem } from "./FriendItem";

const styles = StyleSheet.create({
  totalLikes: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "700",
  },
  list: {
    marginVertical: 20,
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

      <FlatList
        style={styles.list}
        data={friends}
        keyExtractor={friend => friend.id}
        renderItem={({ item: friend }) => (
          <FriendItem data={friend} onUnfollow={onUnfollow} />
        )}
      />
    </View>
  );
};
