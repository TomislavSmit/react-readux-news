import { shallow } from 'enzyme';

import App from '../app';
import Header from '../../header/header';
import AppRouter from '../../../routes';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('renders AppRouter component', () => {
    expect(wrapper.find(AppRouter).exists()).toBe(true);
  });
});
