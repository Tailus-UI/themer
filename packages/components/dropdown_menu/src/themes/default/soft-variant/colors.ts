import config from "./../../../dropdownmenu.config";

const colors = {
    primary: {
        base: "data-[highlighted]:bg-primary-500/20",
        appearance: {
            light: "data-[highlighted]:text-primary-900 text-gray-700",
            dark: "data-[highlighted]:text-white text-gray-300",
            both: "data-[highlighted]:text-primary-900 text-gray-700 dark:data-[highlighted]:text-white dark:text-gray-300",
        },
    },
    danger: {
        base: "data-[highlighted]:bg-danger-500/20",
        appearance: {
            light: "data-[highlighted]:text-danger-900 text-danger-600",
            dark: "data-[highlighted]:text-danger-100 text-danger-400",
            both: "data-[highlighted]:text-danger-900 text-danger-600 dark:data-[highlighted]:text-danger-100 dark:text-danger-400",
        },
    },
    warning: {
        base: "data-[highlighted]:bg-warning-600/20",
        appearance: {
            light: "data-[highlighted]:text-warning-900 text-warning-600",
            dark: "data-[highlighted]:text-warning-100 text-warning-400",
            both: "data-[highlighted]:text-warning-900 text-warning-600 dark:data-[highlighted]:text-warning-100 dark:text-warning-400",
        },
    },
    gray: {
        base: "data-[highlighted]:bg-gray-500/20",
        appearance: {
            light: "data-[highlighted]:text-gray-900 text-gray-700",
            dark: "data-[highlighted]:text-white text-gray-300",
            both: "data-[highlighted]:text-gray-900 text-gray-700 dark:data-[highlighted]:text-white dark:text-gray-300",
        },
    },
};

const softColors = {
    primary: colors.primary.base + " " + colors.primary.appearance[config.appearance],
    danger: colors.danger.base + " " + colors.danger.appearance[config.appearance],
    warning: colors.warning.base + " " + colors.warning.appearance[config.appearance],
    gray: colors.gray.base + " " + colors.gray.appearance[config.appearance],
};

export default softColors;
export { softColors };
