import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsWrapperComponent } from './es-wrapper.component';

describe('EsWrapperComponent', () => {
  let component: EsWrapperComponent;
  let fixture: ComponentFixture<EsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
