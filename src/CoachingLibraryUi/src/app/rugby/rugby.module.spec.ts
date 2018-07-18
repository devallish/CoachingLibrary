import { RugbyModule } from './rugby.module';

describe('RugbyModule', () => {
  let rugbyModule: RugbyModule;

  beforeEach(() => {
    rugbyModule = new RugbyModule();
  });

  it('should create an instance', () => {
    expect(rugbyModule).toBeTruthy();
  });
});
