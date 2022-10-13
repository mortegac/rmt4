import { SliceFactory } from "../../../commonComponents/Containers/";
import { Title, Logos } from "../components/index";

const Base = props => (
  <>
    <Title text={props.primary.title} />
    <Logos list={props.items} />
  </>
);

export const NoDescription = SliceFactory(Base, {
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
