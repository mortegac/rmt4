import FooterList  from "./FooterList";

export default {
  title: "Footer/Links column",
  component: FooterList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FooterList {...args} />;

export const DefaultList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultList.args = {
};




