import { LOVER, HAUNT, DISCLAIMER, AUNT, VAGUE, DOG, EYES, FEELS } from './song.constants';
import { Playlist } from '../models/Playlist.model';

const TEST_PLAYLIST: Playlist = {
    name: "Test",
    songs: [
        LOVER,
        HAUNT,
        DISCLAIMER,
        AUNT,
    ]
};

const STANDARD_PLAYLIST: Playlist = {
    name: "Standard",
    songs: [
        AUNT,
        VAGUE,
        HAUNT,
        DOG,
        DISCLAIMER,
        EYES,
        LOVER,
        FEELS,
    ]
};

export const AVAILABLE_PLAYLISTS: Playlist[] = [
    TEST_PLAYLIST,
    STANDARD_PLAYLIST,
];
