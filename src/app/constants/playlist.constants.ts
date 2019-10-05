import { LOVER, HAUNT, DISCLAIMER, AUNT, VAGUE, JOHNNY, DOG, EYES, FEELS, ALL_SONGS, LIBERACE, CARDIFF, THEME, THANKS, SHIRT } from './song.constants';
import { Playlist } from '../models/Playlist.model';

const TEST_PLAYLIST: Playlist = {
    key: 1,
    name: "Test",
    songs: ALL_SONGS,
};

const STANDARD_PLAYLIST: Playlist = {
    key: 2,
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
    key: 3,
    name: "Aquadome 9-13-19",
    songs: [
        THEME,
        AUNT,
        DOG,
        SHIRT,
        HAUNT,
        DISCLAIMER,
        EYES,
        LOVER,
        FEELS,
        VAGUE,
        THANKS,
    ],
};

const MEWS_SEP_25_19: Playlist = {
    key: 4,
    name: "Mews 9-25-19",
    songs: [
        THEME,
        AUNT,
        SHIRT,
        HAUNT,
        DISCLAIMER,
        EYES,
        LOVER,
        FEELS,
        DOG,
        VAGUE,
        THANKS,
    ],
};

export const AVAILABLE_PLAYLISTS: Playlist[] = [
    TEST_PLAYLIST,
    MEWS_SEP_25_19,
];

export const ALL_PLAYLISTS: Playlist[] = [
    TEST_PLAYLIST,
    MEWS_SEP_25_19,
    AQUADOME_SEP_13_19,
    STANDARD_PLAYLIST,
];
