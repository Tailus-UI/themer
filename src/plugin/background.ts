import plugin from "tailwindcss/plugin";

const baseShades = {
    "--ui-border-color": "rgb(var(--colors-gray-200))",
    "--ui-bg": 'theme("colors.white/var(--ui-bg-opacity)")',
    "--ui-soft-bg": "rgb(var(--colors-gray-100))",
    "--input-bg": "rgb(var(--colors-gray-200))",
    "--overlay-bg": "rgb(var(--colors-gray-950)/0.5)",

    "@media(prefers-color-scheme:dark)": {
        "--input-bg": "var(--ui-bg)",
        "--ui-fancy-bg": "rgb(var(--colors-gray-950))",
    },
};

export const background = plugin(({ addBase, theme, addComponents }) => {
    addBase({
        '[data-background="900"]': {
            ...baseShades,
            "@media(prefers-color-scheme:dark)": {
                "--ui-border-color": "rgb(var(--colors-gray-800))",
                "--ui-bg": "rgb(var(--colors-gray-900))",
                "--ui-soft-bg": "rgb(var(--colors-gray-800))",
            },
        },
        '[data-background="800"]': {
            ...baseShades,
            "@media(prefers-color-scheme:dark)": {
                "--ui-border-color": "rgb(var(--colors-gray-700))",
                "--ui-bg": "rgb(var(--colors-gray-800))",
                "--ui-soft-bg": "rgb(var(--colors-gray-900))",
                "--ui-fancy-bg": "rgb(var(--colors-gray-925))",
            },
        },
        '[data-background="950"]': {
            ...baseShades,
            "@media(prefers-color-scheme:dark)": {
                "--ui-border-color": "rgb(var(--colors-gray-800))",
                "--ui-bg": "rgb(var(--colors-gray-950))",
                "--ui-soft-bg": "rgb(var(--colors-gray-900))",
            },
        },
        '[data-background="925"]': {
            ...baseShades,
            "@media(prefers-color-scheme:dark)": {
                "--ui-border-color": "rgb(var(--colors-gray-800))",
                "--ui-bg": "rgb(var(--colors-gray-925))",
                "--ui-soft-bg": "rgb(var(--colors-gray-800))",
            },
        },
        '[data-background="glassy"]': {
            ...baseShades,
            "--ui-bg-opacity": "0.50",
            "--ui-bd-blur": theme("blur[2xl]"),
            "--ui-bg": theme("colors.white/var(--ui-bg-opacity)"),
            "@media(prefers-color-scheme:dark)": {
                "--ui-border-color": "rgb(var(--colors-gray-50)/0.10)",
                "--ui-bg": "rgb(var(--colors-gray-700)/var(--ui-bg-opacity))",
                "--ui-soft-bg": "rgb(var(--colors-gray-800)/0.95)",
                "--ui-fancy-bg": "rgb(var(--colors-gray-950)/0.75)",
            },
        },
    });
    addComponents({
        ".border, .border-t, .border-b, .border-l, .border-r, .border-y, .border-x": {
            borderColor: "var(--ui-border-color)",
        },
        ".feedback-bg": {
            background: "var(--ui-bg)",
            "@apply backdrop-blur-[var(--ui-bd-blur)]": {},
        },
        ".fancy-border": {
            "@apply border dark:border-gray-950 !outline !outline-1 -outline-offset-2 !outline-white/5 dark:!outline-white/5":
                {},
        },
    });
});
