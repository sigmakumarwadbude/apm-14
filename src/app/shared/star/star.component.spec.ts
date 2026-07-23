import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';
import { By } from '@angular/platform-browser';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit ratingClicked when the star is clicked', () => {
    component.rating = 4.5;
    fixture.detectChanges();

    let emitted = '';

    component.ratingClicked.subscribe((value) => {
      emitted = value;
    });

    // Find the clickable element
    const clickable = fixture.debugElement.query(By.css('div')); // or 'span'

    // Simulate click
    clickable.triggerEventHandler('click');

    // or
    // clickable.nativeElement.click();

    fixture.detectChanges();

    expect(emitted).toBe('4.5 clicked');
  });
});
