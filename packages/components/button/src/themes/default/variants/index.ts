import { Colors, Sizes, ButtonBase } from "../../button.types";
import { buttonSizes, iconButtonUtilities, getBaseButton } from "./../base";

/**
 * Gets an object containing the Tailwind utilities for a button with all sizes.

 * @param color The color utilities of the button.
 * @param buttonSizes The object containing the button sizes.
 * @returns An object containing the Tailwind utilities for the button with all sizes. 
 * 
 * **Note:** This function should not be used for leading Icon buttons or trailing Icon buttons. For those types of buttons, use the `getIconButtonWithSizes()` function instead.
 */

const getButtonSizes = (
    color: string,
    base: ButtonBase,
    colors: Colors,
    sizes = buttonSizes
): Sizes => {
    return {
        xs: `${getBaseButton(color, base, colors)} ${sizes.xs}`,
        sm: `${getBaseButton(color, base, colors)} ${sizes.sm}`,
        md: `${getBaseButton(color, base, colors)} ${sizes.md}`,
        lg: `${getBaseButton(color, base, colors)} ${sizes.lg}`,
        xl: `${getBaseButton(color, base, colors)} ${sizes.xl}`,
    };
};

/**
 * Gets an object containing the base Tailwind utilities for a **leading Icon button** or **trailing Icon button** with all sizes.

 * @param color The color utilities of the button.
 * @param buttonSizes The object containing the button sizes.
 * @returns An object containing the base Tailwind utilities for the button with all sizes.

 * **Note:** This function should not be used for icon-only buttons. For icon-only buttons, use the `getButtonWithSizes()` function instead.
 */
const getIconButtonSizes = (
    color: string,
    base: ButtonBase,
    colors: Colors,
    sizes = buttonSizes
): Sizes => {
    return {
        xs: `${getBaseButton(color, base, colors)} ${iconButtonUtilities} ${sizes.xs}`,
        sm: `${getBaseButton(color, base, colors)} ${iconButtonUtilities} ${sizes.sm}`,
        md: `${getBaseButton(color, base, colors)} ${iconButtonUtilities} ${sizes.md}`,
        lg: `${getBaseButton(color, base, colors)} ${iconButtonUtilities} ${sizes.lg}`,
        xl: `${getBaseButton(color, base, colors)} ${iconButtonUtilities} ${sizes.xl}`,
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
