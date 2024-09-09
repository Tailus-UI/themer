import plugin from "tailwindcss/plugin";
import getShadows from "./shadow";

export const components = plugin(({ addBase, theme, addComponents, matchUtilities }) => {
    addBase({
        ":root": {
            "--overlay-backdrop-blur": theme("blur[none]"),
            "--overlay-backdrop-z": theme("zIndex[40]"),

            "--card-padding": theme("spacing[6]"),
            "--accordion-padding": "1rem",
            "--feedback-padding": "var(--card-padding)",
            "--toast-padding": theme("spacing[4]"),

            "--display-text-color": 'theme("colors.gray.950")',
            "--title-text-color": "var(--display-text-color)",
            "--caption-text-color": 'theme("colors.gray.500")',
            "--body-text-color": 'theme("colors.gray.700")',
            "--placeholder-text-color": 'theme("colors.gray.400")',

            // data visualization colors
            
            "--dv-primary": 'theme("colors.primary.600")',
            "--dv-secondary": 'theme("colors.secondary.600")',
            "--dv-accent": 'theme("colors.accent.600")',
            "--dv-gray": 'theme("colors.gray.600")',
            "--dv-info": 'theme("colors.info.600")',
            "--dv-success": 'theme("colors.success.600")',
            "--dv-danger": 'theme("colors.danger.600")',
            "--dv-warning": 'theme("colors.warning.600")',
            "--dv-neutral": 'theme("colors.gray.950")',

            "--card-shadow-opacity": theme("opacity[5]"),
            "--feedback-shadow-opacity": theme("opacity[5]"),
            "--menu-shadow-opacity": theme("opacity[5]"),
            "--accordion-shadow-opacity": theme("opacity[5]"),

            "@apply dark:[--body-text-color:theme(colors.gray.300)] dark:[--dv-neutral:theme('colors.white')] dark:[--title-text-color:theme('colors.white')] dark:[--display-text-color:theme('colors.white')] dark:[--placeholder-text-color:theme('colors.gray.600')]":
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

        //typography components
        ".text-display": {
            color: "var(--display-text-color)",
        },
        ".text-title": {
            color: "var(--title-text-color)",
        },
        ".text-caption": {
            color: "var(--caption-text-color)",
        },
        ".text-body": {
            color: "var(--body-text-color)",
        },
        ".text-placeholder": {
            color: "var(--placeholder-text-color)",
        },

        //radius components
        ".rounded-card": {
            borderRadius: "var(--card-radius)",
        },

        ".rounded-btn": {
            borderRadius: "var(--btn-radius)",
        },
    });
    matchUtilities({
        perspective: (value) => ({
            perspective: value,
        }),
    });
}, {});
