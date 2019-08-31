import { DetailedImage } from './Image.model';

export interface World {
  name: string;
  locationImageDeck: DetailedImage[];
  friendImageDeck: DetailedImage[];
}
