import { Opacity, PaddingSizes, Shade, ShadowSizes, SizesWithoutFull } from "../types";

export type CardConfig = {
    /**
     * The border radius of the Card component.
     */
    rounded?: SizesWithoutFull;
    /**
     * The padding of the Card component.
     * Accepts all the `spacing` values.
     */
    padding?: PaddingSizes;
    /**
     * The background of the soft and soft-gradient variants.
     */
    bg?: Shade;
    /**
     * The shadow of the elevated, mixed, and elevated-gradient variants.
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
     * The background of all the variants on dark mode.
     * **Note:** The `elevatedBg` value is also applied to the outlined-elevated variant !.
     */
    dark?: {
        /**
         * The background of all the variants on dark mode including : outlined(default), elevated, mixed, and elevated-gradient variants.
         */
        bg?: Shade;
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
