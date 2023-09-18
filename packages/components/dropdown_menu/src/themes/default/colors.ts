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

const subTrigerColors = {
    base: {
        light: "data-[state=open]:bg-gray-950/5",
        dark: "data-[state=open]:bg-white/5",
        both: "data-[state=open]:bg-gray-950/5 dark:data-[state=open]:bg-white/5",
    },
    primary: "data-[highlighted]:data-[state=open]:bg-primary-600",
    danger: "data-[highlighted]:data-[state=open]:bg-danger-600",
    warning: "data-[highlighted]:data-[state=open]:bg-warning-600",
    gray: "data-[highlighted]:data-[state=open]:bg-gray-600",
    neutral: {
        light: "data-[highlighted]:data-[state=open]:bg-gray-900",
        dark: "data-[highlighted]:data-[state=open]:bg-white",
        both: "data-[highlighted]:data-[state=open]:bg-gray-900 dark:data-[highlighted]:data-[state=open]:bg-white",
    },
};

const solidSubTrigerColors = {
    primary:
        subTrigerColors.primary +
        " " +
        colors.primary.appearance[config.appearance] +
        " " +
        subTrigerColors.base[config.appearance],
    danger:
        subTrigerColors.danger +
        " " +
        colors.danger.appearance[config.appearance] +
        " " +
        subTrigerColors.base[config.appearance],
    warning:
        subTrigerColors.warning +
        " " +
        colors.warning.appearance[config.appearance] +
        " " +
        subTrigerColors.base[config.appearance],
    gray:
        subTrigerColors.gray +
        " " +
        colors.gray.appearance[config.appearance] +
        " " +
        subTrigerColors.base[config.appearance],
    neutral:
        subTrigerColors.neutral[config.appearance] +
        " " +
        colors.neutral[config.appearance] +
        " " +
        subTrigerColors.base[config.appearance],
};

export default solidColors;
export { solidColors, solidSubTrigerColors };
