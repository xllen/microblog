import { MicroblogPage } from './app.po';

describe('microblog App', function() {
  let page: MicroblogPage;

  beforeEach(() => {
    page = new MicroblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
