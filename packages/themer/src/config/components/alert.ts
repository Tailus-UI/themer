export type AlertConfig = {
    /**
     * The border radius of the dialog and alert-dialog components.
     */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    /**
     * The shadow of the dialog and alert-dialog components.
     */
    shadow?: {
        /**
         * The size of the shadow.
         * **Note:** The `2xl` value is not supported, use `xxl` instead !.
         */
        size?: "none" | "default" | "sm" | "md" | "lg" | "xl" | "xxl";
        /**
         * The opacity of the shadow accepts value between `1` and `100`.
         */
        opacity?: number;
    };
};

export const setAlertConfig = (config?: AlertConfig): AlertConfig => {
    return {
        rounded: config.rounded,
        shadow: {
            size: config.shadow.size,
            opacity: config.shadow.opacity,
        },
    };
};

export default setAlertConfig;
