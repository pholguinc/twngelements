import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwngElementsUiComponent } from './twng-elements-ui.component';

describe('TwngElementsUiComponent', () => {
  let component: TwngElementsUiComponent;
  let fixture: ComponentFixture<TwngElementsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwngElementsUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwngElementsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
