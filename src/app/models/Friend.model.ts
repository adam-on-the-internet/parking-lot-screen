import { DetailedImage } from './Image.model';

export interface Friend {
  image: DetailedImage;
  speed: number;
  animation: number;
  position?;
  fixed?;
  special?: boolean;
}
