import { buttonSizes, getButtonSizes, getIconButtonSizes, iconOnlyButtonSizes } from "./../index";
import ghostColors from "./colors";

const getGhostButtonSizes = (color, sizes = buttonSizes) => {
    return getButtonSizes(color, ghostColors, sizes);
};

const getGhostIconButtonSizes = (color, sizes = buttonSizes) => {
    return getIconButtonSizes(color, ghostColors, sizes);
};

const getGhostIconOnlyButtonSizes = (color) => {
    return getGhostButtonSizes(color, iconOnlyButtonSizes);
};

export { getGhostIconButtonSizes, getGhostButtonSizes, getGhostIconOnlyButtonSizes };
export { iconSizes, leadingIconSizes, trailingIconSizes } from "./../index";
