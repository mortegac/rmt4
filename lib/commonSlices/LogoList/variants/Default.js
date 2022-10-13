import { SliceFactory } from "../../../commonComponents/Containers/";
import { Title, Description, Logos } from "../components/index";

const Base = props => (
  <>
    <Title text={props?.primary?.title || ""} />
    <Description description={props?.primary?.description || ""} />
    <Logos list={props.items} />
  </>
);

const style = {
  style: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const Default = SliceFactory(Base, {
  sliceContainerProps: { ...style },
});
