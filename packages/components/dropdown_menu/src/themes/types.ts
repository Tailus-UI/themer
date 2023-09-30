export type Colors = {
    primary: string;
    danger: string;
    warning: string;
    gray: string;
    neutral?: string;
};

export type DropDownMenu = {
    content: string;
    item: Colors;
    icon: string;
    rightIcon: string;
    separator: string;
    subTriger: Colors;
    subContent: string;
};
