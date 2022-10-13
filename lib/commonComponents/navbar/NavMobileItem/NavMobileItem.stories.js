import { NavMobileItem } from "./NavMobileItem";

export default {
  title: "Navbar/NavMobileItem",
  component: NavMobileItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NavMobileItem {...args} />;

export const Selected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Selected.args = {
  id: 1,
  label: "Track a transfer",
  isSelected: true,
  url: '/track-a-transfer/'
};

export const NotSelected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotSelected.args = {
  id: 1,
  label: "Track a transfer",
  isSelected: false,
  url: '/track-a-transfer/'
};



