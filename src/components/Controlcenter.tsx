import React from 'react'; 
import { Pressable, StyleSheet, View } from 'react-native';
import TrackPlayer, { usePlaybackState , State , PlaybackState  } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Controlcenter() {

    // const playBackState = usePlaybackState();
    const playBackState: PlaybackState | { state: undefined } = usePlaybackState();

    const skiptonext = async () => {
        await TrackPlayer.skipToNext();
    };

    const skiptoPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const togglePlayback = async (playback : State) => {
        const currentTrack = await TrackPlayer.getActiveTrack();

        if(currentTrack !== null) {
            if(playback === State.Paused || playback === State.Ready){
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };

    const currentState = playBackState.state ?? State.None;

  return (
    <View style={styles.container}>
        <Pressable onPress={skiptoPrevious}>
            <Icon style = {styles.icon} name = "skip-previous" size={40}/>
        </Pressable>
        <Pressable onPress={() => togglePlayback(currentState)}>
            <Icon style = {styles.icon} name = {currentState === State.Playing ? 'paused' : 'play-arrow'} size={75}/>
        </Pressable>
        <Pressable onPress={skiptonext}>
            <Icon style = {styles.icon} name = "skip-next" size={40}/>
        </Pressable>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });
