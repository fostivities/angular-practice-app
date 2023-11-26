import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import Character from './models/character';

import { SwapiService } from './services/swapi.service';

import { CharacterDisplayComponent } from './modules/character-display/character-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    CharacterDisplayComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  characterId: FormControl<number> = new FormControl(1);
  character: Character = null;
  isError: boolean = false;
  isLoading: boolean = false;

  constructor(
    private swapiService: SwapiService
  ) {}

  async getCharacterById(): Promise<void> {
    try {
      this.isLoading = true;
      this.character = await this.swapiService.getCharacter(this.characterId.value);
    } catch (err) {
      this.character = null;
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }
}
