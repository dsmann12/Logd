import { LogdPage } from './app.po';

describe('logd App', () => {
  let page: LogdPage;

  beforeEach(() => {
    page = new LogdPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
