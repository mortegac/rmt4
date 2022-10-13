import { Default } from "./base";
import { BlueBackground } from "./variants/BlueBackground";
import { RedBackground } from "./variants/RedBackground";

/**
 * Component for the ImageWithCaption Slice.
 */
export const ImageWithCaption = props => {
  switch (props.slice.variation) {
    case "redBackground":
      return <RedBackground {...props} />;
    case "blueBackground":
      return <BlueBackground {...props} />;
    default:
      return <Default {...props} />;
  }
};
