import Logo  from "./Logo";

export default {
  title: "Footer/Logo",
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Logo {...args} />;

export const DefaultLogo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultLogo.args = {
};




