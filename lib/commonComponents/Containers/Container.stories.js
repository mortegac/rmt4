import { SectionContainer, PageContainer, SliceContainer } from "./index";

export default {
  title: "Containers/Layout",
  argTypes: {},
};

const Template = () => (
  <PageContainer style={{ border: "1px solid red", backgroundColor: "red" }}>
    <SectionContainer>
      <SliceContainer style={{ border: "1px solid pink" }}></SliceContainer>
      <span style={{ border: "1px solid blue" }}>
        This is a Section Container, with top and bottom padding. <br />
        The red frame is a Page Container, with a top margin.
      </span>
    </SectionContainer>
  </PageContainer>
);

export const Default = Template.bind({});
Default.args = {};
