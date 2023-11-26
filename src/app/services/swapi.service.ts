import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import SWAPI_ENDPOINTS from '../constants/swapi_endpoints';

import Character from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacter(personId: number): Promise<Character> {
    const SWAPI_CHARACTER_ENDPOINT: string = SWAPI_ENDPOINTS.GET_CHARACTER(personId);

    return new Promise((resolve, reject) => {
      this.http.get<any>(SWAPI_CHARACTER_ENDPOINT).subscribe({
        next: response => resolve(response),
        error: err => reject(err)
      });
    });
  }
}
