import { DogComponent } from './dog.component';
import { render, screen, waitFor } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

describe('DogComponent', () => {
  const expectedDog: Dog = {
    name: 'Bello',
    image: 'https://dogapi/fido.jpg',
    bark: 'Woof',
  };

  const onBark = jest.fn();

  beforeEach(async () => {
    await render(DogComponent, {
      componentProperties: {
        dog: expectedDog,
        onBark: {
          emit: onBark,
        } as any,
      },
    });
  });

  it('shows the image taken from the url of the passed dog', () => {
    const image = screen.getByAltText('Image of Bello');

    expect(image).toHaveAttribute('src', expectedDog.image);
  });

  it('shows a "bark" button that emits the passed dogs bark', () => {
    const button = screen.getByRole('button', { name: /bark!/i });

    userEvent.click(button);

    waitFor(() => expect(onBark).toHaveBeenCalledWith(expectedDog.bark));
  });
});
