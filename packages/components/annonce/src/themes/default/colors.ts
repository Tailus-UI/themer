import type { Colors } from "./../annonce.types";
import config from "./../../annonce.config";

const colors = {
    primary: {
        light: "text-white bg-primary-600",
        dark: "text-white bg-primary-600",
        both: "text-white bg-primary-600",
    },
    secondary: {
        light: "text-white bg-secondary-600",
        dark: "text-white bg-secondary-600",
        both: "text-white bg-secondary-600",
    },
    accent: {
        light: "text-white bg-accent-600",
        dark: "text-white bg-accent-600",
        both: "text-white bg-accent-600",
    },
    danger: {
        light: "text-white bg-danger-600",
        dark: "text-white bg-danger-600",
        both: "text-white bg-danger-600",
    },
    success: {
        light: "text-white bg-success-600",
        dark: "text-white bg-success-600",
        both: "text-white bg-success-600",
    },
    warning: {
        light: "text-white bg-warning-600",
        dark: "text-white bg-warning-600",
        both: "text-white bg-warning-600",
    },
    info: {
        light: "text-white bg-info-600",
        dark: "text-white bg-info-600",
        both: "text-white bg-info-600",
    },
    gray: {
        light: "text-white bg-gray-600",
        dark: "text-white bg-gray-600",
        both: "text-white bg-gray-600",
    },
    neutral: {
        light: "bg-gray-900 text-white",
        dark: "bg-white text-gray-900",
        both: "bg-gray-900 text-white dark:bg-white dark:text-gray-900",
    },
};

const concernColors: Colors = {
    primary: colors.primary[config.appearance],
    secondary: colors.secondary[config.appearance],
    accent: colors.accent[config.appearance],
    danger: colors.danger[config.appearance],
    success: colors.success[config.appearance],
    warning: colors.warning[config.appearance],
    info: colors.info[config.appearance],
    gray: colors.gray[config.appearance],
    neutral: colors.neutral[config.appearance],
};

export default concernColors;
