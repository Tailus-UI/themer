import type { Shade, Opacity, ShadowSizes, SizesWithoutFull } from "../types";

export type AccordionConfig = {
    /**
     * The border radius of the accordion, applied to outlined, elevated, soft, outlined-elevated and ghost variants.
     */
    rounded?: SizesWithoutFull;
    /**
     * The background of the soft variant.
     */
    softBg?: Shade;
    /**
     * The background of the ghost variant.
     */
    ghostBg?: Shade;
    /**
     * The shadow of the elevated and outlined-elevated variants.
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
     * The dark mode of the background of the soft, ghost and elevated variants.
     * **Note:** The `elevatedBg` value is also applied to the outlined-elevated variant !.
     */
    dark?: {
        /**
         * The background of the soft variant on dark mode.
         */
        softBg?: Shade;
        /**
         * The background of the ghost variant on dark mode.
         */
        ghostBg?: Shade;
        /**
         * The background of the elevated and outlined-elevated variants on dark mode.
         */
        elevatedBg?: Shade;
    };
};

export const setAccordionConfig = (config?: AccordionConfig): AccordionConfig => {
    return {
        rounded: config.rounded,
        softBg: config.softBg,
        ghostBg: config.ghostBg,
        shadow: {
            size: config.shadow.size,
            opacity: config.shadow.opacity,
        },
        dark: {
            softBg: config.dark.softBg,
            ghostBg: config.dark.ghostBg,
            elevatedBg: config.dark.elevatedBg,
        },
    };
};

export default setAccordionConfig;
