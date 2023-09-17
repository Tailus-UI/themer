import config from "../../../badge.config";

const colors = {
    primary: {
        light: "border-primary-300 text-primary-800",
        dark: "border-primary-400/40 text-primary-300",
        both: "border-primary-300 dark:border-primary-400/40 text-primary-800 dark:text-primary-300",
    },
    secondary: {
        light: "border-secondary-300 text-secondary-800",
        dark: "border-secondary-400/40 text-secondary-300",
        both: "border-secondary-300 dark:border-secondary-400/40 text-secondary-800 dark:text-secondary-300",
    },
    accent: {
        light: "border-accent-300 text-accent-800",
        dark: "border-accent-400/40 text-accent-300",
        both: "border-accent-300 dark:border-accent-400/40 text-accent-800 dark:text-accent-300",
    },
    danger: {
        light: "border-danger-300 text-danger-800",
        dark: "border-danger-400/40 text-danger-300",
        both: "border-danger-300 dark:border-danger-400/40 text-danger-800 dark:text-danger-300",
    },
    success: {
        light: "border-success-300 text-success-800",
        dark: "border-success-400/40 text-success-300",
        both: "border-success-300 dark:border-success-400/40 text-success-800 dark:text-success-300",
    },
    warning: {
        light: "border-warning-400 text-warning-900",
        dark: "border-warning-400/40 text-warning-300",
        both: "border-warning-400 dark:border-warning-400/40 text-warning-900 dark:text-warning-300",
    },
    info: {
        light: "border-info-300 text-info-800",
        dark: "border-info-400/40 text-info-300",
        both: "border-info-300 dark:border-info-400/40 text-info-800 dark:text-info-300",
    },
    gray: {
        light: "border-gray-300 text-gray-800",
        dark: "border-gray-400/40 text-gray-300",
        both: "border-gray-300 dark:border-gray-400/40 text-gray-800 dark:text-gray-300",
    },
};

const outlinedColors = {
    primary: colors.primary[config.appearance],
    secondary: colors.secondary[config.appearance],
    accent: colors.accent[config.appearance],
    danger: colors.danger[config.appearance],
    success: colors.success[config.appearance],
    warning: colors.warning[config.appearance],
    info: colors.info[config.appearance],
    gray: colors.gray[config.appearance],
};

export default outlinedColors;
export { outlinedColors };
