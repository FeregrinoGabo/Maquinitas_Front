import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaComponents } from './entrada-components';

describe('EntradaComponents', () => {
  let component: EntradaComponents;
  let fixture: ComponentFixture<EntradaComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(EntradaComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
