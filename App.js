import { useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [goalsVisible, setGoalsVisible] = useState(false);

  const deleteItemHandler = id => {
    setCourseGoals(prev => {
      return prev.filter(item => item.id !== id);
    });
  };
  const showModalHandler = () => {
    setModalVisible(true);
  };
  const hideModalHandler = () => {
    setModalVisible(false);
  };
  const showGoalsHandler = () => {
    setGoalsVisible(true);
  };
  const hideGoalsHandler = () => {
    setGoalsVisible(false);
  };
  const submitGoalHandler = (enteredGoalText, task) => {
    if (enteredGoalText === "") return;
    setCourseGoals(prev => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString(), task: task },
    ]);
    setModalVisible(false);
    setGoalsVisible(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./assets/images/ticked.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Add New Goal"
            color="#85bb40"
            onPress={showModalHandler}
          />
        </View>
        {courseGoals.length > 0 ? (
          <View style={styles.button}>
            <Button
              title="View Existing Goals"
              color="#008037"
              onPress={showGoalsHandler}
            />
          </View>
        ) : null}
      </View>
      <GoalInput
        visible={modalVisible}
        submitGoalHandler={submitGoalHandler}
        onCancel={hideModalHandler}
      />
      <GoalList
        courseGoals={courseGoals}
        deleteItemHandler={deleteItemHandler}
        visible={goalsVisible}
        onCancel={hideGoalsHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "black",
    width: "100%",
  },
  imageContainer: {
    backgroundColor: "#cccccc",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginVertical: 5,
    width: "50%",
  },
});
