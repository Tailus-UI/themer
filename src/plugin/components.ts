import plugin from "tailwindcss/plugin";
import getShadows from "./shadow";

export const components = plugin(({ addBase, theme, addComponents, matchUtilities }) => {
    addBase({
        ":root": {
            "--overlay-backdrop-blur": theme("blur[none]"),
            "--card-padding": theme("spacing[6]"),
            "--accordion-padding": "1rem",
            "--feedback-padding": "var(--card-padding)",
            "--toast-padding": theme("spacing[4]"),

            "--display-text-color": 'theme("colors.gray.950")',
            "--title-text-color": "var(--display-text-color)",
            "--caption-text-color": 'theme("colors.gray.500")',
            "--body-text-color": 'theme("colors.gray.700")',
            "--placeholder-text-color": 'theme("colors.gray.400")',

            "--area-primary-stroke": 'theme("colors.primary.600")',
            "--area-secondary-stroke": 'theme("colors.secondary.600")',
            "--area-accent-stroke": 'theme("colors.accent.600")',
            "--area-gray-stroke": 'theme("colors.gray.600")',
            "--area-neutral-stroke": 'theme("colors.gray.950")',

            "--card-shadow-opacity": theme("opacity[5]"),
            "--feedback-shadow-opacity": theme("opacity[5]"),
            "--menu-shadow-opacity": theme("opacity[5]"),
            "--accordion-shadow-opacity": theme("opacity[5]"),

            "@apply dark:[--body-text-color:theme(colors.gray.300)] dark:[--area-neutral-stroke:theme('colors.white')] dark:[--title-text-color:theme('colors.white')] dark:[--display-text-color:theme('colors.white')] dark:[--placeholder-text-color:theme('colors.gray.600')]":
                {},
        },
    });
    addComponents({
        ".accordion-shadow": {
            boxShadow: getShadows("accordion").md,
        },
        ".card-shadow": {
            boxShadow: getShadows("card").md,
        },
        ".feedback-shadow": {
            boxShadow: getShadows("feedback").lg,
        },
        ".menu-shadow": {
            boxShadow: getShadows("menu").lg,
        },
    });
    matchUtilities({
        perspective: (value) => ({
            perspective: value,
        }),
    });
}, {});
