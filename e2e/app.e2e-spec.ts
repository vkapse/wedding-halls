import { WeddingHallsPage } from './app.po';

describe('wedding-halls App', function() {
  let page: WeddingHallsPage;

  beforeEach(() => {
    page = new WeddingHallsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
