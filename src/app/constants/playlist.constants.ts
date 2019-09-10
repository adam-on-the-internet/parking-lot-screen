import { LOVER, HAUNT, DISCLAIMER, AUNT, VAGUE, DOG, EYES, FEELS, CARDIFF, ALL_SONGS, LIBERACE } from './song.constants';
import { Playlist } from '../models/Playlist.model';

const TEST_PLAYLIST: Playlist = {
    name: "Test",
    songs: ALL_SONGS,
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

const AQUADOME_SEP_13_19: Playlist = {
    name: "Aquadome 9-13-19",
    songs: [
        AUNT,
        VAGUE,
        HAUNT,
        LIBERACE,
        DOG,
        DISCLAIMER,
        EYES,
        LOVER,
        FEELS,
    ],
};

export const AVAILABLE_PLAYLISTS: Playlist[] = [
    TEST_PLAYLIST,
    STANDARD_PLAYLIST,
    AQUADOME_SEP_13_19,
];
