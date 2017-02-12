import { AngularCliNgFourPage } from './app.po';

describe('angular-cli-ng-four App', () => {
  let page: AngularCliNgFourPage;

  beforeEach(() => {
    page = new AngularCliNgFourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
