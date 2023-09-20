import config from "./../../emptystate.config";

const colors = {
    gray: {
        light: "bg-gray-100",
        dark: "bg-gray-900",
        both: "bg-gray-100 dark:bg-gray-900",
    },
    primary: {
        light: "bg-primary-100",
        dark: "bg-primary-500/10",
        both: "bg-primary-100 dark:bg-primary-500/10",
    },
    secondary: {
        light: "bg-secondary-100",
        dark: "bg-secondary-500/10",
        both: "bg-secondary-100 dark:bg-secondary-500/10",
    },
    accent: {
        light: "bg-accent-100",
        dark: "bg-accent-500/10",
        both: "bg-accent-100 dark:bg-accent-500/10",
    },
    danger: {
        light: "bg-danger-100",
        dark: "bg-danger-500/10",
        both: "bg-danger-100 dark:bg-danger-500/10",
    },
    success: {
        light: "bg-success-100",
        dark: "bg-success-500/10",
        both: "bg-success-100 dark:bg-success-500/10",
    },
    warning: {
        light: "bg-warning-100",
        dark: "bg-warning-500/10",
        both: "bg-warning-100 dark:bg-warning-500/10",
    },
    info: {
        light: "bg-info-100",
        dark: "bg-info-500/10",
        both: "bg-info-100 dark:bg-info-500/10",
    },
};

const imageContainerColors = {
    gray: colors.gray[config.appearance],
    primary: colors.primary[config.appearance],
    secondary: colors.secondary[config.appearance],
    accent: colors.accent[config.appearance],
    danger: colors.danger[config.appearance],
    success: colors.success[config.appearance],
    warning: colors.warning[config.appearance],
    info: colors.info[config.appearance],
};

export default imageContainerColors;
export { imageContainerColors };
