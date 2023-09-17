import * as baseFlag from "./base";
import config from "../../flag.config";

const root =
    baseFlag.root.base + " px-4 py-2 items-center " + baseFlag.root.appearances[config.appearance];

const close = {
    button: baseFlag.closeButton.button + " ml-2 -mr-2 ",
    icon: baseFlag.closeButton.icon,
};

const flag = {
    root: root,
    icon: baseFlag.icon,
    title: baseFlag.title,
    actions: baseFlag.actions,
    link: baseFlag.link,
    close: close,
};
export default flag;
export { flag };
