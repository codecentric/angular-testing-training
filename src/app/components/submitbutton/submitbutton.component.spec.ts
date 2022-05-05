import {SubmitbuttonComponent} from './submitbutton.component';
import {createComponentFactory, Spectator} from "@ngneat/spectator/jest";


describe('SubmitbuttonComponent', () => {

  let spectator: Spectator<SubmitbuttonComponent>


  const createComponent = createComponentFactory(SubmitbuttonComponent)


  beforeEach(async () => {
    spectator = createComponent()
  });


  it('renders a submit button', () => {
    let button = spectator.query('[data-testid="custom-submit-button');


    expect(button?.getAttribute('type')).toEqual('submit');
  });

  it('shows displays the text passed by the "text" property', () => {
    spectator.component.text = 'click me'
    spectator.detectChanges()

    let button = spectator.query('[data-testid="custom-submit-button');

    expect(button?.textContent?.trim()).toEqual('click me');
  });

  it('emits a clicked event on click', () => {

    let clicked = false;
    spectator.component.clicked.subscribe(() => (clicked = true));

    let button = spectator.query('[data-testid="custom-submit-button');

    spectator.click(button!)
    expect(clicked).toBeTruthy();
  });

  it('can be disabled by setting disabled to true', () => {
    spectator.component.disabled = true;
    spectator.detectChanges()


    let button = spectator.query('[data-testid="custom-submit-button');


    expect(button?.getAttribute('disabled')).not.toBeNull();
  });
});
