import { Sizes, ButtonBase } from "../../../button.types";
import { buttonSizes, getButtonSizes, getIconButtonSizes, iconOnlyButtonSizes } from "./../index";
import softColors from "./colors";

const softBase: ButtonBase = {
    layout: "group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20",
    appearances: {
        light: "disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100",
        dark: "dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white",
        both: "disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white",
    },
};
const getSoftButtonSizes = (
    color: string,
    base: ButtonBase = softBase,
    sizes: Sizes = buttonSizes
): Sizes => {
    return getButtonSizes(color, base, softColors, sizes);
};

const getSoftIconButtonSizes = (color: string, sizes = buttonSizes): Sizes => {
    return getIconButtonSizes(color, softBase, softColors, sizes);
};

const getSoftIconOnlyButtonSizes = (color: string): Sizes => {
    return getSoftButtonSizes(color, softBase, iconOnlyButtonSizes);
};

export { getSoftIconButtonSizes, getSoftButtonSizes, getSoftIconOnlyButtonSizes };
export { iconSizes, leadingIconSizes, trailingIconSizes } from "./../index";
