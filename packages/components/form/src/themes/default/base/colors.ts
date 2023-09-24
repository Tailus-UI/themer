import config from "./../../../form.config";
import { baseMessage } from "./base";

const baseMessageColors = {
    gray: {
        light: "text-gray-600",
        dark: "text-gray-400",
        both: "text-gray-600 dark:text-gray-400",
    },
    danger: {
        light: "text-danger-600",
        dark: "text-danger-400",
        both: "text-danger-600 dark:text-danger-400",
    },
    warning: {
        light: "text-warning-700",
        dark: "text-warning-400",
        both: "text-warning-700 dark:text-warning-400",
    },
};

const messageColors = {
    gray: baseMessage + " " + baseMessageColors.gray[config.appearance],
    danger: baseMessage + " " + baseMessageColors.danger[config.appearance],
    warning: baseMessage + " " + baseMessageColors.warning[config.appearance],
};

export { messageColors };
