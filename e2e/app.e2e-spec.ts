import { PlanadminPage } from './app.po';

describe('planadmin App', () => {
  let page: PlanadminPage;

  beforeEach(() => {
    page = new PlanadminPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
