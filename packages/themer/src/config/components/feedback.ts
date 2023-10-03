import { Opacity, Shade, ShadowSizes } from "../types";

export type FeedbackConfig = {
    /**
     * The border width of the Feedback components, applied to : `AlertDialog`, `Dialog`, `Flag`, `Toast`, select and popover.
     */
    borderColor?: Shade;
    /**
     * The shadow of the Feedback components : `Flag` and `Toast` components.
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
         * The gray border color shade of the `AlertDialog`, `Dialog` and `Flag` components.
         */
        borderColor?: Shade;
        /**
         * The gray background shade of the `AlertDialog`, `Dialog` and `Flag` components on dark mode.
         */
        bg?: Shade;
    };
};

export const setFeedbackConfig = (config?: FeedbackConfig): FeedbackConfig => {
    return {
        borderColor: config.borderColor,
        shadow: {
            size: config.shadow.size,
            opacity: config.shadow.opacity,
        },
        dark: {
            borderColor: config.dark.borderColor,
            bg: config.dark.bg,
        },
    };
};

export default setFeedbackConfig;
