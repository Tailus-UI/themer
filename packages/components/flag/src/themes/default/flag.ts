import * as baseFlag from "./base";
import config from "../../flag.config";
import { twJoin, twMerge } from "tailwind-merge";

const root = twJoin(
    baseFlag.root.base,
    "py-3 px-5 items-center",
    baseFlag.root.appearances[config.appearance]
);

const close = {
    button: twMerge(baseFlag.closeButton.button, "inset-y-0 -right-3 my-auto ml-auto"),
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
