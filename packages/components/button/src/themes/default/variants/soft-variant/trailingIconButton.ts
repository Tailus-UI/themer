import { getSoftIconButtonSizes, trailingIconSizes } from "./base";

const softTrailingIconButton = {
    primary: getSoftIconButtonSizes("primary"),
    secondary: getSoftIconButtonSizes("secondary"),
    accent: getSoftIconButtonSizes("accent"),
    danger: getSoftIconButtonSizes("danger"),
    success: getSoftIconButtonSizes("success"),
    warning: getSoftIconButtonSizes("warning"),
    info: getSoftIconButtonSizes("info"),
    gray: getSoftIconButtonSizes("gray"),
    neutral: getSoftIconButtonSizes("neutral"),
    icon: trailingIconSizes,
};

export default softTrailingIconButton;
export { softTrailingIconButton };
