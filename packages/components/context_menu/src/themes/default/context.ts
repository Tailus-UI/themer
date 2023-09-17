import * as baseContext from "./base";

const item = {
    primary: baseContext.getItem("primary"),
    danger: baseContext.getItem("danger"),
    warning: baseContext.getItem("warning"),
    gray: baseContext.getItem("gray"),
    neutral: baseContext.getItem("neutral"),
};

const subTriger = {
    primary: baseContext.getSubTrigger("primary"),
    danger: baseContext.getSubTrigger("danger"),
    warning: baseContext.getSubTrigger("warning"),
    gray: baseContext.getSubTrigger("gray"),
    neutral: baseContext.getSubTrigger("neutral"),
};

const contextMenu = {
    content: baseContext.content,
    item: item,
    separator: baseContext.separator,
    command: baseContext.command,
    icon: baseContext.command,
    subContent: baseContext.subContent,
    subTriger: subTriger,
};

export default contextMenu;
export { contextMenu };
