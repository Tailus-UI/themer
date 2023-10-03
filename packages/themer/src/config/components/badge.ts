import { Sizes } from "../types";

export type BadgeConfig = {
    /**
     * The border radius of the Badge component.
     */
    rounded?: Sizes;
};

export const setBadgeConfig = (config?: BadgeConfig): BadgeConfig => {
    return {
        rounded: config.rounded,
    };
};

export default setBadgeConfig;
