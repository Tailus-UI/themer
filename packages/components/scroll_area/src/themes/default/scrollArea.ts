import config from "../../scrollarea.config";

const bar = {
    base: "flex touch-none select-none rounded-full p-0.5 transition-colors duration-200 ease-out data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col",
    appearances: {
        light: "hover:bg-gray-950/5",
        dark: "hover:bg-white/10",
        both: "hover:bg-gray-950/5 dark:hover:bg-white/10",
    },
};

const thumb = {
    base: "relative flex-1 rounded-full before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-12 before:w-full before:min-w-12 before:-translate-x-1/2 before:-translate-y-1/2",
    appearances: {
        light: "bg-gray-300",
        dark: "bg-gray-600",
        both: "bg-gray-300 dark:bg-gray-600",
    },
};

const scrollArea = {
    root: "relative flex overflow-hidden",
    bar: {
        horizontal: bar.base + " mx-2 " + bar.appearances[config.appearance],
        vertical: bar.base + " my-2 " + bar.appearances[config.appearance],
    },
    thumb: thumb.base + " " + thumb.appearances[config.appearance],
};

export default scrollArea;
export { scrollArea };
