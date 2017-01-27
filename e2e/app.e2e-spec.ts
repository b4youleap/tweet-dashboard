import { TweetDashboardPage } from './app.po';

describe('tweet-dashboard App', function() {
  let page: TweetDashboardPage;

  beforeEach(() => {
    page = new TweetDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
