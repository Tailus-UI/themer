export type Colors = {
    primary: string;
    secondary: string;
    accent: string;
    danger: string;
    success: string;
    warning: string;
    info: string;
    gray: string;
    neutral: string;
};

export type Sizes = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};

export type ColorSizes = {
    primary: Sizes;
    secondary: Sizes;
    accent: Sizes;
    danger: Sizes;
    success: Sizes;
    warning: Sizes;
    info: Sizes;
    gray: Sizes;
    neutral: Sizes;
};

export type Toggle = {
    root: Sizes;
    icon: Sizes;
    iconBefore: Sizes;
    iconAfter: {
        primary: Sizes;
        secondary: Sizes;
        accent: Sizes;
        danger: Sizes;
        warning: Sizes;
        success: Sizes;
        gray: Sizes;
        neutral: Sizes;
    };
};

export type HighlightedToggle = {
    root: ColorSizes;
    icon: Sizes;
    iconBefore: Sizes;
    iconAfter: Sizes;
};
