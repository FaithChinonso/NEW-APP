import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

const MultipleInput = ({ index, element, handleChange, removeFormFields }) => {
  return (
    <View style={styles.container} key={index}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          onChangeText={e => handleChange(index, e)}
          value={element?.value}
          style={styles.input}
        />
      </View>

      {index ? (
        <Pressable onPress={removeFormFields}>
          <Text style={styles.text}>&minus;</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default MultipleInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  inputContainer: {},
  title: {
    color: "#cccccc",
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#cccccc",
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
  },
  text: {
    color: "#cccccc",
    fontSize: 16,
    marginBottom: 8,
  },
});
