type Colors = {
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

type Annonce = {
    root: string;
    concern: Colors;
    message: string;
};

export { Colors, Annonce };
