import * as base from "../base/index";
import message from "../message";

const getInputSize = (size: base.InputSize) => {
    return base.getInput(size, base.baseInputSizes, base.inputVariants, "mixed");
};

const getTextareaSize = (size: base.InputSize) => {
    return base.getInput(size, base.baseTextareaSizes, base.textareaVariants, "mixed");
};

const input = {
    xs: getInputSize("xs"),
    sm: getInputSize("sm"),
    md: getInputSize("md"),
    lg: getInputSize("lg"),
    xl: getInputSize("xl"),
};

const textarea = {
    xs: getTextareaSize("xs"),
    sm: getTextareaSize("sm"),
    md: getTextareaSize("md"),
    lg: getTextareaSize("lg"),
    xl: getTextareaSize("xl"),
};

const label = {
    xs: base.getLabel(base.label, "xs"),
    sm: base.getLabel(base.label, "sm"),
    md: base.getLabel(base.label, "md"),
    lg: base.getLabel(base.label, "lg"),
};

const mixedForm = {
    field: base.field,
    input,
    textarea,
    label,
    message,
};

export default mixedForm;
export { mixedForm };
