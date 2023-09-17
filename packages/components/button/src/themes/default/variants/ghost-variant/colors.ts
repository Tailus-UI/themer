import config from "../../../../button.config";

const colors = {
    primary: {
        light: "text-primary-900 hover:before:bg-primary-200 focus:before:bg-primary-300/75",
        dark: "text-primary-400 hover:before:bg-primary-500/20 focus:before:bg-primary-500/30",
        both: "text-primary-900 dark:text-primary-400 hover:before:bg-primary-200 focus:before:bg-primary-300/75 dark:hover:before:bg-primary-500/20 dark:focus:before:bg-primary-500/30",
    },
    secondary: {
        light: "text-secondary-900 hover:before:bg-secondary-200 focus:before:bg-secondary-300/75",
        dark: "text-secondary-400 hover:before:bg-secondary-500/20 focus:before:bg-secondary-500/30",
        both: "text-secondary-900 dark:text-secondary-400 hover:before:bg-secondary-200 focus:before:bg-secondary-300/75 dark:hover:before:bg-secondary-500/20 dark:focus:before:bg-secondary-500/30",
    },
    accent: {
        light: "text-accent-900 before:bg-accent-100 hover:before:bg-accent-200 focus:before:bg-accent-300/75",
        dark: "text-accent-400 hover:before:bg-accent-500/20 focus:before:bg-accent-500/30",
        both: "text-accent-900 dark:text-accent-400 hover:before:bg-accent-200 focus:before:bg-accent-300/75 dark:hover:before:bg-accent-500/20 dark:focus:before:bg-accent-500/30",
    },
    danger: {
        light: "text-danger-900 before:bg-danger-100 hover:before:bg-danger-200 focus:before:bg-danger-300/75",
        dark: "text-danger-400 hover:before:bg-danger-500/20 focus:before:bg-danger-500/30",
        both: "text-danger-900 dark:text-danger-400 hover:before:bg-danger-200 focus:before:bg-danger-300/75 dark:hover:before:bg-danger-500/20 dark:focus:before:bg-danger-500/30",
    },
    success: {
        light: "text-success-900 before:bg-success-100 hover:before:bg-success-200 focus:before:bg-success-300/75",
        dark: "text-success-400 hover:before:bg-success-500/20 focus:before:bg-success-500/30",
        both: "text-success-900 dark:text-success-400 hover:before:bg-success-200 focus:before:bg-success-300/75 dark:hover:before:bg-success-500/20 dark:focus:before:bg-success-500/30",
    },
    warning: {
        light: "text-warning-900 before:bg-warning-100 hover:before:bg-warning-200 focus:before:bg-warning-300/75",
        dark: "text-warning-400 hover:before:bg-warning-500/20 focus:before:bg-warning-500/30",
        both: "text-warning-900 dark:text-warning-400 hover:before:bg-warning-200 focus:before:bg-warning-300/75 dark:hover:before:bg-warning-500/20 dark:focus:before:bg-warning-500/30",
    },
    info: {
        light: "text-info-900 before:bg-info-100 hover:before:bg-info-200 focus:before:bg-info-300/75",
        dark: "text-info-400 hover:before:bg-info-500/20 focus:before:bg-info-500/30",
        both: "text-info-900 dark:text-info-400 before:bg-info-100 hover:before:bg-info-200 focus:before:bg-info-300/75 dark:hover:before:bg-info-500/20 dark:focus:before:bg-info-500/30",
    },
    gray: {
        light: "text-gray-900 hover:before:bg-gray-200 focus:before:bg-gray-300/75",
        dark: "text-gray-400 hover:before:bg-gray-500/20 focus:before:bg-gray-500/30",
        both: "text-gray-900 dark:text-gray-400 hover:before:bg-gray-200 focus:before:bg-gray-300/75 dark:hover:before:bg-gray-500/20 dark:focus:before:bg-gray-500/30",
    },
    neutral: {
        light: "text-gray-900 hover:before:bg-gray-900 focus:before:bg-gray-800 active:before:bg-gray-700",
        dark: "text-gray-400 hover:before:bg-white focus:before:bg-white/90 active:before:bg-white/70",
        both: "text-gray-900 dark:text-gray-400 hover:before:bg-gray-900 focus:before:bg-gray-800 active:before:bg-gray-700 dark:hover:before:bg-white dark:focus:before:bg-white/90 dark:active:before:bg-white/70",
    },
};

const ghostColors = {
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

export default ghostColors;
