import { useState } from 'react';
import Slider from '@react-native-community/slider';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App(){
  const [size, setSize] = useState(10);

  function generatePassword(){
    console.log("CLICOU");
  }

  return (
    <View style={styles.container}>
       <Image
         source={require("./src/assets/logo.png")}
         style={styles.logo}
       />

       <Text style={styles.title}>{size} Caracteres</Text>
       <View style={styles.area}>
          <Slider
            style={{ height: 50 }}
            minimumValue={6}
            maximumValue={20}
            maximumTrackTintColor='#ff0000'
            minimumTrackTintColor='#000'
            thumbTintColor='#392de9'
            value={size}
            onValueChange={(value) => setSize(Math.round(value))}
          />
       </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}> Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  logo: {
    marginBottom: 60
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  area: {
   marginTop: 14,
   marginBottom: 14,
   width:"80%",
   backgroundColor:"FFF",
   borderRadius: 8,
   padding: 6,
  },
  button: {
    backgroundColor: '#392de9',
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  }
});
