import * as baseContext from "./base";

const item = {
    primary: baseContext.getSoftItem("primary"),
    danger: baseContext.getSoftItem("danger"),
    warning: baseContext.getSoftItem("warning"),
    gray: baseContext.getSoftItem("gray"),
};

const softDropdownMenu = {
    content: baseContext.content,
    item: item,
    separator: baseContext.separator,
};

export default softDropdownMenu;
export { softDropdownMenu };
