import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

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
  characterForm: FormGroup<{ characterId: FormControl<number> }> = new FormGroup({
     characterId: new FormControl(1)
  });
  character: Character;
  isError: boolean = false;
  isLoading: boolean = false;

  constructor(
    private swapiService: SwapiService
  ) {}

  preventDefault(e: any): void {
    e.preventDefault();
  }

  async getCharacterById(): Promise<void> {
    this.isLoading = true;

    try {
      const characterId: number = this.characterForm.get('characterId').value;

      this.character = await this.swapiService.getCharacter(characterId);
    } catch (err) {
      this.character = null;
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  }
}
