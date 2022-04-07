import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import React, { useState } from 'react';
import { appStyles as styles } from './styles';

const App = () => {

  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText("");
  }

  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  }
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "black",
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          My Tasks
        </Text>
        <Text
          style={styles.subtitle}>
          Enter your tasks in the box below and press the "Add" button to add.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your task here"
          placeholderTextColor={"#666"}
          value={text}
          onChangeText={setText}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleAddTaskPress}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity 
              style={styles.taskDelete}
              onPress={()=> handleDeleteTaskPress(index)}>
                <Text style={styles.taskDeleteText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item + Date.now() + Math.random()}
        />
      </View>
    </SafeAreaView>
  )
}

export default App