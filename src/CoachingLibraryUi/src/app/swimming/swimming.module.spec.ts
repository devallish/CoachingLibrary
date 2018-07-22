import { SwimmingModule } from '@cl/swimming/swimming.module';

describe('SwimmingModule', () => {
  let swimmingModule: SwimmingModule;

  beforeEach(() => {
    swimmingModule = new SwimmingModule();
  });

  it('should create an instance', () => {
    expect(swimmingModule).toBeTruthy();
  });
});
