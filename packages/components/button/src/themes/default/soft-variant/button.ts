import * as baseButton from "../base";
import config from "../../../button.config";
import colors from "./colors";

const softButton = {
    base: baseButton.base.layout + " " + baseButton.base.appearances[config.appearance],
    label: baseButton.label,
    colors,
    size: baseButton.sizes,
};

export default softButton;
export { softButton };
