import React, { useEffect, useRef, useState } from 'react'
import { View, Text } from 'react-native'
import { Video } from 'expo-av';

import { Episode } from '../../types';
import styles from './styles';
import { Playback } from 'expo-av/build/AV';

interface VideoPlayerProps {
    episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { episode } = props;
    const [videoURL, setVideoURL] = useState('');

    const [status, setStatus] = useState({});
    const video = useRef<Playback>(null);

    useEffect(() => {
        if (!video) {
            return;
        }

        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            );
        })();
    } , [episode]);

    return (
        <Video
            ref={video}
            style={styles.video}
            source={{
                uri: episode.video,
            }}
            posterSource={{
                uri: episode.poster,
            }}
            posterStyle={{
                resizeMode: 'cover',
            }}
            usePoster={true}
            useNativeControls
            resizeMode="contain"
            onPlaybackStatusUpdate={(status: Video) => setStatus(() => status)}            
        />
    )
}

export default VideoPlayer;
