import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import OneGoal from "./OneGoal";

const GoalItem = ({ data, onDeleteItems, id }) => {
  const [goalModal, setGoalModal] = useState(false);
  const showGoalModal = () => {
    setGoalModal(true);
  };
  const hideGoalModal = () => {
    setGoalModal(false);
  };

  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#5A5A5A", borderless: true }}
        // onPress={onDeleteItems.bind(this, id)}
        onPress={showGoalModal}
        onLongPress={onDeleteItems.bind(this, id)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#5A5A5A" : "#cccccc",
          },
        ]}
      >
        <Text style={styles.goalText}>{data.text}</Text>
      </Pressable>
      <OneGoal visible={goalModal} data={data} onCancel={hideGoalModal} />
    </View>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  goalItems: {
    borderTopWidth: 0,
    borderWidth: 1,
    backgroundColor: "#cccccc",

    marginBottom: 10,
    borderRadius: 8,
    flex: 1,
  },
  goalText: {
    padding: 20,
    fontSize: 14,
  },
});
