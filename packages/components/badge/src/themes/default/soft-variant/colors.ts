import config from "../../../badge.config";

const colors = {
    primary: {
        light: "bg-primary-200 text-primary-800",
        dark: "bg-primary-500/30 text-primary-300",
        both: "bg-primary-200 text-primary-800 dark:bg-primary-500/30 dark:text-primary-300",
    },
    secondary: {
        light: "bg-secondary-200 text-secondary-800",
        dark: "bg-secondary-500/30 text-secondary-300",
        both: "bg-secondary-200 text-secondary-800 dark:bg-secondary-500/30 dark:text-secondary-300",
    },
    accent: {
        light: "bg-accent-200 text-accent-800",
        dark: "bg-accent-500/30 text-accent-300",
        both: "bg-accent-200 text-accent-800 dark:bg-accent-500/30 dark:text-accent-300",
    },
    danger: {
        light: "bg-danger-200 text-danger-800",
        dark: "bg-danger-500/30 text-danger-300",
        both: "bg-danger-200 text-danger-800 dark:bg-danger-500/30 dark:text-danger-300",
    },
    success: {
        light: "bg-success-200 text-success-800",
        dark: "bg-success-500/30 text-success-300",
        both: "bg-success-200 text-success-800 dark:bg-success-500/30 dark:text-success-300",
    },
    warning: {
        light: "bg-warning-200 text-warning-800",
        dark: "bg-warning-400/30 text-warning-300",
        both: "bg-warning-200 text-warning-800 dark:bg-warning-500/30 dark:text-warning-300",
    },
    info: {
        light: "bg-info-200 text-info-800",
        dark: "bg-info-500/30 text-info-300",
        both: "bg-info-200 text-info-800 dark:bg-info-500/30 dark:text-info-300",
    },
    gray: {
        light: "bg-gray-200 text-gray-800",
        dark: "bg-gray-500/30 text-gray-300",
        both: "bg-gray-200 text-gray-800 dark:bg-gray-500/30 dark:text-gray-300",
    },
};

const softColors = {
    primary: colors.primary[config.appearance],
    secondary: colors.secondary[config.appearance],
    accent: colors.accent[config.appearance],
    danger: colors.danger[config.appearance],
    success: colors.success[config.appearance],
    warning: colors.warning[config.appearance],
    info: colors.info[config.appearance],
    gray: colors.gray[config.appearance],
};

export default softColors;
export { softColors };
