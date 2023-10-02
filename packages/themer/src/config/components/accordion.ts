export type AccordionConfig = {
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    softBg?: string;
    ghostBg?: string;
    shadow?: {
        size?: "none" | "default" | "sm" | "md" | "lg" | "xl" | "2xl";
        opacity?: number;
    };
    dark?: {
        softBg?: string;
        ghostBg?: string;
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
