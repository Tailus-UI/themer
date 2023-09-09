import * as baseButton from "../base";
import config from "../../../button.config";
import colors from "./colors";

const ghostButton = {
    base: baseButton.base.layout + " " + baseButton.base.appearances[config.appearance],
    label: baseButton.label,
    colors,
    size: baseButton.sizes,
};

export default ghostButton;
export { ghostButton };
