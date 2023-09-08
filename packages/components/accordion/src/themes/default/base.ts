const item = "overflow-hidden transition-all duration-300 data-[state=open]:z-10";

const trigger = {
    parent: {
        base: "group flex w-full items-center justify-between py-4 text-lg",
        appearances: {
            light: "text-gray-900",
            dark: "text-white",
            both: "text-gray-900 dark:text-white",
        },
    },
    content: "flex items-center gap-4",
    icon: {
        base: "h-[1.125rem] w-[1.125rem]",
        motion: "transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180",
    },
};

const content = {
    base: "overflow-hidden",
    motion: "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

export { item, trigger, content };
