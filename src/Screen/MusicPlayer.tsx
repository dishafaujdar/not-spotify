import { Dimensions, FlatList, Image , StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import TrackPlayer, {Event , Track , useTrackPlayerEvents}  from 'react-native-track-player';
import { playListData } from '../constants';
import SongInfo from '../components/SongInfo';
import Controlcenter from '../components/Controlcenter';
import SongSlider from '../components/SongSlider';

const {width} = Dimensions.get('window');

const MusicPlayer = () => {

    const [track , setTrack] = useState<Track | undefined>();

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        if (event.index !== undefined)
        {
            const playingTrack = await TrackPlayer.getTrack(event.index);
            setTrack(playingTrack);
        }
    });

    const renderArtWork = () => {
        return(
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    (track?.artwork && (
                        <Image
                        style={styles.albumArtImg}
                        source={{uri: track?.artwork?.toString()}}/>
                    ))
                </View>
            </View>
        );
    };
  return (
    <View style={styles.container}>
        <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
        />

        <SongInfo track={track}/>
        <SongSlider />
        <Controlcenter />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
    },
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumContainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        height: '100%',
        borderRadius: 4,
    },
});

export default MusicPlayer;
