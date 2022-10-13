import { NavDesktopItem } from "./NavDesktopItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Navbar/NavDesktopItem",
  component: NavDesktopItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <NavDesktopItem {...args} />;

export const Selected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Selected.args = {
  index: 1,
  id: 1,
  url: '/track-a-transfer/',
  label: "Track a transfer",
  isSelected: true
};

export const NotSelected = Template.bind({});
NotSelected.args = {
  index: 2,
  id: 2,
  url: '/track-a-transfer/',
  label: "Track a transfer",
  isSelected: false
};

