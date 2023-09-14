import * as baseToggle from "./base";
import colors from "./colors";
import config from "./../../toggle.config";

const root = {
    xs:
        baseToggle.root.base +
        " " +
        baseToggle.size.xs +
        " " +
        baseToggle.root.appearances[config.appearance],
    sm:
        baseToggle.root.base +
        " " +
        baseToggle.size.sm +
        " " +
        baseToggle.root.appearances[config.appearance],
    md:
        baseToggle.root.base +
        " " +
        baseToggle.size.md +
        " " +
        baseToggle.root.appearances[config.appearance],
    lg:
        baseToggle.root.base +
        " " +
        baseToggle.size.lg +
        " " +
        baseToggle.root.appearances[config.appearance],
    xl:
        baseToggle.root.base +
        " " +
        baseToggle.size.xl +
        " " +
        baseToggle.root.appearances[config.appearance],
};

const icon = {
    xs: baseToggle.icon + " " + baseToggle.iconSize.xs,
    sm: baseToggle.icon + " " + baseToggle.iconSize.sm,
    md: baseToggle.icon + " " + baseToggle.iconSize.md,
    lg: baseToggle.icon + " " + baseToggle.iconSize.lg,
    xl: baseToggle.icon + " " + baseToggle.iconSize.xl,
};

const iconStateOn = {
    primary: baseToggle.iconStateOn + " " + colors.primary[config.appearance],
    secondary: baseToggle.iconStateOn + " " + colors.secondary[config.appearance],
    accent: baseToggle.iconStateOn + " " + colors.accent[config.appearance],
    danger: baseToggle.iconStateOn + " " + colors.danger[config.appearance],
    warning: baseToggle.iconStateOn + " " + colors.warning[config.appearance],
    success: baseToggle.iconStateOn + " " + colors.success[config.appearance],
    gray: baseToggle.iconStateOn + " " + colors.gray[config.appearance],
    neutral: baseToggle.iconStateOn + " " + colors.neutral[config.appearance],
};

const toggle = {
    root,
    icon,
    iconStateOn,
    iconSize: baseToggle.iconSize,
};

export default toggle;
export { toggle };
