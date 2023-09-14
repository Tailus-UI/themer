const item = {
    base: "h-5 w-5 peer group border group cursor-pointer rounded-full outline-none active:ring-4 transition duration-150 data-[state=checked]:bg-primary-600 data-[state=checked]:border-transparent data-[disabled]:bg-transparent",
    appearances: {
        light: "bg-white border-gray-300 focus:border-primary-600 active:ring-primary-600/10 data-[state=checked]:focus:border-gray-950/30 data-[disabled]:border-gray-200",
        dark: "bg-gray-800/75 border-gray-700 data-[state=checked]:focus:border-white/30 data-[state=checked]:shadow-gray-950/50 data-[disabled]:border-gray-900",
        both: "bg-white border-gray-300 focus:border-primary-600 active:ring-primary-600/10 data-[state=checked]:focus:border-gray-950/30 data-[disabled]:border-gray-200 dark:bg-gray-800/75 dark:border-gray-700 dark:data-[state=checked]:focus:border-white/30 dark:data-[state=checked]:shadow-gray-950/50 dark:data-[disabled]:border-gray-900",
    },
};

const shadow = {
    base: "shadow-inner data-[state=checked]:shadow-white/20 data-[disabled]:shadow-none",
    appearances: {
        light: "shadow-gray-950/10 focus:shadow-gray-950/30",
        dark: "shadow-white/5",
        both: "shadow-gray-950/10 focus:shadow-gray-950/30 dark:shadow-white/5",
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
    base: "after:scale-75 group-data-[state=checked]:after:scale-100 after:transition after:duration-150 relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-full after:bg-white",
    appearances: {
        light: "group-data-[disabled]:after:bg-gray-300",
        dark: "group-data-[disabled]:after:bg-gray-700",
        both: "group-data-[disabled]:after:bg-gray-300 dark:group-data-[disabled]:after:bg-gray-700",
    },
};

export { item, shadow, label, indicator };
