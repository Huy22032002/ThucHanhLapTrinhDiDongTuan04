import React,{useState} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

const App = () => {
  const [array, setValue] = useState([1,6,7]);
  return(
    <View style={{flex:1, alignItems:'center', backgroundColor:'purple'}}>
        <Button title ="Generate" 
        onPress={()=>{
          setValue(array.map(array => array+1));
        }} >
        </Button>
        <Text style={{fontWeight:'bold', color:'white'}}>
          {array.join(', ')}
        </Text>

    </View>
  );
};
export default App;