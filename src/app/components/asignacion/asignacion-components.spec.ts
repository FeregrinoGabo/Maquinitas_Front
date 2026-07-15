import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionComponents } from './asignacion-components';

describe('AsignacionComponents', () => {
  let component: AsignacionComponents;
  let fixture: ComponentFixture<AsignacionComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(AsignacionComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
