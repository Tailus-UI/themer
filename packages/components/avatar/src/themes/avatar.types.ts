type Fallback = {
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
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};

type Avatar = {
    root: Sizes;
    fallback: Fallback;
    image: string;
    topStatus: StatusColors;
    bottomStatus: StatusColors;
};

type StatusColors = {
    online: string;
    offline: string;
    away: string;
    busy: string;
};

export { Fallback, Sizes, Avatar, StatusColors };
