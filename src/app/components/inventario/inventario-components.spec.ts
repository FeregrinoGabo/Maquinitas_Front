import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioComponents } from './inventario-components';

describe('InventarioComponents', () => {
  let component: InventarioComponents;
  let fixture: ComponentFixture<InventarioComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
