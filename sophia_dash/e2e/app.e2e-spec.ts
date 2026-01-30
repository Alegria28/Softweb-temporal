import { NgsophiaPage } from './app.po';

describe('ng-sophia App', () => {
  let page: NgsophiaPage;

  beforeEach(() => {
    page = new NgsophiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
