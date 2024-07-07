import plugin from "tailwindcss/plugin";

export const shade = plugin(
    ({ addBase, theme, addComponents }) => {
        addBase({
            ":root": {
                "--ui-border-color": "theme('colors.gray.200')",
                "--ui-bg": 'theme("colors.white/var(--ui-bg-opacity)")',
                "--ui-soft-bg": "theme('colors.gray.100')",
                "--input-bg": "theme('colors.gray.200')",
                "--ui-bg-opacity": "1",
                "--overlay-bg": "theme(colors.gray.950/0.25)",

                "@apply  dark:[--overlay-bg:theme(colors.gray.950/0.5)] dark:[--input-bg:var(--ui-bg)] dark:[--ui-bg:theme(colors.gray.900)] dark:[--ui-fancy-bg:theme(colors.gray.950)]":
                    {},
            },

            '[data-shade="800"]': {
                "@apply dark:[--ui-border-color:theme(colors.gray.700)] dark:[--ui-bg:theme(colors.gray.800)] dark:[--ui-soft-bg:theme(colors.gray.900)] dark:[--ui-fancy-bg:theme(colors.gray.925)] dark:[--ui-fancy-border-color:theme(colors.gray.700)]":
                    {},
            },

            '[data-shade="900"]': {
                "@apply dark:[--ui-border-color:theme(colors.gray.800)] dark:[--ui-bg:theme(colors.gray.900)] dark:[--ui-soft-bg:theme(colors.gray.800)] dark:[--ui-fancy-border-color:theme(colors.gray.800)]":
                    {},
            },

            '[data-shade="925"]': {
                "@apply dark:[--ui-border-color:theme(colors.gray.800)] dark:[--ui-bg:theme(colors.gray.925)] dark:[--ui-soft-bg:theme(colors.gray.800)] dark:[--ui-fancy-border-color:theme(colors.gray.800/0.75)]":
                    {},
            },

            '[data-shade="glassy"]': {
                "--ui-bd-blur": theme("blur[2xl]"),
                "--ui-bg-opacity": "0.5",
                "--ui-bg": theme("colors.white/var(--ui-bg-opacity)"),

                "@apply dark:[--ui-border-color:theme(colors.gray.50/0.1)] dark:[--ui-bg:theme(colors.gray.700/var(--ui-bg-opacity))] dark:[--ui-soft-bg:theme(colors.gray.600/0.50)] dark:[--ui-fancy-bg:theme(colors.gray.900)] dark:[--ui-fancy-border-color:theme(colors.gray.700)]":
                    {},
            },

            '[data-shade="950"]': {
                "@apply dark:[--ui-border-color:theme(colors.gray.800)] dark:[--ui-bg:theme(colors.gray.950)] dark:[--ui-soft-bg:theme(colors.gray.800)] dark:[--ui-fancy-border-color:theme(colors.gray.500/0.15)]":
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
