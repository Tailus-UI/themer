import { Colors, DropDownMenu } from "../types";
import * as baseDropdown from "./base";

const item: Colors = {
    primary: baseDropdown.getItem("primary"),
    danger: baseDropdown.getItem("danger"),
    warning: baseDropdown.getItem("warning"),
    gray: baseDropdown.getItem("gray"),
    neutral: baseDropdown.getItem("neutral"),
};

const subTriger: Colors = {
    primary: baseDropdown.getSubTrigger("primary"),
    danger: baseDropdown.getSubTrigger("danger"),
    warning: baseDropdown.getSubTrigger("warning"),
    gray: baseDropdown.getSubTrigger("gray"),
    neutral: baseDropdown.getSubTrigger("neutral"),
};

const dropdownMenu: DropDownMenu = {
    content: baseDropdown.content,
    item: item,
    icon: baseDropdown.icon,
    rightIcon: baseDropdown.rightIcon,
    separator: baseDropdown.separator,
    subTriger: subTriger,
    subContent: baseDropdown.subContent,
};

export default dropdownMenu;
export { dropdownMenu };
