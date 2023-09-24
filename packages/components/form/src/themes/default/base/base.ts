import config from "../../../form.config";

const baseInput =
    "w-full focus:outline-none rounded-[--field-border-radius] appearance-none ring-0 transition duration-300";

const baseInputVariants = {
    outlined: {
        base: "border bg-transparent focus:ring-[3px]",
        appearances: {
            light: "border-[--field-light-border-color] placeholder-gray-500 focus:ring-primary-500/10 focus:border-gray-500 text-gray-700",
            dark: "border-[--field-dark-border-color] placeholder-gray-400 focus:border-white/30 focus:ring-primary-900/40 text-white",
            both: "border-[--field-light-border-color] dark:border-[--field-dark-border-color] placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary-500/10 focus:border-gray-500 dark:focus:border-white/30 dark:focus:ring-primary-900/40 text-gray-900 dark:text-white",
        },
    },
    soft: {
        base: "border border-transparent focus:ring-[3px]",
        appearances: {
            light: "bg-[--field-light-bg] focus:bg-[--field-light-focus-bg] placeholder-gray-600 focus:ring-primary-500/10 focus:border-gray-500 text-gray-700",
            dark: "bg-[--field-dark-bg] focus:bg-[--field-dark-focus-bg] placeholder-gray-400 focus:border-white/30 focus:ring-primary-900/40 text-white",
            both: "bg-[--field-light-bg] dark:bg-[--field-dark-bg] focus:bg-[--field-light-focus-bg] dark:focus:bg-[--field-dark-focus-bg] placeholder-gray-600 dark:placeholder-gray-400 focus:ring-primary-500/10 focus:border-gray-500 dark:focus:border-white/30 dark:focus:ring-primary-900/40 text-gray-900 dark:text-white",
        },
    },
};

const baseInputLeadingIcon = {
    parent: "absolute inset-y-0 left-3 flex items-center pl-3",
    icon: "h-[1.125rem] w-[1.125rem]",
};

const baseInputTrailingIcon = {
    parent: "absolute inset-y-0 right-3 flex",
    icon: "h-[1.125rem] w-[1.125rem] m-auto",
};

const baseTextarea = baseInput + " resize-none";

const baseTextareaVariants = {
    outlined: {
        base: baseInputVariants.outlined.base,
        appearances: {
            light: baseInputVariants.outlined.appearances.light,
            dark: baseInputVariants.outlined.appearances.dark,
            both: baseInputVariants.outlined.appearances.both,
        },
    },
    soft: {
        light: baseInputVariants.soft.base + " " + baseInputVariants.soft.appearances.light,
        dark: baseInputVariants.soft.base + " " + baseInputVariants.soft.appearances.dark,
        both: baseInputVariants.soft.base + " " + baseInputVariants.soft.appearances.both,
    },
};

const baseLabel = {
    base: "block",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

const field = "space-y-2";
const baseMessage = "block text-sm";

const inputVariants = {
    outlined:
        baseInput +
        " " +
        baseInputVariants.outlined.base +
        " " +
        baseInputVariants.outlined.appearances[config.appearance],
    soft:
        baseInput +
        " " +
        baseInputVariants.soft.base +
        " " +
        baseInputVariants.soft.appearances[config.appearance],
};
const textareaVariants = {
    outlined:
        baseTextarea +
        " " +
        baseTextareaVariants.outlined.base +
        " " +
        baseTextareaVariants.outlined.appearances[config.appearance],
    soft: baseTextarea + " " + baseTextareaVariants.soft[config.appearance],
};

const label = baseLabel.base + " " + baseLabel.appearances[config.appearance];

export {
    field,
    inputVariants,
    textareaVariants,
    baseInputLeadingIcon,
    baseInputTrailingIcon,
    baseMessage,
    label,
};
