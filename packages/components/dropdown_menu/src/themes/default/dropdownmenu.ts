import * as baseDropdown from "./base";

const item = {
    primary: baseDropdown.getItem("primary"),
    danger: baseDropdown.getItem("danger"),
    warning: baseDropdown.getItem("warning"),
    gray: baseDropdown.getItem("gray"),
    neutral: baseDropdown.getItem("neutral"),
};

const subTriger = {
    primary: baseDropdown.getSubTrigger("primary"),
    danger: baseDropdown.getSubTrigger("danger"),
    warning: baseDropdown.getSubTrigger("warning"),
    gray: baseDropdown.getSubTrigger("gray"),
    neutral: baseDropdown.getSubTrigger("neutral"),
};

const dropdownmenu = {
    content: baseDropdown.content,
    item: item,
    icon: baseDropdown.icon,
    rightIcon: baseDropdown.rightIcon,
    separator: baseDropdown.separator,
    subTriger: subTriger,
    subContent: baseDropdown.subContent,
};

export default dropdownmenu;
export { dropdownmenu };
