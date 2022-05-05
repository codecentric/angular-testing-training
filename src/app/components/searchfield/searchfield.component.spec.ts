import { SearchfieldComponent } from './searchfield.component';
import { SubmitbuttonComponent } from '../submitbutton/submitbutton.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import {
  render,
  RenderResult,
  screen,
  waitFor,
} from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

function typeInto(inputElement: DebugElement, value: string) {
  inputElement.nativeElement.value = value;
  inputElement.triggerEventHandler('input', {
    target: {
      value,
    },
  });
}

describe('SearchfieldComponent', () => {
  let renderResult: RenderResult<SearchfieldComponent>;

  const submitValue = jest.fn();

  beforeEach(async () => {
    renderResult = await render(SearchfieldComponent, {
      componentProperties: {
        submitted: {
          emit: submitValue,
        },
      } as any,
      declarations: [SubmitbuttonComponent],
      imports: [ReactiveFormsModule],
    });
  });

  it('renders an input field of type text', () => {
    let input = screen.getByLabelText('Search for');

    expect(input.getAttribute('type')).toEqual('text');
  });

  it('emits the submitted value', () => {
    let input = screen.getByLabelText('Search for');

    userEvent.type(input, 'search value');

    userEvent.click(screen.getByTestId('custom-submit-button'));

    waitFor(() => expect(submitValue).toHaveBeenCalledWith('search value'));
  });
  //
  it('clears the search field after submit', () => {
    let input = screen.getByLabelText('Search for');

    let value = 'search value';
    userEvent.type(input, value);

    userEvent.click(screen.getByTestId('custom-submit-button'));

    expect(input).toHaveDisplayValue('');
  });

  it('disables the submit button when the input is empty', () => {
    const submitButton = screen.getByTestId('custom-submit-button');

    expect(submitButton).toBeDisabled();
  });
});
