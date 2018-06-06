import { MarsModule } from './mars.module';

describe('MarsModule', () => {
  let marsModule: MarsModule;

  beforeEach(() => {
    marsModule = new MarsModule();
  });

  it('should create an instance', () => {
    expect(marsModule).toBeTruthy();
  });
});
