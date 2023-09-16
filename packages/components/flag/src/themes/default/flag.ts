import * as baseFlag from "./base";
import config from "../../flag.config";

const root = baseFlag.root.base + " " + baseFlag.root.appearances[config.appearance];

const icon = {
    parent: baseFlag.icon.parent,
    success: baseFlag.icon.icon + " " + baseFlag.iconColors.success[config.appearance],
    info: baseFlag.icon.icon + " " + baseFlag.iconColors.info[config.appearance],
    warning: baseFlag.icon.icon + " " + baseFlag.iconColors.warning[config.appearance],
    danger: baseFlag.icon.icon + " " + baseFlag.iconColors.danger[config.appearance],
    gray: baseFlag.icon.icon + " " + baseFlag.iconColors.gray[config.appearance],
};

const title = {
    success: baseFlag.title + " " + baseFlag.titleColors.success[config.appearance],
    info: baseFlag.title + " " + baseFlag.titleColors.info[config.appearance],
    warning: baseFlag.title + " " + baseFlag.titleColors.warning[config.appearance],
    danger: baseFlag.title + " " + baseFlag.titleColors.danger[config.appearance],
    gray: baseFlag.title + " " + baseFlag.titleColors.gray[config.appearance],
};

const link = baseFlag.link.base + " " + baseFlag.link.appearances[config.appearance];

const close = {
    button: "",
    icon: "",
};

const flag = {
    root,
    icon,
    title,
    message: baseFlag.message,
    actions: baseFlag.actions,
    link,
    close,
};
export default flag;
export { flag };
