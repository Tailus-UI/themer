export type CardConfig = {
    /**
     * The border radius of the Card component.
     */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    /**
     * The padding of the Card component.
     * Accepts all the `spacing` values.
     */
    padding?: string | number;
    /**
     * The background of the soft and soft-gradient variants.
     */
    bg?: string | number;
    /**
     * The shadow of the elevated, mixed, and elevated-gradient variants.
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
        opacity?: number | string;
    };
    /**
     * The background of all the variants on dark mode.
     * **Note:** The `elevatedBg` value is also applied to the outlined-elevated variant !.
     */
    dark?: {
        /**
         * The background of all the variants on dark mode including : outlined(default), elevated, mixed, and elevated-gradient variants.
         */
        bg?: string | number;
    };
};

export const setCardConfig = (config?: CardConfig): CardConfig => {
    return {
        rounded: config.rounded,
        bg: config.bg,
        shadow: {
            size: config.shadow.size,
            opacity: config.shadow.opacity,
        },
        dark: {
            bg: config.dark.bg,
        },
    };
};

export default setCardConfig;
