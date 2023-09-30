type Colors = {
    primary: string;
    secondary: string;
    accent: string;
    danger: string;
    success: string;
    warning: string;
    info: string;
    gray: string;
};

type Sizes = {
    sm: string;
    md: string;
    lg: string;
};

type Badge = {
    primary: Sizes;
    secondary: Sizes;
    accent: Sizes;
    danger: Sizes;
    success: Sizes;
    warning: Sizes;
    info: Sizes;
    gray: Sizes;
};

export { Colors, Sizes, Badge };
