import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Text,
  Pressable,
} from "react-native";
import MultipleInput from "./MultipleInput";

const GoalInput = ({ submitGoalHandler, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [items, setItems] = useState([{ task: "" }]);
  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    submitGoalHandler(enteredGoalText, items);
    setEnteredGoalText("");
  };

  const handleChange = (index, e) => {
    let newItems = [...items];

    newItems[index].task = e;

    setItems(newItems);
  };

  const addFormFields = () => {
    setItems([...items, { task: "" }]);
  };
  const removeFormFields = i => {
    let newItems = [...items];
    newItems.splice(i, 1);
    setItems(newItems);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Write Your Goals</Text>
        <TextInput
          placeholder="Write Your Goal"
          style={styles.inputElement}
          onChangeText={goalInputHandler}
          description={enteredGoalText}
        />
        <View style={styles.taskContainer}>
          <Text style={styles.text}>Add Milestones</Text>
          <View style={styles.task}>
            <View style={styles.multiple}>
              {items?.map((element, index) => (
                <MultipleInput
                  index={index}
                  element={element}
                  handleChange={handleChange}
                  removeFormFields={removeFormFields}
                />
              ))}
            </View>
            <Pressable onPress={addFormFields}>
              <Text style={styles.textButton}>Add</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonAdd}>
            <Button title="Add Goal" color="#85bb40" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#008037" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "#000000",
    padding: 16,
  },
  inputElement: {
    borderWidth: 1,
    backgroundColor: "#cccccc",
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
  },
  taskContainer: {
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    marginHorizontal: 8,
    width: "40%",
    borderWidth: 1,
    borderColor: "#008037",
    borderTopWidth: 0,
    borderRadius: 8,
  },
  buttonAdd: {
    marginHorizontal: 8,
    width: "40%",
    borderWidth: 1,
    backgroundColor: "#008037",
    borderTopWidth: 0,
    borderRadius: 8,
  },
  text: {
    color: "#cccccc",
    fontSize: 16,
    marginBottom: 8,
  },
  task: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  multiple: {
    width: "80%",
  },
  textButton: {
    padding: 10,
    borderRadius: 8,
    marginLeft: 8,
    marginTop: 16,
    color: "#cccccc",
  },
});
