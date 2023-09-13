import { fallback as baseFallback } from "./base";

const colors = {
    primary: "text-white bg-primary-600",
    secondary: "text-white bg-secondary-600",
    accent: "text-white bg-accent-600",
    danger: "text-white bg-danger-600",
    success: "text-white bg-success-600",
    warning: "text-white bg-warning-700",
    info: "text-white bg-info-600",
    gray: "text-white bg-gray-600",
};

const fallback = {
    primary: baseFallback + " " + colors.primary,
    secondary: baseFallback + " " + colors.secondary,
    accent: baseFallback + " " + colors.accent,
    danger: baseFallback + " " + colors.danger,
    success: baseFallback + " " + colors.success,
    warning: baseFallback + " " + colors.warning,
    info: baseFallback + " " + colors.info,
    gray: baseFallback + " " + colors.gray,
};

export default fallback;
export { fallback };
