import SocialLinks  from "./SocialLinks";

export default {
  title: "Footer/Social Links",
  component: SocialLinks,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SocialLinks {...args} />;

export const DefaultSocialLinks = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultSocialLinks.args = {
};




