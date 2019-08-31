import { SceneLocation } from './Location.model';
import { Friend } from './Friend.model';

export interface Scene {
  location: SceneLocation;
  friendList: Friend[];
}
