import { StarWarsUniversePage } from './app.po';

describe('star-wars-universe App', () => {
  let page: StarWarsUniversePage;

  beforeEach(() => {
    page = new StarWarsUniversePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
