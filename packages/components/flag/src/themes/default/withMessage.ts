import * as baseFlag from "./base";
import config from "../../flag.config";
import { twJoin, twMerge } from "tailwind-merge";

const root = twJoin(
    baseFlag.root.base,
    "p-[--flag-padding]",
    baseFlag.root.appearances[config.appearance]
);

const close = {
    button: twMerge(baseFlag.closeButton.button, "my-0 -right-2 -top-2 bottom-auto"),
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
