import config from "./../../../dropdownmenu.config";
import type { Colors } from "./../../types";

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

const softColors: Colors = {
    primary: colors.primary.base + " " + colors.primary.appearance[config.appearance],
    danger: colors.danger.base + " " + colors.danger.appearance[config.appearance],
    warning: colors.warning.base + " " + colors.warning.appearance[config.appearance],
    gray: colors.gray.base + " " + colors.gray.appearance[config.appearance],
};

const subTrigerColors = {
    base: {
        light: "data-[state=open]:bg-gray-950/5",
        dark: "data-[state=open]:bg-white/5",
        both: "data-[state=open]:bg-gray-950/5 dark:data-[state=open]:bg-white/5",
    },
    primary: {
        base: "data-[highlighted]:data-[state=open]:bg-primary-500/20",
        appearance: {
            light: "data-[highlighted]:data-[state=open]:text-primary-900",
            dark: "data-[highlighted]:data-[state=open]:text-white",
            both: "data-[highlighted]:data-[state=open]:text-primary-900 dark:data-[highlighted]:data-[state=open]:text-white",
        },
    },
    danger: {
        base: "data-[highlighted]:data-[state=open]:bg-danger-500/20",
        appearance: {
            light: "data-[highlighted]:data-[state=open]:text-danger-900",
            dark: "data-[highlighted]:data-[state=open]:text-white",
            both: "data-[highlighted]:data-[state=open]:text-danger-900 dark:data-[highlighted]:data-[state=open]:text-white",
        },
    },
    warning: {
        base: "data-[highlighted]:data-[state=open]:bg-warning-600/20",
        appearance: {
            light: "data-[highlighted]:data-[state=open]:text-warning-900",
            dark: "data-[highlighted]:data-[state=open]:text-white",
            both: "data-[highlighted]:data-[state=open]:text-warning-900 dark:data-[highlighted]:data-[state=open]:text-white",
        },
    },
    gray: {
        base: "data-[highlighted]:data-[state=open]:bg-gray-500/20",
        appearance: {
            light: "data-[highlighted]:data-[state=open]:text-gray-900",
            dark: "data-[highlighted]:data-[state=open]:text-white",
            both: "data-[highlighted]:data-[state=open]:text-gray-900 dark:data-[highlighted]:data-[state=open]:text-white",
        },
    },
};

const softSubTrigerColors = {
    primary:
        colors.primary.appearance[config.appearance] +
        " " +
        subTrigerColors.primary.appearance[config.appearance] +
        " " +
        subTrigerColors.primary.base +
        " " +
        subTrigerColors.base[config.appearance],

    danger:
        colors.danger.appearance[config.appearance] +
        " " +
        subTrigerColors.danger.appearance[config.appearance] +
        " " +
        subTrigerColors.danger.base +
        " " +
        subTrigerColors.base[config.appearance],

    warning:
        colors.warning.appearance[config.appearance] +
        " " +
        subTrigerColors.warning.appearance[config.appearance] +
        " " +
        subTrigerColors.warning.base +
        " " +
        subTrigerColors.base[config.appearance],
    gray:
        colors.gray.appearance[config.appearance] +
        " " +
        subTrigerColors.gray.appearance[config.appearance] +
        " " +
        subTrigerColors.gray.base +
        " " +
        subTrigerColors.base[config.appearance],
};

export default softColors;
export { softColors, softSubTrigerColors };
