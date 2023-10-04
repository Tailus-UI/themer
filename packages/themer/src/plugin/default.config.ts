import { Preconfigs } from "../config";
import { background, borderColors, padding, radius } from "./../config/preconfigs";

export const preconfigs = {
    appearance: "both",
    border: "light",
    padding: "larger",
    radius: "smooth",
    background: "light",
    shadow: {
        size: "md",
        opacity: 5,
    },
};

export const defaultConfig = (preconfigs: Preconfigs) => {
    const components = {
        accordion: {
            rounded: radius[preconfigs.radius].accordion,
            softBg: background[preconfigs.background].accordion.soft,
            ghostBg: background[preconfigs.background].accordion.ghost,
            shadow: preconfigs.shadow,
            dark: {
                softBg: background[preconfigs.background].dark.accordion.soft,
                ghostBg: background[preconfigs.background].dark.accordion.ghost,
                elevatedBg: background[preconfigs.background].dark.accordion.elevated,
            },
        },
        alert: {
            rounded: radius[preconfigs.radius].alert,
            shadow: preconfigs.shadow,
        },
        annonce: {
            rounded: radius[preconfigs.radius].annonce,
        },
        avatar: {
            rounded: radius[preconfigs.radius].avatar,
            statusInset: "px",
        },
        badge: {
            rounded: radius[preconfigs.radius].badge,
        },
        button: {
            rounded: radius[preconfigs.radius].button,
            borderWith: "1.5",
        },
        card: {
            rounded: radius[preconfigs.radius].card,
            padding: padding[preconfigs.padding].card,
            bg: background[preconfigs.background].card,
            shadow: preconfigs.shadow,
            dark: {
                bg: background[preconfigs.background].dark.card,
            },
        },
        ui: {
            borderColor: borderColors[preconfigs.border].ui,
            hoverBorderColor: borderColors[preconfigs.border].hover,
            dark: {
                borderColor: borderColors[preconfigs.border].dark.ui,
                hoverBorderColor: borderColors[preconfigs.border].dark.hover,
            },
        },
        menu: {
            rounded: radius[preconfigs.radius].menu,
            borderColor: borderColors[preconfigs.border].menu,
            bgOpacity: 80,
            backdropBlur: "3",
            shadow: preconfigs.shadow,
            dark: {
                bg: background[preconfigs.background].dark.menu,
                borderColor: borderColors[preconfigs.border].dark.menu,
                bgOpacity: 50,
                backdropBlur: "5",
            },
        },
        feedback: {
            borderColor: borderColors[preconfigs.border].feedback,
            shadow: preconfigs.shadow,
            dark: {
                borderColor: borderColors[preconfigs.border].dark.feedback,
                bg: background[preconfigs.background].dark.feedback,
            },
        },
        flag: {
            rounded: radius[preconfigs.radius].flag,
            padding: padding[preconfigs.padding].flag,
        },
        field: {
            rounded: radius[preconfigs.radius].field,
            softBg: background[preconfigs.background].field,
            softBgFocus: background[preconfigs.background].fieldFocus,
            borderColor: borderColors[preconfigs.border].field,
            dark: {
                softBg: background[preconfigs.background].dark.field,
                softBgFocus: background[preconfigs.background].dark.fieldFocus,
                borderColor: borderColors[preconfigs.border].dark.field,
            },
        },
        popover: {
            rounded: radius[preconfigs.radius].popover,
            padding: padding[preconfigs.padding].popover,
        },
        switch: {
            rounded: radius[preconfigs.radius].switch,
        },
        toast: {
            rounded: radius[preconfigs.radius].toast,
        },
        tooltip: {
            rounded: radius[preconfigs.radius].tooltip,
        },
        tabs: {
            rounded: {
                list: radius[preconfigs.radius].tabs.default,
                softVariant: radius[preconfigs.radius].tabs.soft,
                bottomIndicatorVariant: radius[preconfigs.radius].tabs.bottomIndicator,
            },
            listBg: background[preconfigs.background].tabs,
            borderColor: borderColors[preconfigs.border].tabs,
            dark: {
                listBg: background[preconfigs.background].dark.tabs.list,
                triggerBg: background[preconfigs.background].dark.tabs.trigger,
                indicatorBg: background[preconfigs.background].dark.tabs.indicator,
                borderColor: borderColors[preconfigs.border].dark.tabs,
            },
        },
        select: {
            dark: {
                bg: background[preconfigs.background].dark.select,
            },
        },
    };
    return components;
};

export default defaultConfig;
