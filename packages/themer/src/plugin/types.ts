import { AccordionConfig, AlertConfig, AnnonceConfig } from "./../config/components";

export type Config = {
    appearance?: "light" | "dark" | "both";
    radius?: "boxy" | "sharp" | "smooth" | "smoothest";
    shadow?: {
        size: "none" | "default" | "sm" | "md" | "lg" | "xl" | "xxl";
        opacity: number;
    };
    border?: "lighter" | "light" | "dark" | "darker" | "darkest";
    background?: "light" | "lighter" | "high" | "higher";
    padding?: "small" | "medium" | "large" | "larger" | "largest";
    components?: {
        /**
         * The config of the accordion component.
         * Customizable props:
         * - rounded
         * - softBg
         * - ghostBg
         * - shadow : size, opacity
         * - dark : softBg, ghostBg, elevatedBg
         */
        accordion?: AccordionConfig;
        /**
         * The config of the alert component.
         * Customizable props:
         * - rounded
         * - shadow : size, opacity
         */
        alert?: AlertConfig;
        /**
         * The config of the annonce component.
         * Customizable props:
         * - rounded
         */
        annonce?: AnnonceConfig;
    };
};

export type Shadows = {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    none: string;
};
