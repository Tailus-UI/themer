export type BadgeConfig = {
    /**
     * The border radius of the Badge component.
     */
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
};

export const setBadgeConfig = (config?: BadgeConfig): BadgeConfig => {
    return {
        rounded: config.rounded,
    };
};

export default setBadgeConfig;
