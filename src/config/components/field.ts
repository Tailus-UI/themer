import type { Shade, Sizes } from "../types";

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

export default FieldConfig;
