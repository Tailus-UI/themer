import config from "../../../button.config";

const colorsVariants = {
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
};

const colors = {
    primary: colorsVariants.primary[config.appearance],
    secondary: colorsVariants.secondary[config.appearance],
    accent: colorsVariants.accent[config.appearance],
    danger: colorsVariants.danger[config.appearance],
    success: colorsVariants.success[config.appearance],
    warning: colorsVariants.warning[config.appearance],
    info: colorsVariants.info[config.appearance],
    gray: colorsVariants.gray[config.appearance],
};

export default colors;
