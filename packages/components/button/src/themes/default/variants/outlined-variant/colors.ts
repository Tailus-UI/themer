import config from "./../../../../button.config";

const colors = {
    primary: {
        light: "text-primary-600 before:border-primary-800/40 hover:before:border-primary-500 active:before:bg-primary-50",
        dark: "text-primary-300 before:border-primary-300/40 focus:before:bg-primary-500/5",
        both: "text-primary-600 dark:text-primary-300 before:border-primary-800/40 active:before:bg-primary-50 hover:before:border-primary-500 dark:before:border-primary-300/40 dark:focus:before:bg-primary-500/5",
    },
    secondary: {
        light: "text-secondary-600 before:border-secondary-800/40 hover:before:border-secondary-500 active:before:bg-secondary-50",
        dark: "text-secondary-300 before:border-secondary-300/40 focus:before:bg-secondary-500/5",
        both: "text-secondary-600 dark:text-secondary-300 before:border-secondary-800/40 active:before:bg-secondary-50 hover:before:border-secondary-500 dark:before:border-secondary-300/40 dark:focus:before:bg-secondary-500/5",
    },
    accent: {
        light: "text-accent-600 before:border-accent-800/40 hover:before:border-accent-500 active:before:bg-accent-50",
        dark: "text-accent-300 before:border-accent-300/40 focus:before:bg-accent-500/5",
        both: "text-accent-600 dark:text-accent-300 before:border-accent-800/40 active:before:bg-accent-50 hover:before:border-accent-500 dark:before:border-accent-300/40 dark:focus:before:bg-accent-500/5",
    },
    danger: {
        light: "text-danger-600 before:border-danger-800/40 hover:before:border-danger-500 active:before:bg-danger-50",
        dark: "text-danger-300 before:border-danger-300/40 focus:before:bg-danger-500/5",
        both: "text-danger-600 dark:text-danger-300 before:border-danger-800/40 active:before:bg-danger-50 hover:before:border-danger-500 dark:before:border-danger-300/40 dark:focus:before:bg-danger-500/5",
    },
    success: {
        light: "text-success-600 before:border-success-800/40 hover:before:border-success-500 active:before:bg-success-50",
        dark: "text-success-300 before:border-success-300/40 focus:before:bg-success-500/5",
        both: "text-success-600 dark:text-success-300 before:border-success-800/40 active:before:bg-success-50 hover:before:border-success-500 dark:before:border-success-300/40 dark:focus:before:bg-success-500/5",
    },
    warning: {
        light: "text-warning-600 before:border-warning-800/40 hover:before:border-warning-500 active:before:bg-warning-50",
        dark: "text-warning-300 before:border-warning-300/40 focus:before:bg-warning-500/5",
        both: "text-warning-600 dark:text-warning-300 before:border-warning-800/40 active:before:bg-warning-50 hover:before:border-warning-500 dark:before:border-warning-300/40 dark:focus:before:bg-warning-500/5",
    },
    info: {
        light: "text-info-600 before:border-info-800/40 hover:before:border-info-500 active:before:bg-info-50",
        dark: "text-info-300 before:border-info-300/40 focus:before:bg-info-500/5",
        both: "text-info-600 dark:text-info-300 before:border-info-800/40 active:before:bg-info-50 hover:before:border-info-500 dark:before:border-info-300/40 dark:focus:before:bg-info-500/5",
    },
    gray: {
        light: "text-gray-600 before:border-gray-800/40 hover:before:border-gray-500 active:before:bg-gray-50",
        dark: "text-gray-300 before:border-gray-300/40 focus:before:bg-gray-500/5",
        both: "text-gray-600 dark:text-gray-300 before:border-gray-800/40 active:before:bg-gray-50 hover:before:border-gray-500 dark:before:border-gray-300/40 dark:focus:before:bg-gray-500/5",
    },
    neutral: {
        light: "text-gray-900 before:border-gray-900 hover:before:border-gray-800 active:before:bg-gray-50",
        dark: "text-white before:border-white hover:before:border-white/80 focus:before:bg-gray-500/5",
        both: "text-gray-900 before:border-gray-900 hover:before:border-gray-800 active:before:bg-gray-50 dark:text-white dark:before:border-white dark:hover:before:border-white/80 dark:focus:before:bg-gray-500/5",
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
    neutral: colors.neutral[config.appearance],
    gray: colors.gray[config.appearance],
};

export default outlinedColors;
