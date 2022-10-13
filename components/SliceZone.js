import React from "react";
import dynamic from "next/dynamic";

const HeroSlice = dynamic(() => import("./slices/HeroSlice"));
const PartnerSlice = dynamic(() => import("./slices/PartnerSlice"));
const FeatureBoxesSlice = dynamic(() => import("./slices/FeatureBoxesSlice"));
const RightImageSlice = dynamic(() => import("./slices/RightImageSlice"));
const LeftImageSlice = dynamic(() => import("./slices/LeftImageSlice"));
const SliderSlice = dynamic(() => import("./slices/SliderSlice"));
const TitleImageSlice = dynamic(() => import("./slices/TitleImageSlice"));

const SliceZone = ({ slices }) => {
  const sliceComponents = {
    index_section_one: HeroSlice,
    index_partner: PartnerSlice,
    index_section_two: FeatureBoxesSlice,
    index_section_four: RightImageSlice,
    index_section_three: LeftImageSlice,
    index_section_five: SliderSlice,
    index_section_six: TitleImageSlice,
  };

  // return(
  //   <>
  //   {
  //     slices.map((slice, index) =>
  //       (
  //         <>
  //         <pre style={{maxWidth: '1000px'}}>{JSON.stringify(slice.slice_type, null, 2)}</pre>
  //         <hr />
  //         </>
  //       ))
  //   }
  //   </>
  // )

  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />;
    }
    return null;
  });
};

export default SliceZone;
