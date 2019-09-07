import { Song } from './Song.model';

export interface Playlist {
    name: string;
    songs: Song[];
}
