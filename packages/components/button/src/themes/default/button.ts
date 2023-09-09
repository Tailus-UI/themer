import * as baseButton from "./base";
import config from "./../../button.config";

const neutralColors = {
    appearances: {
        light: "text-white before:bg-gray-900 hover:before:bg-gray-800 focus:before:bg-gray-700 ",
        dark: "text-gray-900 before:bg-white hover:before:bg-white/90 focus:before:bg-white/70",
        both: "text-white dark:text-gray-900 before:bg-gray-900 hover:before:bg-gray-800 focus:before:bg-gray-700 dark:before:bg-white dark:hover:before:bg-white/90 dark:focus:before:bg-white/70",
    },
};

const colors = {
    primary:
        "text-white before:bg-primary-600 hover:before:bg-primary-700 focus:before:bg-primary-700",
    secondary:
        "text-white before:bg-secondary-600 hover:before:bg-secondary-700 focus:before:bg-secondary-700",
    accent: "text-white before:bg-accent-600 hover:before:bg-accent-700 focus:before:bg-accent-700",
    danger: "text-white before:bg-danger-600 hover:before:bg-danger-700 focus:before:bg-danger-700",
    success:
        "text-white before:bg-success-600 hover:before:bg-success-700 focus:before:bg-success-700",
    warning:
        "text-white before:bg-warning-600 hover:before:bg-warning-700 focus:before:bg-warning-700",
    info: "text-white before:bg-info-600 hover:before:bg-info-700 focus:before:bg-info-700",
    neutral: neutralColors.appearances[config.appearance],
};
const button = {
    base: baseButton.base.layout + " " + baseButton.base.appearances[config.appearance],
    label: baseButton.label,
    colors,
    size: baseButton.sizes,
};

export default button;
export { button, colors };
