import { iconSizes, getSoftIconOnlyButtonSizes } from "./base";

const softIconButton = {
    primary: getSoftIconOnlyButtonSizes("primary"),
    secondary: getSoftIconOnlyButtonSizes("secondary"),
    accent: getSoftIconOnlyButtonSizes("accent"),
    danger: getSoftIconOnlyButtonSizes("danger"),
    success: getSoftIconOnlyButtonSizes("success"),
    warning: getSoftIconOnlyButtonSizes("warning"),
    info: getSoftIconOnlyButtonSizes("info"),
    gray: getSoftIconOnlyButtonSizes("gray"),
    neutral: getSoftIconOnlyButtonSizes("neutral"),
    icon: iconSizes,
};

export default softIconButton;
export { softIconButton };
