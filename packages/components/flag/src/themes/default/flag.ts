import * as baseFlag from "./base";
import config from "../../flag.config";

const icon = {
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

const flag = {
    root: baseFlag.root.base + " " + baseFlag.root.appearances[config.appearance],
    icon: {
        parent: baseFlag.icon.parent,
        icon,
    },
    title,
    message: baseFlag.message,
    actions: baseFlag.actions,
    link: baseFlag.link,
};

export default flag;
export { flag };
