import { LOVER, HAUNT, DISCLAIMER, AUNT, VAGUE, JOHNNY, DOG, EYES, FEELS, CARDIFF, THEME, THANKS, SHIRT, SUMMER } from './song.constants';
import { Playlist } from '../models/Playlist.model';

const TEST_PLAYLIST: Playlist = {
    key: 1,
    name: "Test",
    songs: [
        THEME,
        AUNT,
        DOG,
        HAUNT,
        FEELS,
        THANKS,
    ],
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

const MEWS_APR_29_20: Playlist = {
    key: 5,
    name: "Mews April 20th, 2020",
    songs: [
        THEME,
        AUNT,
        SHIRT,
        SUMMER,
        DISCLAIMER,
        EYES,
        LOVER,
        FEELS,
        JOHNNY,
        CARDIFF,
        DOG,
        VAGUE,
        THANKS,
    ],
};

export const ALL_SONGS_PLAYLIST: Playlist = {
    key: 99,
    name: "All Songs Playlist",
    songs: [
        THEME,
        AUNT,
        SHIRT,
        DISCLAIMER,
        EYES,
        LOVER,
        FEELS,
        VAGUE,
        DOG,
        HAUNT,
        CARDIFF,
        JOHNNY,
        SUMMER,
        THANKS,
    ],
};

export const AVAILABLE_PLAYLISTS: Playlist[] = [
    TEST_PLAYLIST,
    MEWS_APR_29_20,
    ALL_SONGS_PLAYLIST,
];

export const ALL_PLAYLISTS: Playlist[] = [
    TEST_PLAYLIST,
    MEWS_SEP_25_19,
    AQUADOME_SEP_13_19,
    STANDARD_PLAYLIST,
    MEWS_APR_29_20,
    ALL_SONGS_PLAYLIST,
];
