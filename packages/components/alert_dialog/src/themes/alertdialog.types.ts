type Colors = {
    info: string;
    warning: string;
    danger: string;
};

type AlertDialog = {
    content: string;
    overlay: string;
    title: string;
    description: string;
    actions: string;
    centredActions: string;
    imageContainer: Colors;
    image: string;
};

type CentredAlertDialog = {
    content: string;
    overlay: string;
    title: string;
    description: string;
    actions: string;
    imageContainer: Colors;
    image: string;
};

export { Colors, AlertDialog, CentredAlertDialog };
