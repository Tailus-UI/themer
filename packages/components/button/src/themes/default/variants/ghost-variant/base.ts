import { Sizes, ButtonBase } from "../../../button.types";
import { buttonSizes, getButtonSizes, getIconButtonSizes, iconOnlyButtonSizes } from "./../index";
import ghostColors from "./colors";

const ghostBase: ButtonBase = {
    layout: "group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20",
    appearances: {
        light: "*:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100",
        dark: "dark:disabled:border dark:disabled:border-gray-800 disabled:dark:bg-gray-900 dark:*:disabled:!text-white",
        both: "*:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border dark:disabled:border-gray-800 disabled:dark:bg-gray-900 dark:*:disabled:!text-white",
    },
};

const getGhostButtonSizes = (
    color: string,
    base: ButtonBase = ghostBase,
    sizes: Sizes = buttonSizes
): Sizes => {
    return getButtonSizes(color, base, ghostColors, sizes);
};

const getGhostIconButtonSizes = (
    color: string,
    base: ButtonBase = ghostBase,
    sizes: Sizes = buttonSizes
): Sizes => {
    return getIconButtonSizes(color, base, ghostColors, sizes);
};

const getGhostIconOnlyButtonSizes = (color: string, base: ButtonBase = ghostBase) => {
    return getGhostButtonSizes(color, base, iconOnlyButtonSizes);
};

export { getGhostIconButtonSizes, getGhostButtonSizes, getGhostIconOnlyButtonSizes };
export { iconSizes, leadingIconSizes, trailingIconSizes } from "./../index";
