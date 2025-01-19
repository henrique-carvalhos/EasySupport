import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsHeaderComponent } from './es-header.component';

describe('EsHeaderComponent', () => {
  let component: EsHeaderComponent;
  let fixture: ComponentFixture<EsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
