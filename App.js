import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
        <Text style = {styles.header}>My Todo List</Text>

        <View style = {styles.writingArea}>
          <View style = {styles.box}>
            <Text style = {styles.listTitle}>Task 1</Text>
            <Text style = {styles.listDescription}>Description about it what to do and other thing</Text>
          </View>

          <View style = {styles.box}>
            <Text style = {styles.listTitle}>Task 2</Text>
            <Text style = {styles.listDescription}>Description about it what to do and other thing</Text>
          </View>

          <View style = {styles.box}>
            <Text style = {styles.listTitle}>Task 3</Text>
            <Text style = {styles.listDescription}>I need to do this First</Text>
          </View>
          
        </View>
        <View style = {styles.button}>
          <Button
              title = "Add New Todo"
              onPress = {()=> Alert.alert("New List To Add")}
              color="#ffb64a"
              />
        </View>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeacb',
    alignItems: 'center',
    
  },
  header:{
    
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 70,
    width: '100%',
    textAlign: 'center',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd596',
    
  },

  writingArea:{
    
    width:385,
    paddingBottom: 15,
    paddingTop: 10,
    paddingRight: 7,
    paddingLeft: 7,
    // height: 500,
    backgroundColor: '#ffd596',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  box:{
  
    width:120,
    backgroundColor:'#ffb64a',
    
  },
  listTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  listDescription:{
    fontSize: 12,
    textAlign: 'center',
  },
  button:{
    backgroundColor: 'red',
    position: 'absolute', 
    bottom: 15,
  }
});
