import config from "./../../alertdialog.config";

const colors = {
    info: {
        light: "bg-info-50",
        dark: "bg-white/10",
        both: "bg-info-50 dark:bg-white/10",
    },
    warning: {
        light: "bg-warning-100",
        dark: "bg-white/10",
        both: "bg-warning-100 dark:bg-white/10",
    },
    danger: {
        light: "bg-danger-50",
        dark: "bg-white/10",
        both: "bg-danger-50 dark:bg-white/10",
    },
};

const imageContainerColors = {
    info: colors.info[config.appearance],
    warning: colors.warning[config.appearance],
    danger: colors.danger[config.appearance],
};

export default imageContainerColors;
export { imageContainerColors };
