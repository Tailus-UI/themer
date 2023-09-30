import { fallback as baseFallback } from ".";
import config from "../../../avatar.config";
import { Fallback } from "../../avatar.types";

const solidColors = {
    primary: "text-white bg-primary-600",
    secondary: "text-white bg-secondary-600",
    accent: "text-white bg-accent-600",
    danger: "text-white bg-danger-600",
    success: "text-white bg-success-600",
    warning: "text-white bg-warning-700",
    info: "text-white bg-info-600",
    gray: "text-white bg-gray-600",
};

const softColors = {
    primary: {
        light: "text-primary-900 bg-primary-200",
        dark: "text-primary-200 bg-primary-900",
        both: "text-primary-900 dark:text-primary-200 bg-primary-200 dark:bg-primary-900",
    },
    secondary: {
        light: "text-secondary-900 bg-secondary-200",
        dark: "text-secondary-200 bg-secondary-900",
        both: "text-secondary-900 dark:text-secondary-200 bg-secondary-200 dark:bg-secondary-900",
    },
    accent: {
        light: "text-accent-900 bg-accent-200",
        dark: "text-accent-200 bg-accent-900",
        both: "text-accent-900 dark:text-accent-200 bg-accent-200 dark:bg-accent-900",
    },
    danger: {
        light: "text-danger-900 bg-danger-200",
        dark: "text-danger-200 bg-danger-900",
        both: "text-danger-900 dark:text-danger-200 bg-danger-200 dark:bg-danger-900",
    },
    success: {
        light: "text-success-900 bg-success-200",
        dark: "text-success-200 bg-success-900",
        both: "text-success-900 dark:text-success-200 bg-success-200 dark:bg-success-900",
    },
    warning: {
        light: "text-warning-900 bg-warning-200",
        dark: "text-warning-200 bg-warning-900",
        both: "text-warning-900 dark:text-warning-200 bg-warning-200 dark:bg-warning-900",
    },
    info: {
        light: "text-info-900 bg-info-200",
        dark: "text-info-200 bg-info-900",
        both: "text-info-900 dark:text-info-200 bg-info-200 dark:bg-info-900",
    },
    gray: {
        light: "text-gray-900 bg-gray-200",
        dark: "text-gray-200 bg-gray-900",
        both: "text-gray-900 dark:text-gray-200 bg-gray-200 dark:bg-gray-900",
    },
    neutral: {
        light: "bg-gray-900 text-white",
        dark: "bg-white text-gray-900",
        both: "bg-gray-900 text-white dark:bg-white dark:text-gray-900",
    },
};

const solidFallback: Fallback = {
    primary: baseFallback + " " + solidColors.primary,
    secondary: baseFallback + " " + solidColors.secondary,
    accent: baseFallback + " " + solidColors.accent,
    danger: baseFallback + " " + solidColors.danger,
    success: baseFallback + " " + solidColors.success,
    warning: baseFallback + " " + solidColors.warning,
    info: baseFallback + " " + solidColors.info,
    gray: baseFallback + " " + solidColors.gray,
};

const softFallback: Fallback = {
    primary: baseFallback + " " + softColors.primary[config.appearance],
    secondary: baseFallback + " " + softColors.secondary[config.appearance],
    accent: baseFallback + " " + softColors.accent[config.appearance],
    danger: baseFallback + " " + softColors.danger[config.appearance],
    success: baseFallback + " " + softColors.success[config.appearance],
    warning: baseFallback + " " + softColors.warning[config.appearance],
    info: baseFallback + " " + softColors.info[config.appearance],
    gray: baseFallback + " " + softColors.gray[config.appearance],
};

export { solidFallback, softFallback };
