import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDisplayComponent } from './character-display.component';

describe('CharacterDisplayComponent', () => {
  let component: CharacterDisplayComponent;
  let fixture: ComponentFixture<CharacterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharacterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
