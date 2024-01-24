import React , {useState} from 'react';
import { Pressable,StyleSheet, Text, View } from 'react-native';

const App =()=>{
  const [timesPressed, setTimePresssed] = useState(0);

  let textLog = '';
  if (timesPressed>1){
    textLog = timesPressed + 'x onPress';
  }
  else if (timesPressed  > 0){
    textLog ='onPress';
  }
}

return(
  <View style ={StyleSheet.container}>
    <Pressable
    onPress={()=>{
      setTimePresssed(current => current + 1);
    }}
    style={({pressed})=>[{
      backgroundColor:pressed? 'rgb(210, 23, 255)': 'white',
    },
    styles.wrapperCustom,
  ]}>
    {({pressed})=>(
      
    )}
  </Pressable>
  </View>
)