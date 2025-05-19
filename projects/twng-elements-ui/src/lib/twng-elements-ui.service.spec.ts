import { TestBed } from '@angular/core/testing';

import { TwngElementsUiService } from './twng-elements-ui.service';

describe('TwngElementsUiService', () => {
  let service: TwngElementsUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwngElementsUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
