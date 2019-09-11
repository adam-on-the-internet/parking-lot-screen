import { LOVER, HAUNT, DISCLAIMER, AUNT, VAGUE, DOG, EYES, FEELS, ALL_SONGS, LIBERACE, CARDIFF, THEME, THANKS, SHIRT } from './song.constants';
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
        THEME,
        AUNT,
        VAGUE,
        DOG,
        HAUNT,
        LIBERACE,
        SHIRT,
        DISCLAIMER,
        EYES,
        LOVER,
        FEELS,
        CARDIFF,
        THANKS,
    ],
};

export const AVAILABLE_PLAYLISTS: Playlist[] = [
    TEST_PLAYLIST,
    STANDARD_PLAYLIST,
    AQUADOME_SEP_13_19,
];
