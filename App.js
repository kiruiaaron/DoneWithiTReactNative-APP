import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {

 
  console.log("App executed")


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
       <View style={styles.container}>
      <View style= {StyleSheet.buttonContainer}>
        <Button onPress={this._onPressButton} title='Press Me'/>

      </View>
      <View style={styles.buttonContainer}>
        <Button 
        onPress={this._onPressButton}
        title='Press Me'
        color="#841584"
        />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={this._onPressButton} title='This looks great!'/>
        <Button onPress={this._onPressButton} title='OK!' color="#841584"/>
      </View>
     
    </View>
      </ScrollView>

    </SafeAreaView>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    margin:20,
  },
  alternativeLayoutButtonContainer:{
    margin:20,
    flexDirection:'row',
    justifyContent:'space-between',
  },
});
