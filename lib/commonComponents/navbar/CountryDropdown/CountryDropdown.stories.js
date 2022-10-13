import { CountryDropdown } from "./CountryDropdown";
import { alternateLanguages } from "../utils/LangAndCountryUtils";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Navbar/CountryDropdown",
  component: CountryDropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CountryDropdown {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  currentLanguage: 'en-us',
  alternateLanguages: Object.values(alternateLanguages)
};

