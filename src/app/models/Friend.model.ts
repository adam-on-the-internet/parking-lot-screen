export interface Friend {
  image: FriendImage;
  speed: number;
  animation: number;
  position?;
  fixed?;
  special?: boolean;
}

export interface FriendImage {
  src: string;
  name: string;
}
