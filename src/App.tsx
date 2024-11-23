import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { setupPlayer , addTrack } from '../musicPlayerservice';
import MusicPlayer from './Screen/MusicPlayer';

function App(): React.JSX.Element {

  async function setup() {
    let issetup = await setupPlayer();

    if(issetup){
      await addTrack();
    }

    setPlayerReady(issetup);
  }

  const [playerReady , setPlayerReady] = useState(false);

  useEffect(()=>{setup()} , []);

  if(!playerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }


  return (
    <View style={styles.contanier}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  contanier:{
    flex:1,
  }
});

export default App;
