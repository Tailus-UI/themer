import { buttonSizes, getButtonSizes, getIconButtonSizes, iconOnlyButtonSizes } from "./../index";
import softColors from "./colors";

const getSoftButtonSizes = (color, sizes = buttonSizes) => {
    return getButtonSizes(color, softColors, sizes);
};

const getSoftIconButtonSizes = (color, sizes = buttonSizes) => {
    return getIconButtonSizes(color, softColors, sizes);
};

const getSoftIconOnlyButtonSizes = (color) => {
    return getSoftButtonSizes(color, iconOnlyButtonSizes);
};

export { getSoftIconButtonSizes, getSoftButtonSizes, getSoftIconOnlyButtonSizes };
export { iconSizes, leadingIconSizes, trailingIconSizes } from "./../index";
