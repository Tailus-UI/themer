import type { Shade, Sizes } from "./../types";

export type FieldConfig = {
    /**
     * The border radius of the TextField and TextArea components.
     */
    rounded?: Sizes;
    /**
     * The border color of the TextField and TextArea components.
     */
    borderColor?: Shade;
    /**
     * The background color of soft variant of the TextField and TextArea components.
     */
    softBg?: Shade;
    /**
     * The background color of soft variant of the TextField and TextArea components on focus.
     */
    softBgFocus?: Shade;
    dark?: {
        /**
         * The border color of the TextField and TextArea components on dark mode.
         */
        borderColor?: Shade;
        /**
         * The background color of soft variant of the TextField and TextArea components on dark mode.
         */
        softBg?: Shade;
        /**
         * The background color of soft variant of the TextField and TextArea components on focus on dark mode.
         */
        softBgFocus?: Shade;
    };
};

export const setFieldConfig = (config?: FieldConfig): FieldConfig => {
    return {
        rounded: config.rounded,
        borderColor: config.borderColor,
        softBg: config.softBg,
        softBgFocus: config.softBgFocus,
        dark: {
            borderColor: config.dark?.borderColor,
            softBg: config.dark?.softBg,
            softBgFocus: config.dark?.softBgFocus,
        },
    };
};

export default setFieldConfig;
