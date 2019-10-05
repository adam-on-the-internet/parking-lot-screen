import { Song } from './Song.model';

export interface Playlist {
    key: number;
    name: string;
    songs: Song[];
}
