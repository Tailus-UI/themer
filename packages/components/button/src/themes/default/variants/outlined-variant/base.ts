import { buttonSizes, getButtonSizes, getIconButtonSizes, iconOnlyButtonSizes } from "./../index";
import outlinedColors from "./colors";

const getOutlinedButtonSizes = (color, sizes = buttonSizes) => {
    return getButtonSizes(color, outlinedColors, sizes);
};

const getOutlinedIconButtonSizes = (color, sizes = buttonSizes) => {
    return getIconButtonSizes(color, outlinedColors, sizes);
};

const getGhostIconOnlyButtonSizes = (color) => {
    return getOutlinedButtonSizes(color, iconOnlyButtonSizes);
};

export { getOutlinedIconButtonSizes, getOutlinedButtonSizes, getGhostIconOnlyButtonSizes };
export { iconSizes, leadingIconSizes, trailingIconSizes } from "./../index";
