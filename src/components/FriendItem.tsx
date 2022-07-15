import { Text } from "react-native";
import { Friend } from "../screens/Home";

interface FriendProps extends Friend {}

export const FriendItem: React.FC<FriendProps> = ({ name, likes }) => (
  <Text>
    {name} - Likes: {likes}
  </Text>
);
