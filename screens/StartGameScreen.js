import { Text, TextInput, View ,StyleSheet,Alert} from "react-native";
import { useState } from "react";
import Title from "../components/ui/title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/instructionText";
function StartGameScreen({onPickNumber}){
    const [enteredNum ,setEnteredNum] = useState('');
  function numberInputHandler(enteredText){
        setEnteredNum(enteredText);
    }
   function resetInputHandler(){
       setEnteredNum('');
   }
    function confirmInputHandler(){
        const chosenNum = parseInt(enteredNum);
        if(isNaN(chosenNum) || chosenNum<=0|| chosenNum>99){
            Alert.alert(
                'Invalid num',
                'Chose num between 1 and 99',
                [{test:'okay', style:'destructive', onPress:resetInputHandler}]
            );
            return;
        }   
        console.log(chosenNum);
        onPickNumber(chosenNum);
  }
    return  (
    <View style={styles.rootContainer}>
        <Title >Guess My Number Game</Title>
        <Card>
        <InstructionText style={styles.instructionText}> Enter a Number</InstructionText>
        <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType="number-pad" 
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value = {enteredNum}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>RESET</PrimaryButton>
             </View>
             <View style ={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>CONFIRM</PrimaryButton>
            </View>
        </View>
        </Card>
    </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center'
    },
    
    numberInput:{
        height:50,
        fontSize:32,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical:8,
        fontWeight:'bold',
        width:50,
       // textAlign:'center',

    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
});