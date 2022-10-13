import { SliceFactory } from "../../../commonComponents/Containers";
import { Base } from "../base";

export const RedBackground = SliceFactory(Base, {
  sliceProps: {
    style: { "background-color": "red" },
  },
});
