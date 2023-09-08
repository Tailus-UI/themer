const root = {
    base: "group peer relative flex h-[1.375rem] w-[1.375rem] appearance-none items-center justify-center rounded-md border outline-none transition duration-150 before:absolute before:inset-0 before:m-auto before:h-[1.125rem] before:w-[1.125rem] before:rounded-[4px] before:shadow-inner data-[state=checked]:before:border-t data-[state=checked]:before:bg-primary-600 data-[disabled]:before:hidden",
    appearances: {
        light: "border-gray-300 bg-white before:border-transparent before:bg-white before:shadow-gray-950/[0.15] focus:border-gray-600/50 active:ring-[3px] active:ring-primary-600/10 data-[state=checked]:before:border-white/30",
        dark: " border-gray-800 bg-transparent before:border before:bg-gray-900/95 before:shadow-gray-950/80 focus:border-white/30 active:ring-primary-400/20 data-[state=checked]:before:border-transparent data-[state=checked]:before:bg-primary-500",
        both: "border-gray-300 bg-white before:border-transparent before:bg-white before:shadow-gray-950/[0.15] focus:border-gray-600/50 active:ring-[3px] active:ring-primary-600/10 data-[state=checked]:before:border-white/30 dark:border-gray-800 dark:bg-transparent dark:before:border dark:before:bg-gray-900/95 dark:before:shadow-gray-950/80 dark:focus:border-white/30 dark:active:ring-primary-400/20 dark:data-[state=checked]:before:border-transparent dark:data-[state=checked]:before:bg-primary-500",
    },
};

const label = {
    base: "pl-3 leading-none",
    appearances: {
        light: "text-gray-700 peer-data-[disabled]:text-gray-300",
        dark: "text-gray-300 peer-data-[disabled]:text-gray-700",
        both: "text-gray-700 peer-data-[disabled]:text-gray-300 dark:text-gray-300 dark:peer-data-[disabled]:text-gray-700",
    },
};

const indicator = {
    base: "relative text-white dark:group-data-[disabled]:text-gray-800",
    appearances: {
        light: "group-data-[disabled]:text-gray-300",
        dark: "group-data-[disabled]:text-gray-700",
        both: "group-data-[disabled]:text-gray-300 dark:group-data-[disabled]:text-gray-700",
    },
};

export { root, label, indicator };
