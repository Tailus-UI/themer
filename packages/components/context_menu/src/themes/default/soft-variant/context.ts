import * as baseContext from "./base";

const item = {
    primary: baseContext.getSoftItem("primary"),
    danger: baseContext.getSoftItem("danger"),
    warning: baseContext.getSoftItem("warning"),
    gray: baseContext.getSoftItem("gray"),
};

const subTriger = {
    primary: baseContext.getSoftSubTrigger("primary"),
    danger: baseContext.getSoftSubTrigger("danger"),
    warning: baseContext.getSoftSubTrigger("warning"),
    gray: baseContext.getSoftSubTrigger("gray"),
};

const softContextMenu = {
    content: baseContext.content,
    item: item,
    separator: baseContext.separator,
    command: baseContext.command,
    icon: baseContext.command,
    subContent: baseContext.subContent,
    subTriger: subTriger,
};

export default softContextMenu;
export { softContextMenu };
