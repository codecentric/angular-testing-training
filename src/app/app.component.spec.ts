import { AppComponent } from './app.component';
import { DogComponent } from './components/dog/dog.component';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

describe('AppComponent', () => {
  beforeEach(async () => {
    await render(AppComponent, {
      declarations: [DogComponent],
    });
  });

  it('shows a list of dog images', () => {
    const images = screen.getAllByRole('img');

    expect(images.length).toEqual(3);
  });

  it('lets a dog bark its bark when clicking the respective bark button', async () => {
    const allButtons = screen.getAllByRole('button', { name: /bark!/i });

    userEvent.click(allButtons[0]);

    expect(await screen.findByText('Dog says: "Woof!"')).toBeVisible();
  });
});
