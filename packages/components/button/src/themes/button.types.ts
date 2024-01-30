type Color = {
    light: string;
    dark: string;
    both: string;
};

type ButtonBase = {
    layout: string;
    appearances: Color;
};

type ColorsBase = {
    primary: Color;
    secondary: Color;
    accent: Color;
    danger: Color;
    success: Color;
    warning: Color;
    info: Color;
    gray: Color;
    neutral?: Color;
};

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

export { Color, ColorsBase, Colors, ButtonBase, Sizes, Button };
