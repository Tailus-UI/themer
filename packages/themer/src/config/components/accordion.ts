export type AccordionConfig = {
    /**
     * The border radius of the accordion, applied to outlined, elevated, soft, outlined-elevated and ghost variants.
     */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    /**
     * The background of the soft variant.
     */
    softBg?: string;
    /**
     * The background of the ghost variant.
     */
    ghostBg?: string;
    /**
     * The shadow of the elevated and outlined-elevated variants.
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
        opacity?: number;
    };
    /**
     * The dark mode of the background of the soft, ghost and elevated variants.
     * **Note:** The `elevatedBg` value is also applied to the outlined-elevated variant !.
     */
    dark?: {
        /**
         * The background of the soft variant on dark mode.
         */
        softBg?: string;
        /**
         * The background of the ghost variant on dark mode.
         */
        ghostBg?: string;
        /**
         * The background of the elevated and outlined-elevated variants on dark mode.
         */
        elevatedBg?: string;
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
