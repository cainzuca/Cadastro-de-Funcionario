import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialPageComponent } from './inicial-page.component';

describe('InicialPageComponent', () => {
  let component: InicialPageComponent;
  let fixture: ComponentFixture<InicialPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialPageComponent]
    });
    fixture = TestBed.createComponent(InicialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
