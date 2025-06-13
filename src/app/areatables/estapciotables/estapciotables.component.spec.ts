import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstapciotablesComponent } from './estapciotables.component';

describe('EstapciotablesComponent', () => {
  let component: EstapciotablesComponent;
  let fixture: ComponentFixture<EstapciotablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstapciotablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstapciotablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
