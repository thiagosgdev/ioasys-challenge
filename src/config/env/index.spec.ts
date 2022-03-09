import envConfig from './index';

describe('Env Config', () => {
  it('Shoudl return an environment variable', () => {
    const response = envConfig();
    expect(response).toBeTruthy();
  });
});
