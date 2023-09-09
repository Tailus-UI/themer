import * as baseCheckbox from "./base";
import config from "./../../checkbox.config";

const checkbox = {
    root: baseCheckbox.root.base + " " + baseCheckbox.root.appearances[config.appearance],
    label: baseCheckbox.label.base + " " + baseCheckbox.label.appearances[config.appearance],
    indicator:
        baseCheckbox.indicator.base + " " + baseCheckbox.indicator.appearances[config.appearance],
};

export default checkbox;
export { checkbox };
