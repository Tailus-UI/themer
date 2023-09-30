import { Sizes } from "../../../button.types";
import { buttonSizes, getButtonSizes, getIconButtonSizes, iconOnlyButtonSizes } from "./../index";
import softColors from "./colors";

const getSoftButtonSizes = (color: string, sizes: Sizes = buttonSizes): Sizes => {
    return getButtonSizes(color, softColors, sizes);
};

const getSoftIconButtonSizes = (color: string, sizes = buttonSizes): Sizes => {
    return getIconButtonSizes(color, softColors, sizes);
};

const getSoftIconOnlyButtonSizes = (color: string): Sizes => {
    return getSoftButtonSizes(color, iconOnlyButtonSizes);
};

export { getSoftIconButtonSizes, getSoftButtonSizes, getSoftIconOnlyButtonSizes };
export { iconSizes, leadingIconSizes, trailingIconSizes } from "./../index";
