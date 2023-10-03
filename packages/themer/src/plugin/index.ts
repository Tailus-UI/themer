import plugin from "tailwindcss/plugin";
import { background, borderColors, padding, radius } from "./../config/preconfigs";
import getShadows from "./shadow";
import type { Config } from "./types";
import { setAccordionConfig, setAlertConfig, setAnnonceConfig, setAvatarConfig } from "../config";

export const themer = plugin.withOptions(
    function (options: Config) {
        return function ({ addComponents, addBase, matchUtilities, theme }) {
            const config = {
                appearance: options.appearance || "both", // light | dark | both
                radius: options.radius || "smoothest", // boxy | sharp | smooth | smoothest
                shadow: {
                    size: options.shadow.size || "xl", // none | default | sm | md | lg | xl | xxl
                    opacity: options.shadow.opacity || 10, // 0 - 100
                },
                border: options.border || "light", // lighter | light | dark | darker | darkest
                background: options.background || "lighter", // light | lighter | hight | higher
                padding: options.padding || "larger", // small | medium | large | larger | largest
                components: {
                    accordion: setAccordionConfig(options.components.accordion),
                    alert: setAlertConfig(options.components.alert),
                    annonce: setAnnonceConfig(options.components.annonce),
                    avatar: setAvatarConfig(options.components.avatar),
                },
            };
            addBase({
                ":root": {
                    //Accordion
                    "--accordion-border-radius": theme(
                        `borderRadius.${
                            config.components.accordion.rounded ?? radius[config.radius].accordion
                        }`
                    ),
                    "--accordion-ghost-light-bg": theme(
                        `colors.gray.${
                            config.components.accordion.ghostBg ??
                            background[options.background].accordion.ghost
                        }`
                    ),
                    "--accordion-soft-light-bg": theme(
                        `colors.gray.${
                            config.components.accordion.softBg ??
                            background[options.background].accordion.soft
                        }`
                    ),
                    "--accordion-ghost-dark-bg": theme(
                        `colors.gray.${
                            config.components.accordion.dark.ghostBg ??
                            background[options.background].dark.accordion.ghost
                        }`
                    ),
                    "--accordion-soft-dark-bg": theme(
                        `colors.gray.${
                            config.components.accordion.dark.softBg ??
                            background[options.background].dark.accordion.soft
                        }`
                    ),
                    "--accordion-dark-bg": theme(
                        `colors.gray.${
                            config.components.accordion.dark.elevatedBg ??
                            background[options.background].dark.accordion.elevated
                        }`
                    ),
                    "--accordion-shadow":
                        getShadows("accordion")[config.components.accordion.shadow.size] ??
                        getShadows("accordion")[config.shadow.size],
                    "--accordion-shadow-opacity": `${
                        config.components.accordion.shadow.opacity ?? config.shadow.opacity
                    }%`,

                    //Alert
                    "--alert-border-radius": theme(
                        `borderRadius.${
                            config.components.alert.rounded ?? radius[options.radius].alert
                        }`
                    ),
                    "--alert-shadow":
                        getShadows("alert")[
                            config.components.alert.shadow.size ?? config.shadow.size
                        ],
                    "--alert-shadow-opacity": `${
                        config.components.alert.shadow.opacity ?? config.shadow.opacity
                    }%`,

                    //Annonce
                    "--annonce-border-radius": theme(
                        `borderRadius.${
                            config.components.annonce.rounded ?? radius[options.radius].annonce
                        }`
                    ),

                    // Avatar
                    "--avatar-border-radius": theme(
                        `borderRadius.${
                            config.components.avatar.rounded ?? radius[options.radius].avatar
                        }`
                    ),
                    "--avatar-status-position": theme(
                        `spacing.${config.components.avatar.statusInset ?? "px"}`
                    ),

                    // Badge
                    "--badge-border-radius": theme(`borderRadius.${radius[options.radius].badge}`),

                    // Button
                    "--btn-border-radius": theme(`borderRadius.${radius[options.radius].button}`),
                    "--btn-border-width": "1.5px",

                    // Card
                    "--card-border-radius": theme(`borderRadius.${radius[options.radius].card}`),
                    "--card-shadow": getShadows("card")[config.shadow.size],
                    "--card-shadow-opacity": `${config.shadow.opacity}%`,
                    "--card-padding": theme(`spacing.${padding[options.padding].card}`),
                    "--card-light-bg": theme(`colors.gray.${background[options.background].card}`),
                    "--card-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.card}`
                    ),

                    // Menu
                    "--menu-border-radius": theme(`borderRadius.${radius[options.radius].menu}`),
                    "--menu-light-bg-opacity": "90%",
                    "--menu-dark-bg-opacity": theme("50%"),
                    "--menu-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.menu}`
                    ),
                    "--menu-shadow": getShadows("menu")[config.shadow.size],
                    "--menu-shadow-opacity": `${config.shadow.opacity}%`,
                    "--menu-light-backdrop-blur": "2rem",
                    "--menu-dark-backdrop-blur": "2rem",
                    "--menu-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].menu}`
                    ),
                    "--menu-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.menu}`
                    ),

                    // Feedback
                    "--feedback-shadow": getShadows("feedback")[config.shadow.size],
                    "--feedback-shadow-opacity": `${config.shadow.opacity}%`,
                    "--feedback-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.feedback}`
                    ),
                    "--feedback-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].feedback}`
                    ),
                    "--feedback-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.feedback}`
                    ),

                    // Flag
                    "--flag-border-radius": theme(`borderRadius.${radius[options.radius].flag}`),
                    "--flag-padding": theme(`spacing.${padding[options.padding].flag}`),

                    // Field
                    "--field-border-radius": theme(`borderRadius.${radius[options.radius].field}`),
                    "--field-light-bg": theme(
                        `colors.gray.${background[options.background].field}`
                    ),
                    "--field-light-focus-bg": theme(
                        `colors.gray.${background[options.background].fieldFocus}`
                    ),
                    "--field-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.field}`
                    ),
                    "--field-dark-focus-bg": theme(
                        `colors.gray.${background[options.background].dark.fieldFocus}`
                    ),
                    "--field-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].field}`
                    ),
                    "--field-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.field}`
                    ),

                    // Popover
                    "--popover-border-radius": theme(
                        `borderRadius.${radius[options.radius].popover}`
                    ),
                    "--popover-padding": theme(`spacing.${padding[options.padding].popover}`),

                    // Switch
                    "--switch-border-radius": theme(
                        `borderRadius.${radius[options.radius].switch}`
                    ),

                    // Tabs
                    "--tabs-border-radius": theme(
                        `borderRadius.${radius[options.radius].tabs.default}`
                    ),
                    "--tabs-light-bg": theme(`colors.gray.${background[options.background].tabs}`),
                    "--tabs-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.tabs.list}`
                    ),
                    "--tabs-indicator-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.tabs.indicator}`
                    ),
                    "--tabs-bottom-indicator-trigger-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.tabs.trigger}`
                    ),
                    "--tabs-bottom-indicator-light-bg": theme("colors.primary.600"),
                    "--tabs-bottom-indicator-dark-bg": theme("colors.primary.400"),
                    "--tabs-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].tabs}`
                    ),
                    "--tabs-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.tabs}`
                    ),
                    "--tabs-soft-border-radius": theme(
                        `borderRadius.${radius[options.radius].tabs.soft}`
                    ),
                    "--tabs-bottom-indicator-border-radius": theme(
                        `borderRadius.${radius[options.radius].tabs.bottomIndicator}`
                    ),

                    // Tooltip
                    "--tooltip-border-radius": theme(
                        `borderRadius.${radius[options.radius].tooltip}`
                    ),

                    // Toast
                    "--toast-border-radius": theme(`borderRadius.${radius[options.radius].toast}`),

                    // Separator
                    "--separator-light-color": theme(
                        `colors.gray.${borderColors[config.border].ui}`
                    ),
                    "--separator-dark-color": theme(
                        `colors.gray.${borderColors[config.border].dark.ui}`
                    ),

                    // UI
                    "--ui-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].ui}`
                    ),
                    "--ui-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.ui}`
                    ),
                    "--ui-light-border-hover-color": theme(
                        `colors.gray.${borderColors[config.border].hover}`
                    ),
                    "--ui-dark-border-hover-color": theme(
                        `colors.gray.${borderColors[config.border].dark.hover}`
                    ),

                    // Select
                    "--select-dark-bg": theme("colors.gray.950"),
                },
            });
            addComponents({
                ".accordion-shadow": {
                    boxShadow: `var(--accordion-shadow)`,
                },
                ".alert-shadow": {
                    boxShadow: `var(--alert-shadow)`,
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
