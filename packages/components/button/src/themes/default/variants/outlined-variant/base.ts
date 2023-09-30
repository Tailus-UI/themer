import { Sizes } from "../../../button.types";
import { buttonSizes, getButtonSizes, getIconButtonSizes, iconOnlyButtonSizes } from "./../index";
import outlinedColors from "./colors";

const getOutlinedButtonSizes = (color: string, sizes: Sizes = buttonSizes): Sizes => {
    return getButtonSizes(color, outlinedColors, sizes);
};

const getOutlinedIconButtonSizes = (color: string, sizes: Sizes = buttonSizes): Sizes => {
    return getIconButtonSizes(color, outlinedColors, sizes);
};

const getGhostIconOnlyButtonSizes = (color: string): Sizes => {
    return getOutlinedButtonSizes(color, iconOnlyButtonSizes);
};

export { getOutlinedIconButtonSizes, getOutlinedButtonSizes, getGhostIconOnlyButtonSizes };
export { iconSizes, leadingIconSizes, trailingIconSizes } from "./../index";
