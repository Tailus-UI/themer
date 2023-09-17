import { getSoftIconButtonSizes, leadingIconSizes } from "./base";

const softLeadingIconButton = {
    primary: getSoftIconButtonSizes("primary"),
    secondary: getSoftIconButtonSizes("secondary"),
    accent: getSoftIconButtonSizes("accent"),
    danger: getSoftIconButtonSizes("danger"),
    success: getSoftIconButtonSizes("success"),
    warning: getSoftIconButtonSizes("warning"),
    info: getSoftIconButtonSizes("info"),
    gray: getSoftIconButtonSizes("gray"),
    neutral: getSoftIconButtonSizes("neutral"),
    icon: leadingIconSizes,
};

export default softLeadingIconButton;
export { softLeadingIconButton };
