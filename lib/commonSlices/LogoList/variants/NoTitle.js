import { SliceFactory } from "../../../commonComponents/Containers/";
import { Description, Logos } from "../components/index";

const Base = props => (
  <>
    <Description description={props.primary.description} />
    <Logos list={props.items} />
  </>
);

export const NoTitle = SliceFactory(Base, {
  sliceContainerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});
