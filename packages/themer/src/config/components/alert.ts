export type AlertConfig = {
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    shadow?: {
        size?: "none" | "default" | "sm" | "md" | "lg" | "xl" | "xxl";
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
