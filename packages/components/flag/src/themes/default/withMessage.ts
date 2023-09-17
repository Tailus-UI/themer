import * as baseFlag from "./base";
import config from "../../flag.config";

const root = baseFlag.root.base + " p-4 " + baseFlag.root.appearances[config.appearance];

const closeButton = baseFlag.closeButton.button.replace("relative", "absolute");

const close = {
    button: closeButton + " top-2 right-2 ",
    icon: baseFlag.closeButton.icon,
};

const flagWithMessage = {
    root: root,
    icon: baseFlag.icon,
    title: baseFlag.title,
    actions: baseFlag.actions,
    content: baseFlag.content,
    message: baseFlag.message,
    link: baseFlag.link,
    close: close,
};
export default flagWithMessage;
export { flagWithMessage };
