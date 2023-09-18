import * as baseDropdown from "./base";

const item = {
    primary: baseDropdown.getSoftItem("primary"),
    danger: baseDropdown.getSoftItem("danger"),
    warning: baseDropdown.getSoftItem("warning"),
    gray: baseDropdown.getSoftItem("gray"),
};

const subTriger = {
    primary: baseDropdown.getSoftSubTrigger("primary"),
    danger: baseDropdown.getSoftSubTrigger("danger"),
    warning: baseDropdown.getSoftSubTrigger("warning"),
    gray: baseDropdown.getSoftSubTrigger("gray"),
};

const softDropdownMenu = {
    content: baseDropdown.content,
    item: item,
    separator: baseDropdown.separator,
    icon: baseDropdown.icon,
    rightIcon: baseDropdown.rightIcon,
    subContent: baseDropdown.subContent,
    subTriger: subTriger,
};

export default softDropdownMenu;
export { softDropdownMenu };
