import { TestdirectivePage } from './app.po';

describe('testdirective App', function() {
  let page: TestdirectivePage;

  beforeEach(() => {
    page = new TestdirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
