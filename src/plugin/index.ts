import plugin from "tailwindcss/plugin";
import getShadows from "./shadow";
import type { Config } from "./types";
import defaultConfig, { preconfigs as defaultPreconfigs } from "./default.config";
import setPreconfigs from "./preconfigs";
import { palettePlugin } from "./palette";
import { animationsPlugin } from "./animations";

/**
 * ### Tailus Themer plugin 🪄.
 * @param options : The options of the plugin.
 * @returns The plugin.
 */
const themer = plugin.withOptions(
    (options: Config = {}) => {
        return ({ addComponents, addBase, matchUtilities, theme }) => {
            const preconfigs = setPreconfigs(defaultPreconfigs, options);
            const config = {
                components: {
                    ...defaultConfig(preconfigs),
                    ...options.components,
                },
            };
            addBase({
                ":root": {
                    //Accordion
                    "--accordion-border-radius": theme(
                        `borderRadius.${config.components.accordion.rounded}`,
                    ),
                    "--accordion-ghost-light-bg": theme(
                        `colors.gray.${config.components.accordion.ghostBg}`,
                    ),
                    "--accordion-soft-light-bg": theme(
                        `colors.gray.${config.components.accordion.softBg}`,
                    ),
                    "--accordion-ghost-dark-bg": theme(
                        `colors.gray.${config.components.accordion.dark.ghostBg}`,
                    ),
                    "--accordion-soft-dark-bg": theme(
                        `colors.gray.${config.components.accordion.dark.softBg}`,
                    ),
                    "--accordion-dark-bg": theme(
                        `colors.gray.${config.components.accordion.dark.elevatedBg}`,
                    ),
                    "--accordion-shadow":
                        getShadows("accordion")[config.components.accordion.shadow.size],
                    "--accordion-shadow-opacity": `${config.components.accordion.shadow.opacity}%`,

                    //Alert
                    "--alert-border-radius": theme(
                        `borderRadius.${config.components.alert.rounded}`,
                    ),
                    "--alert-shadow": getShadows("alert")[config.components.alert.shadow.size],
                    "--alert-shadow-opacity": `${config.components.alert.shadow.opacity}%`,

                    //Annonce
                    "--annonce-border-radius": theme(
                        `borderRadius.${config.components.annonce.rounded}`,
                    ),

                    // Avatar
                    "--avatar-border-radius": theme(
                        `borderRadius.${config.components.avatar.rounded}`,
                    ),
                    "--avatar-status-position": theme(
                        `spacing.${config.components.avatar.statusInset}`,
                    ),

                    // Badge
                    "--badge-border-radius": theme(
                        `borderRadius.${config.components.badge.rounded}`,
                    ),

                    // Button
                    "--btn-border-radius": theme(
                        `borderRadius.${config.components.button.rounded}`,
                    ),
                    "--btn-border-width": `${config.components.button.borderWith}px`,

                    // Card
                    "--card-border-radius": theme(`borderRadius.${config.components.card.rounded}`),
                    "--card-shadow": getShadows("card")[config.components.card.shadow.size],
                    "--card-shadow-opacity": `${config.components.card.shadow.opacity}%`,
                    "--card-padding": theme(`spacing.${config.components.card.padding}`),
                    "--card-light-bg": theme(`colors.gray.${config.components.card.bg}`),
                    "--card-dark-bg": theme(`colors.gray.${config.components.card.dark.bg}`),

                    // Menu
                    "--menu-border-radius": theme(`borderRadius.${config.components.menu.rounded}`),
                    "--menu-light-bg-opacity": `${config.components.menu.bgOpacity}%`,
                    "--menu-dark-bg-opacity": `${config.components.menu.dark.bgOpacity}%`,
                    "--menu-dark-bg": theme(
                        `colors.gray.${config.components.menu.dark.bg} / var(--menu-dark-bg-opacity)`,
                    ),
                    "--menu-shadow": getShadows("menu")[config.components.menu.shadow.size],
                    "--menu-shadow-opacity": `${config.components.menu.shadow.opacity}%`,
                    "--menu-light-backdrop-blur": `${config.components.menu.backdropBlur}rem`,
                    "--menu-dark-backdrop-blur": `${config.components.menu.backdropBlur}rem`,
                    "--menu-light-border-color": theme(
                        `colors.gray.${config.components.menu.borderColor}`,
                    ),
                    "--menu-dark-border-color": theme(
                        `colors.gray.${config.components.menu.dark.borderColor}`,
                    ),

                    // Feedback
                    "--feedback-shadow":
                        getShadows("feedback")[config.components.feedback.shadow.size],
                    "--feedback-shadow-opacity": `${config.components.feedback.shadow.opacity}%`,
                    "--feedback-dark-bg": theme(
                        `colors.gray.${config.components.feedback.dark.bg}`,
                    ),
                    "--feedback-light-border-color": theme(
                        `colors.gray.${config.components.feedback.borderColor}`,
                    ),
                    "--feedback-dark-border-color": theme(
                        `colors.gray.${config.components.feedback.dark.borderColor}`,
                    ),

                    // Flag
                    "--flag-border-radius": theme(`borderRadius.${config.components.flag.rounded}`),
                    "--flag-padding": theme(`spacing.${config.components.flag.padding}`),

                    // Field
                    "--field-border-radius": theme(
                        `borderRadius.${config.components.field.rounded}`,
                    ),
                    "--field-light-bg": theme(`colors.gray.${config.components.field.softBg}`),
                    "--field-light-focus-bg": theme(
                        `colors.gray.${config.components.field.softBgFocus}`,
                    ),
                    "--field-dark-bg": theme(`colors.gray.${config.components.field.dark.softBg}`),
                    "--field-dark-focus-bg": theme(
                        `colors.gray.${config.components.field.dark.softBgFocus}`,
                    ),
                    "--field-light-border-color": theme(
                        `colors.gray.${config.components.field.borderColor}`,
                    ),
                    "--field-dark-border-color": theme(
                        `colors.gray.${config.components.field.dark.borderColor}`,
                    ),

                    // Popover
                    "--popover-border-radius": theme(
                        `borderRadius.${config.components.popover.rounded}`,
                    ),
                    "--popover-padding": theme(`spacing.${config.components.popover.padding}`),

                    // Switch
                    "--switch-border-radius": theme(
                        `borderRadius.${config.components.switch.rounded}`,
                    ),

                    // Tabs
                    "--tabs-border-radius": theme(
                        `borderRadius.${config.components.tabs.rounded.list}`,
                    ),
                    "--tabs-light-bg": theme(`colors.gray.${config.components.tabs.listBg}`),
                    "--tabs-dark-bg": theme(`colors.gray.${config.components.tabs.dark.listBg}`),
                    "--tabs-indicator-dark-bg": theme(
                        `colors.gray.${config.components.tabs.dark.indicatorBg}`,
                    ),
                    "--tabs-bottom-indicator-trigger-dark-bg": theme(
                        `colors.gray.${config.components.tabs.dark.triggerBg}`,
                    ),
                    "--tabs-bottom-indicator-light-bg": theme("colors.primary.600"),
                    "--tabs-bottom-indicator-dark-bg": theme("colors.primary.400"),
                    "--tabs-light-border-color": theme(
                        `colors.gray.${config.components.tabs.borderColor}`,
                    ),
                    "--tabs-dark-border-color": theme(
                        `colors.gray.${config.components.tabs.dark.borderColor}`,
                    ),
                    "--tabs-soft-border-radius": theme(
                        `borderRadius.${config.components.tabs.rounded.softVariant}`,
                    ),
                    "--tabs-bottom-indicator-border-radius": theme(
                        `borderRadius.${config.components.tabs.rounded.bottomIndicatorVariant}`,
                    ),

                    // Tooltip
                    "--tooltip-border-radius": theme(
                        `borderRadius.${config.components.tooltip.rounded}`,
                    ),

                    // Toast
                    "--toast-border-radius": theme(
                        `borderRadius.${config.components.toast.rounded}`,
                    ),

                    // Separator
                    "--separator-light-color": theme(
                        `colors.gray.${config.components.ui.borderColor}`,
                    ),
                    "--separator-dark-color": theme(
                        `colors.gray.${config.components.ui.dark.borderColor}`,
                    ),

                    // UI
                    "--ui-light-border-color": theme(
                        `colors.gray.${config.components.ui.borderColor}`,
                    ),
                    "--ui-dark-border-color": theme(
                        `colors.gray.${config.components.ui.dark.borderColor}`,
                    ),
                    "--ui-light-border-hover-color": theme(
                        `colors.gray.${config.components.ui.hoverBorderColor}`,
                    ),
                    "--ui-dark-border-hover-color": theme(
                        `colors.gray.${config.components.ui.dark.hoverBorderColor}`,
                    ),

                    // Select
                    "--select-dark-bg": theme(`colors.gray.${config.components.select.dark.bg}`),
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

    () => {
        return {
            plugins: [palettePlugin, animationsPlugin],
        };
    },
);

export { themer };
