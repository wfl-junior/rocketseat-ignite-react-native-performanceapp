import { memo } from "react";
import { Text } from "react-native";
import { Friend } from "../screens/Home";

interface FriendProps {
  data: Friend;
}

const FriendItemComponent: React.FC<FriendProps> = ({ data }) => (
  <Text>
    {data.name} - Likes: {data.likes}
  </Text>
);

export const FriendItem = memo(FriendItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
