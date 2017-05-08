import { FoodZonePage } from './app.po';

describe('food-zone App', function() {
  let page: FoodZonePage;

  beforeEach(() => {
    page = new FoodZonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
