import * as baseButton from "./../base";
import colors from "./colors";
import config from "./../../../button.config";

const icon = {
    xs: "relative -ml-1 h-3.5 w-3.5",
    sm: "relative -ml-1 h-4 w-4",
    md: "relative -ml-1 h-[1.125rem] w-[1.125rem]",
    lg: "relative -ml-1 h-5 w-5",
    xl: "relative -ml-1 h-6 w-6",
};

const outlinedLeadingIconButton = {
    base:
        baseButton.base.layout +
        " before:border-[1.5px] flex items-center gap-2 items-center " +
        baseButton.base.appearances[config.appearance],
    label: baseButton.label,
    colors,
    size: baseButton.sizes,
    icon,
};

export default outlinedLeadingIconButton;
export { outlinedLeadingIconButton };
