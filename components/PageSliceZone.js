import dynamic from "next/dynamic";

const HeroSlice  = dynamic(() => import("./slices/HeroSlice"));
const HeroSliceMicroSite  = dynamic(() => import("./slices/HeroSliceMicroSite"));
const FeatureBoxesSlice  = dynamic(() => import("./slices/FeatureBoxesSlice"));
const LeftImageSlice  = dynamic(() => import("./slices/LeftImageSlice"));
const RightImageSlice  = dynamic(() => import("./slices/RightImageSlice"));
const HtmlSlice  = dynamic(() => import("./slices/HtmlSlice"));
const TitleImageSlice  = dynamic(() => import("./slices/TitleImageSlice"));
const PartnerSlice = dynamic(() => import("./slices/PartnerSlice"));
const SectionBgSlice = dynamic(() => import("./slices/SectionBgColor"));
const TwoSectionsMapsSlice = dynamic(() => import("./slices/TwoSectionsMaps"));
const PartnersLogoSlice  = dynamic(() => import("./slices/PartnersLogoSlice"));
const VerifyEmailSlice  = dynamic(() => import("./slices/VerifyEmailSlice"));
const FormCPPASlice  = dynamic(() => import("./slices/FormCPPASlice"));
const SitemapSlice  = dynamic(() => import("./slices/SitemapSlice"));


const PageSliceZone = ({ slices = [] }) => {
  const sliceComponents = {
    hero: HeroSlice,
    feature_boxes: FeatureBoxesSlice,
    left_image_section: LeftImageSlice,
    right_image_section: RightImageSlice,
    // connections_image: TitleImageSlice,
    partners: PartnersLogoSlice,
    partner_slice: PartnerSlice,
    title_image: TitleImageSlice,
    index_partner: PartnerSlice,
    html: HtmlSlice,
    micro_slice_one: HeroSliceMicroSite,
    micro_slice_two: SectionBgSlice,
    micro_slice_tree: TwoSectionsMapsSlice,
    micro_slice_four: FeatureBoxesSlice,
    slice_validate_email: VerifyEmailSlice,
    form_ccpa: FormCPPASlice,
    sitemap: SitemapSlice,
  };
  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    if (SliceComponent) {
      return (
        <SliceComponent
          slice={slice}
          key={`slice-${index}`}
          isVisibleImageMobile={false}
        />
      );
    }
    return null;
  });
};

export default PageSliceZone;
