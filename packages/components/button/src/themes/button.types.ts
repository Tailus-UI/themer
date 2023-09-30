type Colors = {
    primary: string;
    secondary: string;
    accent: string;
    danger: string;
    success: string;
    warning: string;
    info: string;
    gray: string;
    neutral?: string;
};

type Sizes = {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};

type Button = {
    primary: Sizes;
    secondary: Sizes;
    accent: Sizes;
    danger: Sizes;
    success: Sizes;
    warning: Sizes;
    info: Sizes;
    gray: Sizes;
    neutral?: Sizes;
};

export { Colors, Sizes, Button };
