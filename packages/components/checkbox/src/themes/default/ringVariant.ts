import * as baseCheckbox from "./base";
import themer from "./../../../../../tailus.config";

const root = {
    base: "group peer relative flex h-5 w-5 appearance-none items-center justify-center rounded border  outline-none ring-0 transition duration-150 active:ring-[3px] data-[disabled]:border data-[state=checked]:border-0 data-[state=checked]:border-transparent data-[disabled]:data-[state=checked]:bg-transparent data-[state=checked]:bg-primary-600 data-[state=checked]:ring-primary-500 data-[state=checked]:focus:border-transparent data-[state=checked]:focus:ring-[1.5px] data-[state=checked]:focus:ring-offset-[1.5px]",
    appearances: {
        light: "border-gray-400 focus:border-gray-600 active:ring-primary-600/10 data-[disabled]:border-gray-200 data-[disabled]:data-[state=checked]:border-gray-200 data-[disabled]:bg-gray-50",
        dark: "border-gray-700 ring-offset-gray-950 focus:border-white/50 focus:ring-primary-900/50 data-[disabled]:border-gray-900 data-[disabled]:data-[state=checked]:border-gray-800 data-[disabled]:bg-transparent data-[state=checked]:checked:border-gray-900 data-[state=checked]:focus:ring-primary-600 data-[state=checked]:focus:ring-offset-gray-950",
        both: "dark:border-gray-600 dark:ring-offset-gray-950 dark:focus:border-white/50 dark:focus:ring-primary-900/50 dark:data-[disabled]:border-gray-900 dark:data-[disabled]:data-[state=checked]:border-gray-800 dark:data-[disabled]:bg-transparent dark:data-[state=checked]:checked:border-gray-900 dark:data-[state=checked]:focus:ring-primary-600 dark:data-[state=checked]:focus:ring-offset-gray-950",
    },
};

const ringVariant = {
    root: root.base + " " + root.appearances[themer.appearance],
    label: baseCheckbox.label.base + " " + baseCheckbox.label.appearances[themer.appearance],
    indicator:
        baseCheckbox.indicator.base + " " + baseCheckbox.indicator.appearances[themer.appearance],
};

export default ringVariant;
export { ringVariant };
