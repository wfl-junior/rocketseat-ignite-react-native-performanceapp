import { useCallback, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FriendList } from "../components/FriendList";
import { fetchWrapper } from "../utils/fetchWrapper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginVertical: 10,
  },
});

export interface FriendDTO {
  id: string;
  name: string;
  likes: number;
}

export interface Friend extends FriendDTO {
  online: string;
}

export const Home: React.FC = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [name, setName] = useState("");

  async function handleSearch() {
    const data = await fetchWrapper<FriendDTO[]>(
      `http://192.168.1.12:3333/friends?q=${name}`,
    );

    setFriends(
      data.map(friend => {
        const date = new Date();

        return {
          ...friend,
          online: `${date.getHours()}:${date.getMinutes()}`,
        };
      }),
    );
  }

  const handleUnfollow = useCallback(() => {
    console.log("unfollow user");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>

      <TextInput
        placeholder="Nome do amigo"
        value={name}
        onChangeText={setName}
        autoCorrect={false}
        autoCapitalize="words"
        style={styles.input}
        onSubmitEditing={handleSearch}
      />

      <Button title="Buscar" onPress={handleSearch} />

      <FriendList friends={friends} onUnfollow={handleUnfollow} />
    </View>
  );
};
