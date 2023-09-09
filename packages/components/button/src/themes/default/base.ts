const base = {
    layout: "group relative before:absolute before:inset-0 before:rounded-[--btn-border-radius] before:transition before:duration-300 active:before:scale-95 disabled:cursor-not-allowed disabled:active:before:scale-100",
    appearances: {
        light: "disabled:before:bg-gray-100 disabled:text-gray-950/40",
        dark: "disabled:before:bg-gray-900 disabled:text-white/30",
        both: "disabled:before:bg-gray-100 disabled:text-gray-950/30 dark:disabled:before:bg-gray-900 dark:disabled:text-white/30",
    },
};
const label = "relative";

const sizes = {
    xs: "text-sm h-8 px-3",
    sm: "text-sm h-9 px-4",
    md: "text-base h-10 px-5",
    lg: "text-base h-12 px-6",
    xl: "text-base h-14 px-7",
};

export { base, label, sizes };
