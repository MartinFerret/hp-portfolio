import {CharacterModel} from './character.model';

export interface StaffModel extends CharacterModel {
  hogwardsStaff: true;
  hogwartsStudent: false;
}
