import config from "./../../slider.config";

const root =
    "relative group flex items-center select-none touch-none max-w-sm w-[22rem] h-5 data-[disabled]:cursor-not-allowed";
const baseTrack = {
    base: "relative grow rounded-full h-[3px]",
    appearances: {
        light: "bg-gray-950/10  group-data-[disabled]:bg-gray-200",
        dark: "bg-white/10 group-data-[disabled]:bg-gray-800",
        both: "bg-gray-950/10 group-data-[disabled]:bg-gray-200 dark:bg-white/10 dark:group-data-[disabled]:bg-gray-800",
    },
};

const baseRange = {
    base: "absolute rounded-full h-full bg-primary-500",
    appearances: {
        light: "group-data-[disabled]:bg-gray-200",
        dark: "group-data-[disabled]:bg-gray-800",
        both: "group-data-[disabled]:bg-gray-200 dark:group-data-[disabled]:bg-gray-800",
    },
};

const baseThumb = {
    base: "block w-4 h-4 active:scale-110 transition duration-300 shadow-lg shadow-gray-950/20 rounded-full focus:outline-none focus:ring-[6px]",
    appearances: {
        light: "bg-primary-500 group-data-[disabled]:bg-gray-300 hover:bg-primary-600 focus:ring-gray-950/5",
        dark: "bg-white group-data-[disabled]:bg-gray-700 hover:bg-white focus:ring-white/20",
        both: "bg-primary-500 group-data-[disabled]:bg-gray-300 hover:bg-primary-600 dark:hover:bg-white dark:bg-white dark:group-data-[disabled]:bg-gray-700 focus:ring-gray-950/5 dark:focus:ring-white/20",
    },
};

const track = baseTrack.base + " " + baseTrack.appearances[config.appearance];
const range = baseRange.base + " " + baseRange.appearances[config.appearance];
const thumb = baseThumb.base + " " + baseThumb.appearances[config.appearance];

export { root, track, range, thumb };
