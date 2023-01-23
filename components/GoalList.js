import { View, FlatList, Modal, StyleSheet, Button } from "react-native";
import GoalItem from "./GoalItem";

const GoalList = ({ courseGoals, visible, deleteItemHandler, onCancel }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <View style={{ backgroundColor: "#008037", width: "100%" }}>
                <GoalItem
                  data={itemData.item}
                  onDeleteItems={deleteItemHandler}
                  id={itemData.item.id}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
        <Button title="Cancel" color="#008037" onPress={onCancel} />
      </View>
    </Modal>
  );
};

export default GoalList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#000000",
  },
});
