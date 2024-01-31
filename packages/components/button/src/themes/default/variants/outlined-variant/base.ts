import { Sizes, ButtonBase } from "../../../button.types";
import { buttonSizes, getButtonSizes, getIconButtonSizes, iconOnlyButtonSizes } from "./../index";
import outlinedColors from "./colors";

const outlinedBase: ButtonBase = {
    layout: "group flex items-center relative [borderWidth:--btn-border-width] rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative text-white before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border-t before:bg-gradient-to-b *:disabled:opacity-20 disabled:before:border-0 disabled:border",
    appearances: {
        light: "bg-white before:border-white disabled:before:bg-gray-100 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-50 disabled:before:from-transparent",
        dark: "dark:bg-transparent dark:before:border-b dark:before:border-t-0 dark:before:border-transparent dark:before:from-transparent dark:hover:before:border-gray-950/20 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:*:disabled:!text-white",
        both: "bg-white dark:bg-transparent before:border-white disabled:before:bg-gray-100 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-50 disabled:before:from-transparent dark:before:border-b dark:before:border-t-0 dark:before:border-transparent dark:before:from-transparent dark:hover:before:border-gray-950/20 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:*:disabled:!text-white",
    },
};

const getOutlinedButtonSizes = (
    color: string,
    base: ButtonBase = outlinedBase,
    sizes: Sizes = buttonSizes
): Sizes => {
    return getButtonSizes(color, base, outlinedColors, sizes);
};

const getOutlinedIconButtonSizes = (color: string, sizes: Sizes = buttonSizes): Sizes => {
    return getIconButtonSizes(color, outlinedBase, outlinedColors, sizes);
};

const getGhostIconOnlyButtonSizes = (color: string): Sizes => {
    return getOutlinedButtonSizes(color, outlinedBase, iconOnlyButtonSizes);
};

export { getOutlinedIconButtonSizes, getOutlinedButtonSizes, getGhostIconOnlyButtonSizes };
export { iconSizes, leadingIconSizes, trailingIconSizes } from "./../index";
