export type Config = {
    appearance?: "light" | "dark" | "both";
    radius?: "boxy" | "sharp" | "smooth" | "smoothest";
    shadow?: {
        size: "none" | "default" | "sm" | "md" | "lg" | "xl" | "xxl";
        opacity: number;
    };
    border?: "lighter" | "light" | "dark" | "darker" | "darkest";
    background?: "light" | "lighter" | "high" | "higher";
    padding?: "small" | "medium" | "large" | "larger" | "largest";
    components?: {};
};

export type Shadows = {
    default: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    none: string;
};
