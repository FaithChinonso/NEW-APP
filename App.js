import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Write Your Goal" style={styles.inputElement} />
        <Button title="Add Goal" />
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputElement: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 5,
    borderRadius: 7,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
