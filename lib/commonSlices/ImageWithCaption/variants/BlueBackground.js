import { SliceFactory } from "../../../commonComponents/Containers";
import { Base } from "../base";

export const BlueBackground = SliceFactory(Base, {
  sliceProps: {
    style: { "background-color": "blue" },
  },
});
