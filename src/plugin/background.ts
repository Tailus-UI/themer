import plugin from "tailwindcss/plugin";

const baseShades = {
    "--ui-border-color": "rgb(var(--colors-gray-200))",
    "--ui-bg": 'theme("colors.white/var(--ui-bg-opacity)")',
    "--ui-soft-bg": "rgb(var(--colors-gray-100))",
    "--input-bg": "rgb(var(--colors-gray-200))",
    "--ui-bg-opacity": "1",

    "@apply [--overlay-bg:rgb(var(--colors-gray-950)/0.25)] dark:[--overlay-bg:rgb(var(--colors-gray-950)/0.5)] dark:[--input-bg:rgb(var(--ui-bg))] dark:[--ui-bg:rgb(var(--colors-gray-900))] dark:[--ui-fancy-bg:rgb(var(--colors-gray-950))]":
        {},
};

export const background = plugin(
    ({ addBase, theme, addComponents }) => {
        addBase({
            '[data-background="800"]': {
                ...baseShades,
                "@apply dark:[--ui-border-color:rgb(var(--colors-gray-700))] dark:[--ui-bg:rgb(var(--colors-gray-800))] dark:[--ui-soft-bg:rgb(var(--colors-gray-900))] dark:[--ui-fancy-bg:rgb(var(--colors-gray-925))] dark:[--ui-fancy-border-color:rgb(var(--colors-gray-700))]":
                    {},
            },

            '[data-background="900"]': {
                ...baseShades,
                "@apply dark:[--ui-border-color:rgb(var(--colors-gray-800))] dark:[--ui-bg:rgb(var(--colors-gray-900))] dark:[--ui-soft-bg:rgb(var(--colors-gray-800))] dark:[--ui-fancy-border-color:rgb(var(--colors-gray-800))]":
                    {},
            },

            '[data-background="925"]': {
                ...baseShades,
                "@apply dark:[--ui-border-color:rgb(var(--colors-gray-800))] dark:[--ui-bg:rgb(var(--colors-gray-925))] dark:[--ui-soft-bg:rgb(var(--colors-gray-800))] dark:[--ui-fancy-border-color:rgb(var(--colors-gray-800)/0.75)]":
                    {},
            },

            '[data-background="glassy"]': {
                ...baseShades,
                "--ui-bd-blur": theme("blur[2xl]"),
                "@apply [--ui-bg-opacity:0.75] [--ui-bg:theme(colors.white/var(--ui-bg-opacity))] dark:[--ui-bg-opacity:0.5] dark:[--ui-border-color:rgb(var(--colors-gray-50)/0.1)] dark:[--ui-bg:rgb(var(--colors-gray-700)/var(--ui-bg-opacity))] dark:[--ui-soft-bg:rgb(var(--colors-gray-800)/0.95)] dark:[--ui-fancy-bg:rgb(var(--colors-gray-900))] dark:[--ui-fancy-border-color:rgb(var(--colors-gray-700))]":
                    {},
            },

            '[data-background="950"]': {
                ...baseShades,
                "@apply dark:[--ui-border-color:rgb(var(--colors-gray-800))] dark:[--ui-bg:rgb(var(--colors-gray-950))] dark:[--ui-soft-bg:rgb(var(--colors-gray-800))] dark:[--ui-fancy-border-color:rgb(var(--colors-gray-500)/0.15)]":
                    {},
            },
        });
        addComponents({
            ".feedback-bg": {
                background: "var(--ui-bg)",
                "@apply backdrop-blur-[var(--ui-bd-blur)]": {},
            },
            ".fancy-border": {
                "@apply border dark:border-gray-950 !outline outline-1 -outline-offset-2 !outline-white/10 dark:!outline-gray-500/15":
                    {},
            },
        });
    },
    {
        theme: {
            extend: {
                borderColor: {
                    DEFAULT: "var(--ui-border-color)",
                },
                textColor: {
                    DEFAULT: "var(--body-text-color)",
                },
                backgroundColor: {
                    DEFAULT: "theme(colors.transparent)",
                },
            },
        },
    },
);
