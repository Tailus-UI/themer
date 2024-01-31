import { Colors } from "../../../button.types";
import config from "./../../../../button.config";

const colors = {
    primary: {
        light: "text-primary-900 border-primary-200 before:from-primary-50 hover:bg-primary-100 active:bg-primary-200",
        dark: "dark:text-primary-300 dark:border-primary-300/15 dark:hover:bg-primary-300/5 dark:active:bg-primary-300/10 dark:active:before:from-primary-300/5",
        both: "text-primary-900 border-primary-200 before:from-primary-50 hover:bg-primary-100 active:bg-primary-200 dark:text-primary-300 dark:border-primary-300/15 dark:hover:bg-primary-300/5 dark:active:bg-primary-300/10 dark:active:before:from-primary-300/5",
    },
    secondary: {
        light: "text-secondary-900 border-secondary-200 before:from-secondary-50 hover:bg-secondary-100 active:bg-secondary-200",
        dark: "dark:text-secondary-300 dark:border-secondary-300/15 dark:hover:bg-secondary-300/5 dark:active:bg-secondary-300/10 dark:active:before:from-secondary-300/5",
        both: "text-secondary-900 border-secondary-200 before:from-secondary-50 hover:bg-secondary-100 active:bg-secondary-200 dark:text-secondary-300 dark:border-secondary-300/15 dark:hover:bg-secondary-300/5 dark:active:bg-secondary-300/10 dark:active:before:from-secondary-300/5",
    },
    accent: {
        light: "text-accent-900 border-accent-200 before:from-accent-50 hover:bg-accent-100 active:bg-accent-200",
        dark: "dark:text-accent-300 dark:border-accent-300/15 dark:hover:bg-accent-300/5 dark:active:bg-accent-300/10 dark:active:before:from-accent-300/5",
        both: "text-accent-900 border-accent-200 before:from-accent-50 hover:bg-accent-100 active:bg-accent-200 dark:text-accent-300 dark:border-accent-300/15 dark:hover:bg-accent-300/5 dark:active:bg-accent-300/10 dark:active:before:from-accent-300/5",
    },
    info: {
        light: "text-info-900 border-info-200 before:from-info-50 hover:bg-info-100 active:bg-info-200",
        dark: "dark:text-info-300 dark:border-info-300/15 dark:hover:bg-info-300/5 dark:active:bg-info-300/10 dark:active:before:from-info-300/5",
        both: "text-info-900 border-info-200 before:from-info-50 hover:bg-info-100 active:bg-info-200 dark:text-info-300 dark:border-info-300/15 dark:hover:bg-info-300/5 dark:active:bg-info-300/10 dark:active:before:from-info-300/5",
    },
    danger: {
        light: "text-danger-900 border-danger-200 before:from-danger-50 hover:bg-danger-100 active:bg-danger-200",
        dark: "dark:text-danger-300 dark:border-danger-300/15 dark:hover:bg-danger-300/5 dark:active:bg-danger-300/10 dark:active:before:from-danger-300/5",
        both: "text-danger-900 border-danger-200 before:from-danger-50 hover:bg-danger-100 active:bg-danger-200 dark:text-danger-300 dark:border-danger-300/15 dark:hover:bg-danger-300/5 dark:active:bg-danger-300/10 dark:active:before:from-danger-300/5",
    },
    warning: {
        light: "text-warning-900 border-warning-200 before:from-warning-50 hover:bg-warning-100 active:bg-warning-200",
        dark: "dark:text-warning-300 dark:border-warning-300/15 dark:hover:bg-warning-300/5 dark:active:bg-warning-300/10 dark:active:before:from-warning-300/5",
        both: "text-warning-900 border-warning-200 before:from-warning-50 hover:bg-warning-100 active:bg-warning-200 dark:text-warning-300 dark:border-warning-300/15 dark:hover:bg-warning-300/5 dark:active:bg-warning-300/10 dark:active:before:from-warning-300/5",
    },
    success: {
        light: "text-success-900 border-success-200 before:from-success-50 hover:bg-success-100 active:bg-success-200",
        dark: "dark:text-success-300 dark:border-success-300/15 dark:hover:bg-success-300/5 dark:active:bg-success-300/10 dark:active:before:from-success-300/5",
        both: "text-success-900 border-success-200 before:from-success-50 hover:bg-success-100 active:bg-success-200 dark:text-success-300 dark:border-success-300/15 dark:hover:bg-success-300/5 dark:active:bg-success-300/10 dark:active:before:from-success-300/5",
    },
    gray: {
        light: "text-gray-900 border-gray-200 before:from-gray-100 hover:bg-gray-100 active:bg-gray-200",
        dark: "dark:text-gray-300 dark:border-gray-300/15 dark:hover:bg-gray-300/5 dark:active:bg-gray-300/10 dark:active:before:from-gray-300/5",
        both: "text-gray-900 border-gray-200 before:from-gray-100 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:border-gray-300/15 dark:hover:bg-gray-300/5 dark:active:bg-gray-300/10 dark:active:before:from-gray-300/5",
    },
    neutral: {
        light: "text-gray-950 border-gray-950 before:from-gray-100 hover:bg-gray-100 active:bg-gray-200",
        dark: "dark:text-gray-300 dark:border-white dark:hover:bg-gray-300/5 dark:active:bg-gray-300/10 dark:active:before:from-gray-300/5",
        both: "text-gray-950 border-gray-950 before:from-gray-100 hover:bg-gray-100 active:bg-gray-200 dark:text-gray-300 dark:border-white dark:hover:bg-gray-300/5 dark:active:bg-gray-300/10 dark:active:before:from-gray-300/5",
    },
};

const getOutlinedColor = (color: string) => {
    return colors[color][config.appearance];
};
const outlinedColors: Colors = {
    primary: getOutlinedColor("primary"),
    secondary: getOutlinedColor("secondary"),
    accent: getOutlinedColor("accent"),
    danger: getOutlinedColor("danger"),
    success: getOutlinedColor("success"),
    warning: getOutlinedColor("warning"),
    info: getOutlinedColor("info"),
    gray: getOutlinedColor("gray"),
    neutral: getOutlinedColor("neutral"),
};

export default outlinedColors;
