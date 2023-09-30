import { Colors } from "../types";
import config from "./../../progress.config";
import { baseIndicator } from "./base";

type IndicatorColor =
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "accent"
    | "gray"
    | "neutral"
    | "gradient";

const colors = {
    primary: {
        light: "bg-primary-600",
        dark: "bg-primary-500",
        both: "bg-primary-600 dark:bg-primary-500",
    },
    secondary: {
        light: "bg-secondary-600",
        dark: "bg-secondary-500",
        both: "bg-secondary-600 dark:bg-secondary-500",
    },
    accent: {
        light: "bg-accent-600",
        dark: "bg-accent-500",
        both: "bg-accent-600 dark:bg-accent-500",
    },
    success: {
        light: "bg-success-600",
        dark: "bg-success-500",
        both: "bg-success-600 dark:bg-success-500",
    },
    info: {
        light: "bg-info-600",
        dark: "bg-info-500",
        both: "bg-info-600 dark:bg-info-500",
    },
    warning: {
        light: "bg-warning-600",
        dark: "bg-warning-500",
        both: "bg-warning-600 dark:bg-warning-500",
    },
    danger: {
        light: "bg-danger-600",
        dark: "bg-danger-500",
        both: "bg-danger-600 dark:bg-danger-500",
    },
    gray: {
        light: "bg-gray-600",
        dark: "bg-gray-500",
        both: "bg-gray-600 dark:bg-gray-500",
    },
    neutral: {
        light: "bg-gray-900",
        dark: "bg-white",
        both: "bg-gray-900 dark:bg-white",
    },
    gradient: "bg-gradient-to-r",
};

const indicatorColors: Colors = {
    primary: colors.primary[config.appearance],
    secondary: colors.secondary[config.appearance],
    accent: colors.accent[config.appearance],
    success: colors.success[config.appearance],
    info: colors.info[config.appearance],
    warning: colors.warning[config.appearance],
    danger: colors.danger[config.appearance],
    gray: colors.gray[config.appearance],
    neutral: colors.neutral[config.appearance],
    gradient: colors.gradient,
};

/**
 * Gets the Tailwindcss utilities for the specified indicator color.
 *
 * @param color The indicator color. Can be one of the following values:
 *     * `primary`
 *     * `secondary`
 *     * `success`
 *     * `warning`
 *     * `danger`
 *     * `info`
 *     * `accent`
 *     * `gray`
 *     * `neutral`
 *
 * @param colors An optional object containing custom indicator colors.
 *
 * @returns The Tailwindcss utilities for the specified indicator color.
 */
function getIndicatorColor(color: IndicatorColor, colors: Colors = indicatorColors): string {
    return baseIndicator + " " + colors[color];
}

export { indicatorColors, getIndicatorColor };
