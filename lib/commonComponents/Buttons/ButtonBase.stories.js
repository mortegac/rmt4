import ButtonBase from './ButtonBase';

export default {
  title: 'Components/Button',
  component: ButtonBase,
  argTypes: {
  },
};

const Template = (args) => <ButtonBase {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  innerText: 'Text',
  url: '#',
  fullwidth: false,
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  innerText: 'Text',
  url: '#',
  fullwidth: false,
  type: 'secondary'
};

export const OutlineWhite = Template.bind({});
OutlineWhite.args = {
  innerText: 'Text',
  url: '#',
  fullwidth: false,
  type: 'outline-white'
};  
