import solidColors from "./solidColors";
import config from "./../../button.config";

const base = {
    layout: "group relative [&>*:not(.sr-only)]:relative before:absolute before:inset-0 before:rounded-[--btn-border-radius] before:transition before:duration-300 active:before:scale-95 disabled:cursor-not-allowed disabled:active:before:scale-100",
    appearances: {
        light: "disabled:before:bg-gray-100 disabled:text-gray-950/40",
        dark: "disabled:before:bg-gray-900 disabled:text-white/30",
        both: "disabled:before:bg-gray-100 disabled:text-gray-950/30 dark:disabled:before:bg-gray-900 dark:disabled:text-white/30",
    },
};

const iconButtonUtilities = "flex items-center gap-1.5 items-center";

const buttonSizes = {
    xs: "text-sm h-7 px-2.5",
    sm: "text-sm h-8 px-3.5",
    md: "text-base h-9 px-4",
    lg: "text-base h-10 px-5",
    xl: "text-base h-12 px-6",
};

const iconOnlyButtonSizes = {
    xs: "h-7 w-7",
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-10 w-10",
    xl: "h-12 w-12",
};

const iconSizes = {
    xs: "m-auto h-3.5 w-3.5",
    sm: "m-auto h-4 w-4",
    md: "m-auto h-[1.125rem] w-[1.125rem]",
    lg: "m-auto h-5 w-5",
    xl: "m-auto h-6 w-6",
};

const leadingIconSizes = {
    xs: "-ml-1 h-3.5 w-3.5",
    sm: "-ml-1 h-4 w-4",
    md: "-ml-1 h-[1.125rem] w-[1.125rem]",
    lg: "-ml-1 h-5 w-5",
    xl: "-ml-1 h-6 w-6",
};

const trailingIconSizes = {
    xs: "-mr-1 h-3.5 w-3.5",
    sm: "-mr-1 h-4 w-4",
    md: "-mr-1 h-[1.125rem] w-[1.125rem]",
    lg: "-mr-1 h-5 w-5",
    xl: "-mr-1 h-6 w-6",
};

/**
 * Gets the base Tailwind utilities for a button.

 * @param color The color utilities of the button.
 * @param colors The object containing the colors utilities.
 * @returns A string containing the Tailwind utilities, including color utilities for the button.
 */

const getBaseButton = (color, colors = solidColors) => {
    return `${base.layout} ${base.appearances[config.appearance]} ${colors[color]}`;
};

/**
 * Gets an object containing the Tailwind utilities for a button with all sizes.

 * @param color The color utilities of the button.
 * @param buttonSizes The object containing the button sizes.
 * @returns An object containing the Tailwind utilities for the button with all sizes. 
 * 
 * **Note:** This function should not be used for leading Icon buttons or trailing Icon buttons. For those types of buttons, use the `getIconButtonWithSizes()` function instead.
 */

const getButtonSizes = (color, sizes = buttonSizes) => {
    return {
        xs: `${getBaseButton(color)} ${sizes.xs}`,
        sm: `${getBaseButton(color)} ${sizes.sm}`,
        md: `${getBaseButton(color)} ${sizes.md}`,
        lg: `${getBaseButton(color)} ${sizes.lg}`,
        xl: `${getBaseButton(color)} ${sizes.xl}`,
    };
};

/**
 * Gets an object containing the base Tailwind utilities for a **leading Icon button** or **trailing Icon button** with all sizes.

 * @param color The color utilities of the button.
 * @param buttonSizes The object containing the button sizes.
 * @returns An object containing the base Tailwind utilities for the button with all sizes.

 * **Note:** This function should not be used for icon-only buttons. For icon-only buttons, use the `getButtonWithSizes()` function instead.
 */
const getIconButtonSizes = (color, sizes = buttonSizes) => {
    return {
        xs: `${getBaseButton(color)} ${iconButtonUtilities} ${sizes.xs}`,
        sm: `${getBaseButton(color)} ${iconButtonUtilities} ${sizes.sm}`,
        md: `${getBaseButton(color)} ${iconButtonUtilities} ${sizes.md}`,
        lg: `${getBaseButton(color)} ${iconButtonUtilities} ${sizes.lg}`,
        xl: `${getBaseButton(color)} ${iconButtonUtilities} ${sizes.xl}`,
    };
};

export {
    base,
    buttonSizes,
    iconOnlyButtonSizes,
    iconSizes,
    leadingIconSizes,
    trailingIconSizes,
    iconButtonUtilities,
    getBaseButton,
    getButtonSizes,
    getIconButtonSizes,
};
