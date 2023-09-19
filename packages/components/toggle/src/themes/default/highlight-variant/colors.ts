import config from "../../../toggle.config";

const colors = {
    primary: {
        light: "data-[state=on]:bg-primary-100 data-[state=on]:text-primary-700",
        dark: "data-[state=on]:bg-primary-500/10 data-[state=on]:text-primary-300",
        both: "data-[state=on]:bg-primary-100 data-[state=on]:text-primary-700 dark:data-[state=on]:bg-primary-500/10 dark:data-[state=on]:text-primary-300",
    },
    secondary: {
        light: "data-[state=on]:bg-secondary-100 data-[state=on]:text-secondary-700",
        dark: "data-[state=on]:bg-secondary-500/10 data-[state=on]:text-secondary-300",
        both: "data-[state=on]:bg-secondary-100 data-[state=on]:text-secondary-700 dark:data-[state=on]:bg-secondary-500/10 dark:data-[state=on]:text-secondary-300",
    },
    accent: {
        light: "data-[state=on]:bg-accent-100 data-[state=on]:text-accent-700",
        dark: "data-[state=on]:bg-accent-500/10 data-[state=on]:text-accent-300",
        both: "data-[state=on]:bg-accent-100 data-[state=on]:text-accent-700 dark:data-[state=on]:bg-accent-500/10 dark:data-[state=on]:text-accent-300",
    },
    danger: {
        light: "data-[state=on]:bg-danger-100 data-[state=on]:text-danger-700",
        dark: "data-[state=on]:bg-danger-500/10 data-[state=on]:text-danger-300",
        both: "data-[state=on]:bg-danger-100 data-[state=on]:text-danger-700 dark:data-[state=on]:bg-danger-500/10 dark:data-[state=on]:text-danger-300",
    },
    success: {
        light: "data-[state=on]:bg-success-100 data-[state=on]:text-success-700",
        dark: "data-[state=on]:bg-success-500/10 data-[state=on]:text-success-300",
        both: "data-[state=on]:bg-success-100 data-[state=on]:text-success-700 dark:data-[state=on]:bg-success-500/10 dark:data-[state=on]:text-success-300",
    },
    warning: {
        light: "data-[state=on]:bg-warning-100 data-[state=on]:text-warning-700",
        dark: "data-[state=on]:bg-warning-500/10 data-[state=on]:text-warning-300",
        both: "data-[state=on]:bg-warning-100 data-[state=on]:text-warning-700 dark:data-[state=on]:bg-warning-500/10 dark:data-[state=on]:text-warning-300",
    },
    info: {
        light: "data-[state=on]:bg-info-100 data-[state=on]:text-info-700",
        dark: "data-[state=on]:bg-info-500/10 data-[state=on]:text-info-300",
        both: "data-[state=on]:bg-info-100 data-[state=on]:text-info-700 dark:data-[state=on]:bg-info-500/10 dark:data-[state=on]:text-info-300",
    },
    gray: {
        light: "data-[state=on]:bg-gray-100 data-[state=on]:text-gray-700",
        dark: "data-[state=on]:bg-gray-500/10 data-[state=on]:text-gray-300",
        both: "data-[state=on]:bg-gray-100 data-[state=on]:text-gray-700 dark:data-[state=on]:bg-gray-500/10 dark:data-[state=on]:text-gray-300",
    },
    neutral: {
        light: "data-[state=on]:bg-gray-900 data-[state=on]:text-white",
        dark: "data-[state=on]:bg-white data-[state=on]:text-gray-900",
        both: "data-[state=on]:bg-gray-900 data-[state=on]:text-white dark:data-[state=on]:bg-white dark:data-[state=on]:text-gray-900",
    },
};

const rootColors = {
    primary: colors.primary[config.appearance],
    secondary: colors.secondary[config.appearance],
    accent: colors.accent[config.appearance],
    danger: colors.danger[config.appearance],
    warning: colors.warning[config.appearance],
    success: colors.success[config.appearance],
    gray: colors.gray[config.appearance],
    neutral: colors.neutral[config.appearance],
};

export default rootColors;
export { rootColors };
