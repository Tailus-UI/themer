import * as baseButton from "./../base";
import config from "./../../../button.config";
import colors from "./colors";

const icon = {
    xs: "relative m-auto h-3.5 w-3.5",
    sm: "relative m-auto h-4 w-4",
    md: "relative m-auto h-[1.125rem] w-[1.125rem]",
    lg: "relative m-auto h-5 w-5",
    xl: "relative m-auto h-6 w-6",
};

const size = {
    xs: "relative m-auto h-8 w-8",
    sm: "relative m-auto h-9 w-9",
    md: "relative m-auto h-10 w-10",
    lg: "relative m-auto h-12 w-12",
    xl: "relative m-auto h-14 w-14",
};

const outlinedIconButton = {
    base:
        baseButton.base.layout +
        " before:border-[1.5px] " +
        baseButton.base.appearances[config.appearance],
    colors,
    size: size,
    icon: icon,
};

export default outlinedIconButton;
export { outlinedIconButton };
