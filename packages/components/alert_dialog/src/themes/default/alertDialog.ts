import * as baseAlertDialog from "./base";

const imageContainer = {
    info: baseAlertDialog.getImageContainer("info"),
    warning: baseAlertDialog.getImageContainer("warning"),
    danger: baseAlertDialog.getImageContainer("danger"),
};

const alertDialog = {
    content: baseAlertDialog.content,
    overlay: baseAlertDialog.overlay,
    title: baseAlertDialog.title,
    description: baseAlertDialog.description,
    actions: baseAlertDialog.actions,
    centredActions: baseAlertDialog.centredActions,
    imageContainer: imageContainer,
    image: baseAlertDialog.image,
};

export default alertDialog;
export { alertDialog };
