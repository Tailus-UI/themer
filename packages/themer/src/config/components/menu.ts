import { BlurSizes, Opacity, Shade, ShadowSizes, SizesWithoutFull } from "../types";

export type MenuConfig = {
    /**
     * The border radius of the Menu components, applied to : dropdown-menu and context-menu.
     */
    rounded?: SizesWithoutFull;
    /**
     * The border width of the Menu components, applied to : dropdown-menu, context-menu, select and popover.
     */
    borderColor?: Shade;
    /**
     * The opacity of the background of the dropdown-menu and context-menu components.
     * **Note:** Use values between `1` and `100` !.
     * @default 80
     */
    bgOpacity?: Opacity;
    /**
     * The blur of the backdrop of the dropdown-menu and context-menu components.
     * **Note:** We use `rem` unit for the backdrop blur, don't add any unit to the value that you provide !.
     * @default 2
     */
    backdropBlur?: BlurSizes;
    /**
     * The shadow of the menu components and popover.
     */
    shadow?: {
        /**
         * The size of the shadow.
         * **Note:** The `2xl` value is not supported, use `xxl` instead !.
         */
        size?: ShadowSizes;
        /**
         * The opacity of the shadow.
         * **Note:** Use values between `1` and `100` !.
         */
        opacity?: Opacity;
    };
    /**
     * The dark mode of the background, borders, backdrop-blur and bg-opacity.
     */
    dark?: {
        /**
         * The gray border color shade of the dropdown-menu and context-menu components.
         */
        borderColor?: Shade;
        /**
         * The gray background shade of the dropdown-menu, context-menu and popover components.
         */
        bg?: Shade;
        /**
         * The opacity of the background of the dropdown-menu and context-menu components.
         * **Note:** Use values between `1` and `100` !.
         * @default 50
         */
        bgOpacity?: Opacity;
        /**
         * The blur of the backdrop of the dropdown-menu and context-menu components on dark mode.
         * **Note:** We use `rem` unit for the backdrop blur, don't add any unit to the value that you provide !.
         * @default 2
         */
        backdropBlur?: BlurSizes;
    };
};

export default MenuConfig;
