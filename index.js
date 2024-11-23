/**
 * @format
 */

import TrackPlayer from 'react-native-track-player';
import { playbackservice } from './musicPlayerservice';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(()=>playbackservice);
