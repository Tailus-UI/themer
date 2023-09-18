import * as baseAlertDialog from "./base";

const imageContainer = {
    info: baseAlertDialog.getImageContainer("info"),
    warning: baseAlertDialog.getImageContainer("warning"),
    danger: baseAlertDialog.getImageContainer("danger"),
};

const centredAlertDialog = {
    content: baseAlertDialog.content,
    overlay: baseAlertDialog.overlay,
    title: baseAlertDialog.title,
    description: baseAlertDialog.description,
    actions: baseAlertDialog.centredActions,
    imageContainer: imageContainer,
    image: baseAlertDialog.image,
};

export default centredAlertDialog;
export { centredAlertDialog };
