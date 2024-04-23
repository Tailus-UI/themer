import plugin from "tailwindcss/plugin";

export const componentsPlugin = plugin(({ addBase, addComponents }) => {
    addBase({
        ":root": {
            "--ui-border-color": "theme(colors.gray.200)",
            "--form-border-color": "theme(colors.gray.300)",
            "--feedback-border-color": "var(--ui-border-color)",
            "--vtooltip-border-color": ["theme(colors.gray.700)", "var(--ui-border-color)"],
            "--ui-bg": "theme(colors.white)",
            "--ui-soft-bg": "theme(colors.gray.100)",
            "--accordion-bg": "theme(colors.gray.100)",
            "--input-bg": "theme(colors.gray.200)",
            "--tabs-bg": "var(--input-bg)",
            "--feedback-bg": 'theme("colors.white/var(--feedback-bg-opacity)")',
            "--overlay-bg": 'theme("colors.gray.800/0.5")',
            "--ui-bd-blur": "theme(blur[2xl])",
            "--feedback-bg-opacity": "theme(opacity[100])",
            "--overlay-backdrop-blur": "theme(blur[none])",
            "--card-radius": "theme(borderRadius.xl)",
            "--accordion-radius": "var(--card-radius)",
            "--feedback-radius": "var(--card-radius)",
            "--annonce-radius": "2rem",
            "--btn-radius": "0.5rem",
            "--badge-radius": "var(--btn-radius)",
            "--menu-radius": "1rem",
            "--calendar-radius": "var(--btn-radius)",
            "--tabs-radius": "var(--btn-radius)",
            "--avatar-radius": "9999px",
            "--input-radius": "var(--btn-radius)",
            "--card-padding": "theme(spacing[6])",
            "--accordion-padding": "1rem",
            "--feedback-padding": "var(--card-padding)",
            "--toast-padding": "theme(spacing[4])",
            "--caption-text-color": "theme(colors.gray.500)",
            "--body-text-color": "theme(colors.gray.600)",
            "--placeholder-text-color": "theme(colors.gray.400)",
            "--area-primary-stroke": "theme(colors.primary.600)",
            "--area-secondary-stroke": "theme(colors.secondary.600)",
            "--area-accent-stroke": "theme(colors.accent.600)",
            "--area-gray-stroke": "theme(colors.gray.600)",
            "--area-neutral-stroke": "theme(colors.gray.950)",
        },
        body: {
            "@apply dark:bg-gray-950": {},
            color: `var(--body-text-color)`,
        },
    });
    addComponents({
        ".accordion-shadow": {
            boxShadow: `var(--accordion-shadow)`,
        },
        ".card-shadow": {
            boxShadow: `var(--card-shadow)`,
        },
        ".feedback-shadow": {
            boxShadow: `var(--feedback-shadow)`,
        },
        ".menu-shadow": {
            boxShadow: `var(--menu-shadow)`,
        },
        ".border, .border-t, .border-b, .border-l, .border-r, .border-y, .border-x": {
            borderColor: "var(--ui-border-color)",
        },
        ".feedback-bg": {
            "@apply bg-[var(--feedback-bg)] backdrop-blur-[var(--ui-bd-blur)]": {},
        },
        ".fancy-border": {
            "@apply border dark:border-gray-950 !outline !outline-1 -outline-offset-2 !outline-white/5 dark:!outline-white/5":
                {},
        },
    });
});
