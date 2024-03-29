import solidColors from "./solidColors";
import config from "./../../button.config";
import { Colors, Sizes, ButtonBase } from "../button.types";

const base = {
    layout: "group font-medium [--radial-opacity:0.4] dark:[--radial-opacity:0] rounded-[--btn-border-radius] [background-image:radial-gradient(76%_151%_at_52%_-52%,rgba(255,255,255,var(--radial-opacity))_0%,transparent_100%)] flex items-center justify-center transition-[filter] duration-150 ease-in-out active:brightness-95 dark:shadow-inner dark:border-t dark:border-t-white/35 outline-2 outline-offset-2 focus-visible:outline outline-primary-600 dark:shadow-white/20 disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none disabled:hover:brightness-100 dark:disabled:bg-gray-500/10 dark:disabled:[background-image:none] dark:disabled:text-gray-700 dark:disabled:shadow-none dark:disabled:border-none",
    appearances: {
        light: "",
        dark: "",
        both: "",
    },
};

const iconButtonUtilities: string = "flex items-center gap-1.5 items-center";

const buttonSizes: Sizes = {
    xs: "text-sm h-7 px-2.5",
    sm: "text-sm h-8 px-3.5",
    md: "text-base h-9 px-4",
    lg: "text-base h-10 px-5",
    xl: "text-base h-12 px-6",
};

const iconOnlyButtonSizes: Sizes = {
    xs: "size-7",
    sm: "size-8",
    md: "size-9",
    lg: "size-10",
    xl: "size-12",
};

const iconSizes: Sizes = {
    xs: "m-auto size-3.5",
    sm: "m-auto size-4",
    md: "m-auto size-[1.125rem]",
    lg: "m-auto size-5",
    xl: "m-auto size-6",
};

const leadingIconSizes: Sizes = {
    xs: "-ml-1 size-3.5",
    sm: "-ml-1 size-4",
    md: "-ml-1 size-[1.125rem]",
    lg: "-ml-1 size-5",
    xl: "-ml-1 size-6",
};

const trailingIconSizes: Sizes = {
    xs: "-mr-1 size-3.5",
    sm: "-mr-1 size-4",
    md: "-mr-1 size-[1.125rem]",
    lg: "-mr-1 size-5",
    xl: "-mr-1 size-6",
};

/**
 * Gets the base Tailwind utilities for a button.

 * @param color The color utilities of the button.
 * @param colors The object containing the colors utilities.
 * @returns A string containing the Tailwind utilities, including color utilities for the button.
 */

const getBaseButton = (color: string, buttonBase = base, colors: Colors = solidColors): string => {
    return `${buttonBase.layout} ${buttonBase.appearances[config.appearance]} ${colors[color]}`;
};

/**
 * Gets an object containing the Tailwind utilities for a button with all sizes.

 * @param color The color utilities of the button.
 * @param buttonSizes The object containing the button sizes.
 * @returns An object containing the Tailwind utilities for the button with all sizes. 
 * 
 * **Note:** This function should not be used for leading Icon buttons or trailing Icon buttons. For those types of buttons, use the `getIconButtonWithSizes()` function instead.
 */

const getButtonSizes = (color: string, sizes: Sizes = buttonSizes) => {
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
const getIconButtonSizes = (color: string, sizes: Sizes = buttonSizes) => {
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
