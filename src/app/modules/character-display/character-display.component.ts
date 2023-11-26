import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import Character from '../../models/character';

@Component({
  selector: 'app-character-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-display.component.html',
  styleUrl: './character-display.component.sass'
})
export class CharacterDisplayComponent {
  @Input() character: Character;
}
