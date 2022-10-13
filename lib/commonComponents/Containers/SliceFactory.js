import { SliceContainer, SectionContainer } from "./";

export const SliceFactory = (
  Slice,
  options = {
    sliceProps: {},
    sliceContainerProps: {},
    sectionContainerProps: {},
  }
) => {
  const { sliceProps, sliceContainerProps, sectionContainerProps } = options;
  const SliceWrapper = props => {
    return (
      <SectionContainer {...sectionContainerProps}>
        <SliceContainer {...sliceContainerProps}>
          <Slice {...props} {...sliceProps} />
        </SliceContainer>
      </SectionContainer>
    );
  };
  return SliceWrapper;
};
