import config from "../../../form.config";

const baseInput =
    "w-full focus:outline rounded-[--field-border-radius] appearance-none transition duration-300";
const disabledInput = {
    light: "disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300",
    dark: "disabled:bg-gray-600/10 disabled:border-gray-600/20 disabled:text-gray-600 disabled:placeholder-gray-700",
    both: "disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700",
};

const baseInputVariants = {
    outlined: {
        base: "peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none",
        appearances: {
            light: "bg-transparent outline-primary-600 shadow-gray-700/5 border-[--field-light-border-color] hover:border-[--field-light-border-hover-color] placeholder-gray-400 text-gray-700",
            dark: "bg-[--field-dark-bg] focus:bg-[--field-dark-focus-bg] outline-primary-500 shadow-gray-950/40 border-[--field-dark-border-color] hover:border-[--field-dark-border-hover-color] placeholder-gray-600 text-white",
            both: "bg-transparent outline-primary-600 shadow-gray-700/5 border-[--field-light-border-color] hover:border-[--field-light-border-hover-color] placeholder-gray-400 text-gray-700 dark:bg-[--field-dark-bg] dark:focus:bg-[--field-dark-focus-bg] dark:outline-primary-500 dark:shadow-gray-950/40 dark:border-[--field-dark-border-color] dark:hover:border-[--field-dark-border-hover-color] dark:placeholder-gray-600 dark:text-white",
        },
    },
    soft: {
        base: "peer border focus:outline-none focus:ring-[3px]",
        appearances: {
            light: "border-transparent bg-[--field-light-bg] hover:border-[--field-light-border-color] focus:bg-[--field-light-focus-bg] placeholder-gray-400 focus:ring-primary-500/10 focus:border-gray-500 text-gray-700",
            dark: "border-transparent bg-[--field-dark-bg] hover:border-[--field-dark-border-color] focus:bg-[--field-dark-focus-bg] placeholder-gray-600 focus:border-white/30 focus:ring-primary-900/40 text-white",
            both: "border-transparent bg-[--field-light-bg] hover:border-[--field-light-border-color] focus:bg-[--field-light-focus-bg] placeholder-gray-400 focus:ring-primary-500/10 focus:border-gray-500 text-gray-700 dark:border-transparent dark:bg-[--field-dark-bg] dark:hover:border-[--field-dark-border-color] dark:focus:bg-[--field-dark-focus-bg] dark:placeholder-gray-600 dark:focus:border-white/30 dark:focus:ring-primary-900/40 dark:text-white",
        },
    },
    mixed: {
        base: "peer border focus:outline-2 focus:-outline-offset-1 focus:border-transparent",
        appearances: {
            light: "bg-[--field-light-bg] outline-primary-600 border-[--field-light-border-color] hover:border-[--field-light-border-hover-color] placeholder-gray-400 text-gray-700",
            dark: "bg-[--field-dark-bg] focus:bg-[--field-dark-focus-bg] outline-primary-500 border-[--field-dark-border-color] hover:border-[--field-dark-border-hover-color] placeholder-gray-600 text-white",
            both: "bg-[--field-light-bg] outline-primary-600 border-[--field-light-border-color] hover:border-[--field-light-border-hover-color] placeholder-gray-400 text-gray-700 dark:bg-[--field-dark-bg] dark:focus:bg-[--field-dark-focus-bg] dark:outline-primary-500 dark:border-[--field-dark-border-color] dark:hover:border-[--field-dark-border-hover-color] dark:placeholder-gray-600 dark:text-white",
        },
    },
};

const baseInputLeadingIcon = {
    parent: "absolute inset-y-0 left-3 flex items-center pl-3",
    icon: "size-[1.125rem]",
};

const baseInputTrailingIcon = {
    parent: "absolute inset-y-0 right-3 flex",
    icon: "size-[1.125rem] m-auto",
};

const baseTextarea = baseInput;

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
    mixed: {
        light: baseInputVariants.mixed.base + " " + baseInputVariants.mixed.appearances.light,
        dark: baseInputVariants.mixed.base + " " + baseInputVariants.mixed.appearances.dark,
        both: baseInputVariants.mixed.base + " " + baseInputVariants.mixed.appearances.both,
    },
};

const baseField = {
    base: "space-y-2.5 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50",
    appearances: {
        light: "text-gray-950 has-[:disabled]:has-[:where(label,span)]:text-gray-600",
        dark: "text-white has-[:disabled]:has-[:where(label,span)]:text-gray-400",
        both: "text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400",
    },
};

const field = baseField.base + " " + baseField.appearances[config.appearance];
const baseMessageStyle = {
    base: "block",
    appearances: {
        light: "peer-disabled:text-gray-600",
        dark: "peer-disabled:text-white",
        both: "peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400",
    },
};

const baseMessage = baseMessageStyle.base + " " + baseMessageStyle.appearances[config.appearance];

const inputVariants = {
    outlined:
        baseInput +
        " " +
        baseInputVariants.outlined.base +
        " " +
        baseInputVariants.outlined.appearances[config.appearance] +
        " " +
        disabledInput[config.appearance],
    soft:
        baseInput +
        " " +
        baseInputVariants.soft.base +
        " " +
        baseInputVariants.soft.appearances[config.appearance] +
        " " +
        disabledInput[config.appearance],
    mixed:
        baseInput +
        " " +
        baseInputVariants.mixed.base +
        " " +
        baseInputVariants.mixed.appearances[config.appearance] +
        " " +
        disabledInput[config.appearance],
};
const textareaVariants = {
    outlined:
        baseTextarea +
        " " +
        baseTextareaVariants.outlined.base +
        " " +
        baseTextareaVariants.outlined.appearances[config.appearance] +
        " " +
        disabledInput[config.appearance],
    soft:
        baseTextarea +
        " " +
        baseTextareaVariants.soft[config.appearance] +
        " " +
        disabledInput[config.appearance],
    mixed:
        baseTextarea +
        " " +
        baseTextareaVariants.mixed[config.appearance] +
        " " +
        disabledInput[config.appearance],
};

const label = "block font-medium";

export {
    field,
    inputVariants,
    textareaVariants,
    baseInputLeadingIcon,
    baseInputTrailingIcon,
    baseMessage,
    label,
};
