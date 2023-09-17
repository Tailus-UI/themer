import config from "../../../badge.config";

const colors = {
    primary: {
        light: "bg-primary-100 text-primary-800",
        dark: "bg-primary-500/10 text-primary-300",
        both: "bg-primary-100 text-primary-800 dark:bg-primary-500/10 dark:text-primary-300",
    },
    secondary: {
        light: "bg-secondary-100 text-secondary-800",
        dark: "bg-secondary-500/10 text-secondary-300",
        both: "bg-secondary-100 text-secondary-800 dark:bg-secondary-500/10 dark:text-secondary-300",
    },
    accent: {
        light: "bg-accent-100 text-accent-800",
        dark: "bg-accent-500/10 text-accent-300",
        both: "bg-accent-100 text-accent-800 dark:bg-accent-500/10 dark:text-accent-300",
    },
    danger: {
        light: "bg-danger-100 text-danger-800",
        dark: "bg-danger-500/10 text-danger-300",
        both: "bg-danger-100 text-danger-800 dark:bg-danger-500/10 dark:text-danger-300",
    },
    success: {
        light: "bg-success-100 text-success-800",
        dark: "bg-success-500/10 text-success-300",
        both: "bg-success-100 text-success-800 dark:bg-success-500/10 dark:text-success-300",
    },
    warning: {
        light: "bg-warning-100 text-warning-800",
        dark: "bg-warning-400/10 text-warning-300",
        both: "bg-warning-100 text-warning-800 dark:bg-warning-500/10 dark:text-warning-300",
    },
    info: {
        light: "bg-info-100 text-info-800",
        dark: "bg-info-500/10 text-info-300",
        both: "bg-info-100 text-info-800 dark:bg-info-500/10 dark:text-info-300",
    },
    gray: {
        light: "bg-gray-100 text-gray-800",
        dark: "bg-gray-500/10 text-gray-300",
        both: "bg-gray-100 text-gray-800 dark:bg-gray-500/10 dark:text-gray-300",
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
