import config from "../../../button.config";

const colorsVariants = {
    primary: {
        light: "text-primary-900 before:bg-primary-100 hover:before:bg-primary-200 focus:before:bg-primary-300/75",
        dark: "text-primary-400 before:bg-primary-500/5 hover:before:bg-primary-500/10 focus:before:bg-primary-500/20",
        both: "text-primary-900 dark:text-primary-400 before:bg-primary-100 hover:before:bg-primary-200 focus:before:bg-primary-300/75 dark:before:bg-primary-500/5 dark:hover:before:bg-primary-500/10 dark:focus:before:bg-primary-500/20",
    },
    secondary: {
        light: "text-secondary-900 before:bg-secondary-100 hover:before:bg-secondary-200 focus:before:bg-secondary-300/75",
        dark: "text-secondary-400 before:bg-secondary-500/5 hover:before:bg-secondary-500/10 focus:before:bg-secondary-500/20",
        both: "text-secondary-900 dark:text-secondary-400 before:bg-secondary-100 hover:before:bg-secondary-200 focus:before:bg-secondary-300/75 dark:before:bg-secondary-500/5 dark:hover:before:bg-secondary-500/10 dark:focus:before:bg-secondary-500/20",
    },
    accent: {
        light: "text-accent-900 before:bg-accent-100 hover:before:bg-accent-200 focus:before:bg-accent-300/75",
        dark: "text-accent-400 before:bg-accent-500/5 hover:before:bg-accent-500/10 focus:before:bg-accent-500/20",
        both: "text-accent-900 dark:text-accent-400 before:bg-accent-100 hover:before:bg-accent-200 focus:before:bg-accent-300/75 dark:before:bg-accent-500/5 dark:hover:before:bg-accent-500/10 dark:focus:before:bg-accent-500/20",
    },
    danger: {
        light: "text-danger-900 before:bg-danger-100 hover:before:bg-danger-200 focus:before:bg-danger-300/75",
        dark: "text-danger-400 before:bg-danger-500/5 hover:before:bg-danger-500/10 focus:before:bg-danger-500/20",
        both: "text-danger-900 dark:text-danger-400 before:bg-danger-100 hover:before:bg-danger-200 focus:before:bg-danger-300/75 dark:before:bg-danger-500/5 dark:hover:before:bg-danger-500/10 dark:focus:before:bg-danger-500/20",
    },
    success: {
        light: "text-success-900 before:bg-success-100 hover:before:bg-success-200 focus:before:bg-success-300/75",
        dark: "text-success-400 before:bg-success-500/5 hover:before:bg-success-500/10 focus:before:bg-success-500/20",
        both: "text-success-900 dark:text-success-400 before:bg-success-100 hover:before:bg-success-200 focus:before:bg-success-300/75 dark:before:bg-success-500/5 dark:hover:before:bg-success-500/10 dark:focus:before:bg-success-500/20",
    },
    warning: {
        light: "text-warning-900 before:bg-warning-100 hover:before:bg-warning-200 focus:before:bg-warning-300/75",
        dark: "text-warning-400 before:bg-warning-500/5 hover:before:bg-warning-500/10 focus:before:bg-warning-500/20",
        both: "text-warning-900 dark:text-warning-400 before:bg-warning-100 hover:before:bg-warning-200 focus:before:bg-warning-300/75 dark:before:bg-warning-500/5 dark:hover:before:bg-warning-500/10 dark:focus:before:bg-warning-500/20",
    },
    info: {
        light: "text-info-900 before:bg-info-100 hover:before:bg-info-200 focus:before:bg-info-300/75",
        dark: "text-info-400 before:bg-info-500/5 hover:before:bg-info-500/10 focus:before:bg-info-500/20",
        both: "text-info-900 dark:text-info-400 before:bg-info-100 hover:before:bg-info-200 focus:before:bg-info-300/75 dark:before:bg-info-500/5 dark:hover:before:bg-info-500/10 dark:focus:before:bg-info-500/20",
    },
    gray: {
        light: "text-gray-900 before:bg-gray-100 hover:before:bg-gray-200 focus:before:bg-gray-300/75",
        dark: "text-gray-400 before:bg-gray-500/5 hover:before:bg-gray-500/10 focus:before:bg-gray-500/20",
        both: "text-gray-900 dark:text-gray-400 before:bg-gray-100 hover:before:bg-gray-200 focus:before:bg-gray-300/75 dark:before:bg-gray-500/5 dark:hover:before:bg-gray-500/10 dark:focus:before:bg-gray-500/20",
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
