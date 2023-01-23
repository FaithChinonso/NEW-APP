import { Modal, View, FlatList, Text, StyleSheet, Button } from "react-native";

const OneGoal = ({ data, visible, onCancel }) => {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <Text style={styles.goalText}>{data.text}</Text>
        <FlatList
          data={data.task}
          renderItem={itemData => {
            return (
              <View>
                <Text style={styles.text}>{itemData.item.task}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.task;
          }}
        />
        <Button title="Cancel" color="#008037" onPress={onCancel} />
      </View>
    </Modal>
  );
};

export default OneGoal;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    paddingHorizontal: 16,
    paddingTop: 50,
    flex: 1,
  },
  text: {
    color: "black",
  },
});
