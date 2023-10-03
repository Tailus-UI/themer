export type MenuConfig = {
    /**
     * The border radius of the Menu components, applied to : dropdown-menu and context-menu.
     */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    /**
     * The border width of the Menu components, applied to : dropdown-menu, context-menu, select and popover.
     */
    borderColor?: string | number;
    /**
     * The opacity of the background of the dropdown-menu and context-menu components.
     * **Note:** Use values between `1` and `100` !.
     * @default 80
     */
    bgOpacity?: string | number;
    /**
     * The blur of the backdrop of the dropdown-menu and context-menu components.
     * **Note:** We use `rem` unit for the backdrop blur, don't add any unit to the value that you provide !.
     * @default 2
     */
    backdropBlur?: string | number;
    /**
     * The shadow of the menu components and popover.
     */
    shadow?: {
        /**
         * The size of the shadow.
         * **Note:** The `2xl` value is not supported, use `xxl` instead !.
         */
        size?: "none" | "default" | "sm" | "md" | "lg" | "xl" | "xxl";
        /**
         * The opacity of the shadow.
         * **Note:** Use values between `1` and `100` !.
         */
        opacity?: string | number;
    };
    /**
     * The dark mode of the background, borders, backdrop-blur and bg-opacity.
     */
    dark?: {
        /**
         * The gray border color shade of the dropdown-menu and context-menu components.
         */
        borderColor?: string | number;
        /**
         * The gray background shade of the dropdown-menu, context-menu and popover components.
         */
        bg?: string | number;
        /**
         * The opacity of the background of the dropdown-menu and context-menu components.
         * **Note:** Use values between `1` and `100` !.
         * @default 50
         */
        bgOpacity?: string | number;
        /**
         * The blur of the backdrop of the dropdown-menu and context-menu components on dark mode.
         * **Note:** We use `rem` unit for the backdrop blur, don't add any unit to the value that you provide !.
         * @default 2
         */
        backdropBlur?: string | number;
    };
};

export const setMenuConfig = (config?: MenuConfig): MenuConfig => {
    return {
        rounded: config.rounded,
        borderColor: config.borderColor,
        bgOpacity: config.bgOpacity,
        backdropBlur: config.backdropBlur,
        shadow: {
            size: config.shadow.size,
            opacity: config.shadow.opacity,
        },
        dark: {
            borderColor: config.dark.borderColor,
            bg: config.dark.bg,
            bgOpacity: config.dark.bgOpacity,
            backdropBlur: config.dark.backdropBlur,
        },
    };
};

export default setMenuConfig;
