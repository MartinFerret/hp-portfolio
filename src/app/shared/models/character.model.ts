import {Wand} from './wand.model';

export interface CharacterModel {
  id: string;
  name: string;
  alternate_names: string[];
  species: Species;
  gender: Gender;
  house: House;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export type House = 'Gryffindor' | 'Slytherin' | 'Ravenclaw' | 'Hufflepuff';
export type Gender = 'male' | 'female';
export type Species = 'human' | 'half-giant' | 'dog' | 'owl' | 'werewolf' | 'ghost' | 'goblin' | 'giant' | 'house-elf';
