import FooterCopyright  from "./FooterCopyright";

export default {
  title: "Footer/CopyrightText",
  component: FooterCopyright,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FooterCopyright {...args} />;

export const RiaCopyright = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RiaCopyright.args = {
  copyrightText: "Ria Financial Services © 2022 Continental Exchange Solutions, Inc. Todos los derechos reservados."
};




