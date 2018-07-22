import { RugbyModule } from '@cl/rugby/rugby.module';

describe('RugbyModule', () => {
  let rugbyModule: RugbyModule;

  beforeEach(() => {
    rugbyModule = new RugbyModule();
  });

  it('should create an instance', () => {
    expect(rugbyModule).toBeTruthy();
  });
});
