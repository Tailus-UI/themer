import { buttonSizes, iconButtonUtilities, getBaseButton } from "./../base";

/**
 * Gets an object containing the Tailwind utilities for a button with all sizes.

 * @param color The color utilities of the button.
 * @param buttonSizes The object containing the button sizes.
 * @returns An object containing the Tailwind utilities for the button with all sizes. 
 * 
 * **Note:** This function should not be used for leading Icon buttons or trailing Icon buttons. For those types of buttons, use the `getIconButtonWithSizes()` function instead.
 */

const getButtonSizes = (color, colors, sizes = buttonSizes) => {
    return {
        xs: `${getBaseButton(color, colors)} ${sizes.xs}`,
        sm: `${getBaseButton(color, colors)} ${sizes.sm}`,
        md: `${getBaseButton(color, colors)} ${sizes.md}`,
        lg: `${getBaseButton(color, colors)} ${sizes.lg}`,
        xl: `${getBaseButton(color, colors)} ${sizes.xl}`,
    };
};

/**
 * Gets an object containing the base Tailwind utilities for a **leading Icon button** or **trailing Icon button** with all sizes.

 * @param color The color utilities of the button.
 * @param buttonSizes The object containing the button sizes.
 * @returns An object containing the base Tailwind utilities for the button with all sizes.

 * **Note:** This function should not be used for icon-only buttons. For icon-only buttons, use the `getButtonWithSizes()` function instead.
 */
const getIconButtonSizes = (color, colors, sizes = buttonSizes) => {
    return {
        xs: `${getBaseButton(color, colors)} ${iconButtonUtilities} ${sizes.xs}`,
        sm: `${getBaseButton(color, colors)} ${iconButtonUtilities} ${sizes.sm}`,
        md: `${getBaseButton(color, colors)} ${iconButtonUtilities} ${sizes.md}`,
        lg: `${getBaseButton(color, colors)} ${iconButtonUtilities} ${sizes.lg}`,
        xl: `${getBaseButton(color, colors)} ${iconButtonUtilities} ${sizes.xl}`,
    };
};

export { getButtonSizes, getIconButtonSizes };
export {
    buttonSizes,
    iconButtonUtilities,
    getBaseButton,
    iconSizes,
    leadingIconSizes,
    trailingIconSizes,
    iconOnlyButtonSizes,
} from "./../base";
