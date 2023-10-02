import plugin from "tailwindcss/plugin";
import { background, borderColors, padding, radius } from "./../config/preconfigs";
import getShadows from "./shadow";
import type { Config } from "./types";

export const themer = plugin.withOptions(
    function (options: Config) {
        return function ({ addComponents, addBase, matchUtilities, theme }) {
            const config = {
                appearance: options.appearance || "both", // light | dark | both
                radius: options.radius || "smoothest", // boxy | sharp | smooth | smoothest
                shadow: {
                    size: options.shadow.size || "xl", // none | default | sm | md | lg | xl | xxl
                    opacity: options.shadow.opacity || "10", // 0 - 100
                },
                border: options.border || "light", // lighter | light | dark | darker | darkest
                background: options.background || "lighter", // light | lighter | hight | higher
                padding: options.padding || "larger", // small | medium | large | larger | largest
            };
            addBase({
                ":root": {
                    // Border Colors
                    "--ui-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].ui}`
                    ),
                    "--menu-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].menu}`
                    ),
                    "--tabs-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].tabs}`
                    ),
                    "--feedback-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].feedback}`
                    ),
                    "--separator-light-color": theme(
                        `colors.gray.${borderColors[config.border].ui}`
                    ),
                    "--field-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].field}`
                    ),
                    "--ui-light-border-hover-color": theme(
                        `colors.gray.${borderColors[config.border].hover}`
                    ),
                    "--ui-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.ui}`
                    ),
                    "--menu-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.menu}`
                    ),
                    "--tabs-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.tabs}`
                    ),
                    "--feedback-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.feedback}`
                    ),
                    "--separator-dark-color": theme(
                        `colors.gray.${borderColors[config.border].dark.ui}`
                    ),
                    "--field-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.field}`
                    ),
                    "--ui-dark-border-hover-color": theme(
                        `colors.gray.${borderColors[config.border].dark.hover}`
                    ),

                    // Border radius

                    "--accordion-border-radius": theme(
                        `borderRadius.${radius[config.radius].accordion}`
                    ),

                    "--alert-border-radius": theme(`borderRadius.${radius[options.radius].alert}`),
                    "--annonce-border-radius": theme(
                        `borderRadius.${radius[options.radius].annonce}`
                    ),
                    "--avatar-border-radius": theme(
                        `borderRadius.${radius[options.radius].avatar}`
                    ),
                    "--badge-border-radius": theme(`borderRadius.${radius[options.radius].badge}`),
                    "--btn-border-radius": theme(`borderRadius.${radius[options.radius].button}`),
                    "--card-border-radius": theme(`borderRadius.${radius[options.radius].card}`),
                    "--menu-border-radius": theme(`borderRadius.${radius[options.radius].menu}`),
                    "--flag-border-radius": theme(`borderRadius.${radius[options.radius].flag}`),
                    "--field-border-radius": theme(`borderRadius.${radius[options.radius].field}`),
                    "--popover-border-radius": theme(
                        `borderRadius.${radius[options.radius].popover}`
                    ),
                    "--toast-border-radius": theme(`borderRadius.${radius[options.radius].toast}`),
                    "--switch-border-radius": theme(
                        `borderRadius.${radius[options.radius].switch}`
                    ),
                    "--tabs-border-radius": theme(
                        `borderRadius.${radius[options.radius].tabs.default}`
                    ),
                    "--tabs-soft-border-radius": theme(
                        `borderRadius.${radius[options.radius].tabs.soft}`
                    ),
                    "--tabs-bottom-indicator-border-radius": theme(
                        `borderRadius.${radius[options.radius].tabs.bottomIndicator}`
                    ),
                    "--tooltip-border-radius": theme(
                        `borderRadius.${radius[options.radius].tooltip}`
                    ),

                    // Padding
                    "--card-padding": theme(`spacing.${padding[options.padding].card}`),
                    "--flag-padding": theme(`spacing.${padding[options.padding].flag}`),
                    "--popover-padding": theme(`spacing.${padding[options.padding].popover}`),

                    // Background
                    "--accordion-ghost-light-bg": theme(
                        `colors.gray.${background[options.background].accordion.ghost}`
                    ),
                    "--accordion-soft-light-bg": theme(
                        `colors.gray.${background[options.background].accordion.soft}`
                    ),
                    "--accordion-ghost-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.accordion.ghost}`
                    ),
                    "--accordion-soft-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.accordion.soft}`
                    ),
                    "--accordion-elevated-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.accordion.elevated}`
                    ),

                    "--card-light-bg": theme(`colors.gray.${background[options.background].card}`),
                    "--tabs-light-bg": theme(`colors.gray.${background[options.background].tabs}`),
                    "--field-light-bg": theme(
                        `colors.gray.${background[options.background].field}`
                    ),
                    "--field-light-focus-bg": theme(
                        `colors.gray.${background[options.background].fieldFocus}`
                    ),

                    "--card-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.card}`
                    ),
                    "--tabs-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.tabs.list}`
                    ),
                    "--field-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.field}`
                    ),
                    "--field-dark-focus-bg": theme(
                        `colors.gray.${background[options.background].dark.fieldFocus}`
                    ),
                    "--menu-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.menu}`
                    ),
                    "--feedback-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.feedback}`
                    ),
                    "--tabs-indicator-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.tabs.indicator}`
                    ),
                    "--tabs-bottom-indicator-trigger-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.tabs.trigger}`
                    ),
                    "--tabs-bottom-indicator-light-bg": theme("colors.primary.600"),
                    "--tabs-bottom-indicator-dark-bg": theme("colors.primary.400"),

                    // Shadow
                    "--alert-shadow": getShadows("alert")[config.shadow.size],
                    "--card-shadow": getShadows("card")[config.shadow.size],
                    "--feedback-shadow": getShadows("feedback")[config.shadow.size],
                    "--menu-shadow": getShadows("menu")[config.shadow.size],
                    "--accordion-shadow": getShadows("accordion")[config.shadow.size],

                    "--card-shadow-opacity": `${config.shadow.opacity}%`,
                    "--alert-shadow-opacity": `${config.shadow.opacity}%`,
                    "--feedback-shadow-opacity": `${config.shadow.opacity}%`,
                    "--menu-shadow-opacity": `${config.shadow.opacity}%`,
                    "--accordion-shadow-opacity": `${config.shadow.opacity}%`,

                    // Specific
                    "--btn-border-width": "1.5px",
                    "--avatar-status-position": theme("spacing.px"),

                    "--menu-light-bg-opacity": "90%",
                    "--menu-dark-bg-opacity": theme("50%"),
                    "--menu-light-backdrop-blur": "2rem",
                    "--menu-dark-backdrop-blur": "2rem",

                    "--select-dark-bg": theme("colors.gray.950"),
                },
            });
            addComponents({
                ".card-shadow": {
                    boxShadow: `var(--card-shadow)`,
                },
                ".feedback-shadow": {
                    boxShadow: `var(--feedback-shadow)`,
                },
                ".menu-shadow": {
                    boxShadow: `var(--menu-shadow)`,
                },
                ".alert-shadow": {
                    boxShadow: `var(--alert-shadow)`,
                },
                ".accordion-shadow": {
                    boxShadow: `var(--accordion-shadow)`,
                },
            });
            matchUtilities({
                perspective: (value) => ({
                    perspective: value,
                }),
            });
        };
    },
    function (options) {
        return {
            preconfigs: {
                background,
                borderColors,
                padding,
                radius,
            },
        };
    }
);
