const root = {
    base: "block w-fit flex gap-2 justify-between items-center pr-3 p-1.5 transition duration-200 rounded-[--annonce-border-radius] border",
    appearances: {
        light: "border-gray-950/10 hover:border-gray-950/20",
        dark: "border-white/10 hover:border-white/20",
        both: "border-gray-950/10 hover:border-gray-950/20 dark:border-white/10 dark:hover:border-white/20",
    },
};

const concern = "block text-sm px-2 py-0.5 rounded-[calc(var(--annonce-border-radius)-0.375rem)]";

const message = {
    base: "text-sm font-medium block",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

export { root, concern, message };
