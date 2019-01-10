import { DemonstratorModule } from './demonstrator.module';

describe('DemonstratorModule', () => {
  let demonstratorModule: DemonstratorModule;

  beforeEach(() => {
    demonstratorModule = new DemonstratorModule();
  });

  it('should create an instance', () => {
    expect(demonstratorModule).toBeTruthy();
  });
});
