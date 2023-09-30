import { Sizes } from "../../../button.types";
import { buttonSizes, getButtonSizes, getIconButtonSizes, iconOnlyButtonSizes } from "./../index";
import ghostColors from "./colors";

const getGhostButtonSizes = (color: string, sizes: Sizes = buttonSizes): Sizes => {
    return getButtonSizes(color, ghostColors, sizes);
};

const getGhostIconButtonSizes = (color: string, sizes: Sizes = buttonSizes): Sizes => {
    return getIconButtonSizes(color, ghostColors, sizes);
};

const getGhostIconOnlyButtonSizes = (color: string) => {
    return getGhostButtonSizes(color, iconOnlyButtonSizes);
};

export { getGhostIconButtonSizes, getGhostButtonSizes, getGhostIconOnlyButtonSizes };
export { iconSizes, leadingIconSizes, trailingIconSizes } from "./../index";
