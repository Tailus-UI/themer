import config from "./../../dropdownmenu.config";

const colors = {
    primary: {
        base: "data-[highlighted]:bg-primary-600 data-[highlighted]:text-white",
        appearance: {
            light: "text-gray-700",
            dark: "text-gray-300",
            both: "text-gray-700 dark:text-gray-300",
        },
    },
    danger: {
        base: "data-[highlighted]:bg-danger-600 data-[highlighted]:text-white",
        appearance: {
            light: "text-danger-600",
            dark: "text-danger-300",
            both: "text-danger-600 dark:text-danger-300",
        },
    },
    warning: {
        base: "data-[highlighted]:bg-warning-600 data-[highlighted]:text-white",
        appearance: {
            light: "text-warning-600",
            dark: "text-warning-400",
            both: "text-warning-600 dark:text-warning-400",
        },
    },
    gray: {
        base: "data-[highlighted]:bg-gray-600 data-[highlighted]:text-white",
        appearance: {
            light: "text-gray-700",
            dark: "text-gray-300",
            both: "text-gray-700 dark:text-gray-300",
        },
    },
    neutral: {
        light: "text-gray-700 data-[highlighted]:bg-gray-900 data-[highlighted]:text-white",
        dark: "text-gray-300 data-[highlighted]:text-gray-900 data-[highlighted]:bg-white",
        both: "text-gray-700 data-[highlighted]:bg-gray-900 data-[highlighted]:text-white dark:text-gray-300 dark:data-[highlighted]:text-gray-900 dark:data-[highlighted]:bg-white",
    },
};

const solidColors = {
    primary: colors.primary.base + " " + colors.primary.appearance[config.appearance],
    danger: colors.danger.base + " " + colors.danger.appearance[config.appearance],
    warning: colors.warning.base + " " + colors.warning.appearance[config.appearance],
    gray: colors.gray.base + " " + colors.gray.appearance[config.appearance],
    neutral: colors.neutral[config.appearance],
};

export default solidColors;
export { solidColors };
