import plugin from "tailwindcss/plugin";

export const rounded = plugin(({ addBase, theme }) => {
    addBase({
        ":root": {
            "--card-radius": theme("borderRadius.xl"),
            "--feedback-radius": "var(--card-radius)",
            "--accordion-radius": "var(--card-radius)",
            "--menu-radius": "var(--card-radius)",

            "--btn-radius": theme("borderRadius.lg"),
            "--badge-radius": "var(--btn-radius)",
            "--calendar-radius": "var(--btn-radius)",
            "--tabs-radius": "var(--btn-radius)",
            "--input-radius": "var(--btn-radius)",

            "--avatar-radius": theme("borderRadius.full"),
            "--annonce-radius": theme("borderRadius.full"),
        },
        '[data-rounded="none"]': {
            "--card-radius": theme("borderRadius.none"),
            "--btn-radius": theme("borderRadius.none"),
            "--annonce-radius": theme("borderRadius.none"),
            "--avatar-radius": theme("borderRadius.none"),
        },
        '[data-rounded="default"]': {
            "--card-radius": theme("borderRadius.default"),
            "--btn-radius": theme("borderRadius.default"),
            "--annonce-radius": theme("borderRadius.default"),
        },
        '[data-rounded="small"]': {
            "--card-radius": theme("borderRadius.sm"),
            "--btn-radius": theme("borderRadius.sm"),
            "--annonce-radius": theme("borderRadius.sm"),
        },
        '[data-rounded="medium"]': {
            "--card-radius": theme("borderRadius.lg"),
            "--btn-radius": theme("borderRadius.md"),
        },
        '[data-rounded="large"]': {
            "--card-radius": theme("borderRadius.xl"),
            "--btn-radius": theme("borderRadius.lg"),
        },
        '[data-rounded="xlarge"]': {
            "--card-radius": theme("borderRadius.xl"),
            "--btn-radius": theme("borderRadius.xl"),
        },
        '[data-rounded="2xlarge"]': {
            "--card-radius": theme("borderRadius.2xl"),
            "--btn-radius": theme("borderRadius.xl"),
        },
        '[data-rounded="3xlarge"]': {
            "--card-radius": theme("borderRadius.3xl"),
            "--btn-radius": theme("borderRadius.3xl"),
            "--input-radius": theme("borderRadius.xl"),
        },
        '[data-rounded="full"]': {
            "--card-radius": theme("borderRadius.3xl"),
            "--btn-radius": theme("borderRadius.full"),
            "--input-radius": theme("borderRadius.xl"),
        },
    });
});
