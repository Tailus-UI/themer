import config from "./../../switch.config";

const parentElement = "flex flex-row-reverse items-center gap-5";

const baseRoot = {
    base: "group peer relative transition duration-150 active:ring-[3px] active:ring-primary-600/20 h-6 w-11 cursor-default rounded-[--switch-border-radius] border outline-none",
    appearances: {
        light: "border-gray-300 bg-gray-200 focus:border-gray-600/50 data-[disabled]:data-[state=checked]:border-gray-200 data-[state=checked]:border-primary-600 data-[disabled]:bg-transparent data-[disabled]:data-[state=checked]:bg-gray-200 data-[state=checked]:bg-primary-600",
        dark: "focus:border-white/20 border-gray-800 bg-gray-900 data-[disabled]:data-[state=checked]:border-gray-900 data-[state=checked]:border-primary-500 data-[disabled]:data-[state=checked]:bg-gray-950",
        both: "border-gray-300 bg-gray-200 focus:border-gray-600/50 data-[disabled]:data-[state=checked]:border-gray-200 data-[state=checked]:border-primary-600 data-[disabled]:bg-transparent data-[disabled]:data-[state=checked]:bg-gray-200 data-[state=checked]:bg-primary-600 dark:focus:border-white/20 dark:border-gray-800 dark:bg-gray-900 dark:data-[disabled]:data-[state=checked]:border-gray-900 dark:data-[state=checked]:border-primary-500 dark:data-[disabled]:data-[state=checked]:bg-gray-950",
    },
};

const baseThumb = {
    base: "block h-5 w-5 translate-x-px rounded-[calc(var(--switch-border-radius)-0.125rem)] bg-white shadow shadow-gray-950/10 transition-transform duration-200 will-change-transform data-[state=checked]:translate-x-[21px] group-data-[disabled]:shadow-none",
    appearances: {
        light: "group-data-[disabled]:bg-gray-400",
        dark: "dark:group-data-[disabled]:bg-gray-800",
        both: "group-data-[disabled]:bg-gray-400 dark:group-data-[disabled]:bg-gray-800",
    },
};

const baseLabel = {
    base: "leading-none",
    appearances: {
        light: "text-gray-700 peer-data-[disabled]:text-gray-300",
        dark: "text-gray-300 peer-data-[disabled]:text-gray-700",
        both: "peer-data-[disabled]:text-gray-400 dark:peer-data-[disabled]:text-gray-800 text-gray-700 dark:text-gray-300",
    },
};

const root = baseRoot.base + " " + baseRoot.appearances[config.appearance];
const thumb = baseThumb.base + " " + baseThumb.appearances[config.appearance];
const label = baseLabel.base + " " + baseLabel.appearances[config.appearance];

export { root, thumb, label, parentElement };
