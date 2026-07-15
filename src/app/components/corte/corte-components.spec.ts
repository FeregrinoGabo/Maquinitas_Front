import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorteComponents } from './corte-components';

describe('CorteComponents', () => {
  let component: CorteComponents;
  let fixture: ComponentFixture<CorteComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorteComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(CorteComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
