import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Friend } from "../screens/Home";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
  },
  unfollowButton: {
    marginLeft: 10,
  },
});

interface FriendProps {
  data: Friend;
  onUnfollow: () => void;
}

const FriendItemComponent: React.FC<FriendProps> = ({ data, onUnfollow }) => (
  <View style={styles.container}>
    <Text>
      {data.name} - Likes: {data.likes}
    </Text>

    <TouchableOpacity style={styles.unfollowButton} onPress={onUnfollow}>
      <Text>Deixar de seguir</Text>
    </TouchableOpacity>
  </View>
);

export const FriendItem = memo(FriendItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
