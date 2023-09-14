const root = {
    base: "relative group transition duration-300 flex items-center justify-center border border-transparent rounded-[--btn-border-radius] outline-none",
    appearances: {
        light: "text-gray-600 hover:bg-gray-100 hover:text-gray-800",
        dark: "focus:border-gray-700 hover:text-white dark:hover:bg-gray-900 text-gray-400",
        both: "hover:text-gray-800 hover:bg-gray-100 dark:hover:text-white focus:border-gray-300 dark:focus:border-gray-700 dark:hover:bg-gray-900 dark:text-gray-400",
    },
};

const size = {
    xs: "h-8 w-8",
    sm: "h-9 w-9",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-14 w-14",
};

const icon = "m-auto group-data-[state=on]:scale-75 group-data-[state=on]:opacity-0";

const iconStateOn =
    "absolute inset-0 m-auto scale-75 opacity-0 transition duration-200 group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100";

const iconSize = {
    xs: "h-[1.125rem] w-[1.125rem]",
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-10 w-10",
};

export { root, size, icon, iconSize, iconStateOn };
