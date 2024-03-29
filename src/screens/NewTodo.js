import { Text, StyleSheet,Button, View } from "react-native";

export const NewTodo = ({}) =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.header}>Add New To Do</Text>

            <View style = {styles.writingArea}>
                <View style = {styles.newtitlebox}>
                    <Text style = {styles.newtitle}>TITLE</Text>
                    <Text style = {styles.newtitlewriting}>Write Your Description of Title</Text>
                    
                    
                </View>
                <View style = {styles.newdescriptionbox}>
                    <Text style = {styles.newdescription}>DESCRIPTION</Text>
                    <Text style = {styles.newdescriptionwriting}>Write More about Title here</Text>
                    
                    
                </View>

            </View>
        </View>
    
)}

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
    marginBottom: 50,
    // height: 500,
    backgroundColor: '#ffd596',
    flexWrap: 'wrap',
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'gap-between',

  },
  newtitlebox:{
    
    backgroundColor:'#ffb64a',
    width: 370,
    // height: "100%",

    paddingBottom: 15,
    alignItems: 'center',
    marginBottom:10,


  }, 
  newtitle:{
    fontSize: 25,
    fontWeight: 'bold',
  },

  newtitlewriting:{
    fontSize: 15
  },
  newdescriptionbox:{
    
    backgroundColor:'#ffb64a',
    width: 370,
    // height: "100%",

    paddingBottom: 15,
    alignItems: 'center',
    // marginBottom:10,


  }, 
  newdescription:{
    fontSize: 25,
    fontWeight: 'bold',
  },

  newdescriptionwriting:{
    fontSize: 15
  }

})