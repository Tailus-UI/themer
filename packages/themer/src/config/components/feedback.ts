export type FeedbackConfig = {
    /**
     * The border width of the Feedback components, applied to : `AlertDialog`, `Dialog`, `Flag`, `Toast`, select and popover.
     */
    borderColor?: string | number;
    /**
     * The shadow of the Feedback components : `Flag` and `Toast` components.
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
         * The gray border color shade of the `AlertDialog`, `Dialog` and `Flag` components.
         */
        borderColor?: string | number;
        /**
         * The gray background shade of the `AlertDialog`, `Dialog` and `Flag` components on dark mode.
         */
        bg?: string | number;
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
