import * as baseButton from "./../base";
import config from "./../../../button.config";
import colors from "./colors";

const outlinedButton = {
    base:
        baseButton.base.layout +
        " before:border-[1.5px] " +
        baseButton.base.appearances[config.appearance],
    label: baseButton.label,
    colors,
    size: baseButton.sizes,
};

export default outlinedButton;
export { outlinedButton };
