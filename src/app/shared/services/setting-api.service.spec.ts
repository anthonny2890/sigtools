import { TestBed, inject } from '@angular/core/testing';

import { SettingApiService } from './setting-api.service';

describe('SettingApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingApiService]
    });
  });

  it('should be created', inject([SettingApiService], (service: SettingApiService) => {
    expect(service).toBeTruthy();
  }));
});
