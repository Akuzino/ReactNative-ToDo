import { useState } from "react";
import {
    Button,
    StyleSheet,
    TextInput,
    View,
    Modal,
    Image,
} from "react-native";

const GoalInput = ({ goalInputHandler, addGoal, visible, onCancel }) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        addGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/goal.png")}
                />
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder="Your goal"
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} color="#f31282" />
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
        padding: 16,
        backgroundColor: "#311b6b",
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: "100%",
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
