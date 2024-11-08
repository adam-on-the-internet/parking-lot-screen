import {
  AUNT,
  BERNIE,
  CARDIFF,
  DISCLAIMER,
  DOG,
  EVERYWHERE,
  EYES,
  FEELS,
  HATE,
  HAUNT,
  JOHNNY,
  LOVER,
  MEDIOCRE,
  NEVER,
  SHIRT,
  SUMMER,
  THANKS,
  THEME,
  VAGUE
} from './song.constants';
import {Playlist} from '../models/Playlist.model';

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

const MEWS_JAN_6: Playlist = {
  key: 5,
  name: "Mews January 6, 2020",
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
    DOG,
    THANKS,
  ],
};

const CRICKET_FEB_22: Playlist = {
  key: 6,
  name: "Cricket Pit house show February 22, 2020",
  songs: [
    THEME,
    AUNT,
    SHIRT,
    HAUNT,
    DISCLAIMER,
    EYES,
    LOVER,
    FEELS,
    JOHNNY,
    CARDIFF,
    DOG,
    NEVER,
    BERNIE,
  ]
};

const LIFT_PLAYLIST_NOV_5_24: Playlist = {
  key: 7,
  name: "LiFT playlist November 5, 2020",
  songs: [
    THEME,
    AUNT,
    SHIRT,
    MEDIOCRE,
    HATE,
    FEELS,
    EVERYWHERE,
    HAUNT,
  ]
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
    NEVER,
    THANKS,
    BERNIE,
  ],
};

export const AVAILABLE_PLAYLISTS: Playlist[] = [
  LIFT_PLAYLIST_NOV_5_24,
  CRICKET_FEB_22,
  ALL_SONGS_PLAYLIST,
];

export const ALL_PLAYLISTS: Playlist[] = [
  LIFT_PLAYLIST_NOV_5_24,
  TEST_PLAYLIST,
  MEWS_SEP_25_19,
  AQUADOME_SEP_13_19,
  STANDARD_PLAYLIST,
  MEWS_JAN_6,
  CRICKET_FEB_22,
  ALL_SONGS_PLAYLIST,
];
