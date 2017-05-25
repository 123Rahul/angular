import { Sample4Page } from './app.po';

describe('sample4 App', () => {
  let page: Sample4Page;

  beforeEach(() => {
    page = new Sample4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
