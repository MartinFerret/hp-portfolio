import {Component, computed, output, signal} from '@angular/core';
import {CharacterModel, Gender, House, Species} from '@models/character.model';
import {Wand} from '@models/wand.model';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-add-character',
  imports: [
    FormsModule
  ],
  templateUrl: './add-character.html',
  styleUrl: './add-character.scss',
})
export class AddCharacter {
  emitNewCharacter = output<CharacterModel>();

  // Données à afficher.
  protected houses: House[] = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  protected genders: Gender[] = ['male', 'female'];
  protected speciesList: Species[] = ['human', 'half-giant', 'dog', 'owl', 'werewolf', 'ghost', 'goblin', 'giant', 'house-elf'];

  // Création formulaire.
  protected name = signal<string>('');
  protected alternate_names = signal<string[]>([]);
  protected species = signal<Species>('half-giant');
  protected gender = signal<Gender>('male');
  protected house = signal<House>('Gryffindor');
  protected dateOfBirth = signal<string | null>('');
  protected yearOfBirth = signal<number | null>(null);
  protected wizard = signal<boolean>(false);
  protected ancestry = signal<string>('');
  protected eyeColor = signal<string>('');
  protected hairColor = signal<string>('');
  protected wand = signal<Wand>({wood: '', core: '', length: null});
  protected patronus = signal<string>('');
  protected hogwartsStudent = signal<boolean>(false);
  protected hogwartsStaff = signal<boolean>(false);
  protected actor = signal<string>('');
  protected alternate_actors = signal<string[]>([]);
  protected alive = signal<boolean>(false);
  protected image = signal<string>('');

  protected Number = Number;

  // Ajout de validateurs.
  nameValid = computed(() => this.name().trim().length > 2);
  actorValid = computed(() => this.actor().trim().length > 2);

  // Récupérer les données du formulaire.
  protected newAltName = signal('');
  protected newAltActors = signal('');

  protected addAltName() {
    this.alternate_names.update(names => [...names, this.newAltName()]);
    this.newAltName.set('');
  }

  protected addAltActors() {
    this.alternate_actors.update(names => [...names, this.newAltActors()]);
    this.newAltActors.set('');
  }

  protected removeAltName(value: string) {
    this.alternate_names.update(names => names.filter(name => name !== value));
  }

  protected removeAltActors(value: string) {
    this.alternate_actors.update(names => names.filter(name => name !== value));
  }

  protected setWandWood(wood: string) {
    this.wand.update(wand => ({...wand, wood}));
  }

  protected setWandCore(core: string) {
    this.wand.update(wand => ({...wand, core}));
  }

  protected setWandLength(length: number | null) {
    this.wand.update(wand => ({...wand, length}));
  }

  // Envoyer les données au parent - output.
  protected submit() {
    const newCharacter: CharacterModel = {
      id: crypto.randomUUID(),
      name: this.name().trim(),
      alternate_names: this.alternate_names(),
      species: this.species(),
      gender: this.gender(),
      house: this.house(),
      dateOfBirth: this.dateOfBirth(),
      yearOfBirth: this.yearOfBirth(),
      wizard: this.wizard(),
      ancestry: this.ancestry(),
      eyeColour: this.eyeColor(),
      hairColour: this.hairColor(),
      wand: this.wand(),
      patronus: this.patronus(),
      hogwartsStudent: this.hogwartsStudent(),
      hogwartsStaff: this.hogwartsStaff(),
      actor: this.actor(),
      alternate_actors: this.alternate_actors(),
      alive: this.alive(),
      image: this.image()
    }

    // Emit vers le parent.
    this.emitNewCharacter.emit(newCharacter);
    this.resetForm();
  }

  private resetForm() {
    this.name.set('');
    this.alternate_names.set([]);
    this.species.set('half-giant');
    this.gender.set('male');
    this.house.set('Gryffindor');
    this.dateOfBirth.set('');
    this.yearOfBirth.set(null);
    this.wizard.set(false);
    this.ancestry.set('');
    this.eyeColor.set('');
    this.hairColor.set('');
    this.wand.set({wood: '', core: '', length: null});
    this.patronus.set('');
    this.hogwartsStudent.set(false);
    this.hogwartsStaff.set(false);
    this.actor.set('');
    this.alternate_actors.set([]);
    this.alive.set(false);
    this.image.set('');
  }
}
