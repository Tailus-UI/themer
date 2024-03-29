import { Colors } from "../button.types";

const colors = {
    neutral:
        "bg-gray-900 text-white [box-shadow:rgba(255,255,255,0.2)_0px_1px_0px_0px_inset,theme(colors.gray.900)_0px_0px_0px_1px] hover:brightness-125 dark:bg-white dark:text-gray-950",
    primary:
        "bg-primary-600 text-white [box-shadow:rgba(255,255,255,0.35)_0px_1px_0px_0px_inset,theme(colors.primary.600)_0px_0px_0px_1px] hover:brightness-[1.1]",
    secondary:
        "bg-secondary-600 text-white [box-shadow:rgba(255,255,255,0.35)_0px_1px_0px_0px_inset,theme(colors.secondary.600)_0px_0px_0px_1px] hover:brightness-[1.1]",
    accent: "bg-accent-600 text-white [box-shadow:rgba(255,255,255,0.35)_0px_1px_0px_0px_inset,theme(colors.accent.600)_0px_0px_0px_1px] hover:brightness-[1.1]",
    info: "bg-info-600 text-white [box-shadow:rgba(255,255,255,0.35)_0px_1px_0px_0px_inset,theme(colors.info.600)_0px_0px_0px_1px] hover:brightness-[1.1]",
    warning:
        "bg-warning-500 text-warning-950 [box-shadow:rgba(255,255,255,0.35)_0px_1px_0px_0px_inset,theme(colors.warning.600)_0px_0px_0px_1px] hover:brightness-[1.1]",
    success:
        "bg-success-600 text-white [box-shadow:rgba(255,255,255,0.35)_0px_1px_0px_0px_inset,theme(colors.success.600)_0px_0px_0px_1px] hover:brightness-[1.1]",
    danger: "bg-danger-600 text-white [box-shadow:rgba(255,255,255,0.35)_0px_1px_0px_0px_inset,theme(colors.danger.600)_0px_0px_0px_1px] hover:brightness-[1.1]",
    gray: "bg-gray-600 text-white [box-shadow:rgba(255,255,255,0.35)_0px_1px_0px_0px_inset,theme(colors.gray.600)_0px_0px_0px_1px] hover:brightness-[1.1]",
};

const solidColors: Colors = {
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    danger: colors.danger,
    success: colors.success,
    warning: colors.warning,
    info: colors.info,
    gray: colors.gray,
    neutral: colors.neutral,
};

export default solidColors;
export { solidColors };
