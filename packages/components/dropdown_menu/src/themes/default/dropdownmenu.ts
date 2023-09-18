import * as baseDropdown from "./base";

const item = {
    primary: baseDropdown.getItem("primary"),
    danger: baseDropdown.getItem("danger"),
    warning: baseDropdown.getItem("warning"),
    gray: baseDropdown.getItem("gray"),
    neutral: baseDropdown.getItem("neutral"),
};

const dropdownmenu = {
    content: baseDropdown.content,
    item: item,
    separator: baseDropdown.separator,
};

export default dropdownmenu;
export { dropdownmenu };
