import { lilconfig, lilconfigSync } from "lilconfig";
const loadESMDefault = (p) => import(p).then((x) => x.default);

const places: string[] = [
    "tailwind.config.js",
    "tailwind.config.ts",
    "tailwind.js",
    "tailwind.ts",
    "tailwind.config.cjs",
    "tailwind.config.mjs",
    "tailwind.config.json",
    "tailus.config.js",
    "tailus.config.ts",
    "tailus.js",
    "tailus.ts",
    "tailus.config.cjs",
    "tailus.config.mjs",
    "tailus.config.json",
];

const options = {
    stopDir: "/Users/you/some/dir",
    searchPlaces: places,
    ignoreEmptySearchPlaces: true,
    loaders: {
        ".mjs": loadESMDefault,
        ".cjs": loadESMDefault,
        ".js": loadESMDefault,
        ".ts": loadESMDefault,
    },
};

async function loadConfig() {
    const result = await lilconfigSync("config", options).search();
    console.log(result); // your config
}

loadConfig();
