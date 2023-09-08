import * as baseCheckbox from "./base";
import themer from "./../../../../../tailus.config";

const checkbox = {
    root: baseCheckbox.root.base + " " + baseCheckbox.root.appearances[themer.appearance],
    label: baseCheckbox.label.base + " " + baseCheckbox.label.appearances[themer.appearance],
    indicator:
        baseCheckbox.indicator.base + " " + baseCheckbox.indicator.appearances[themer.appearance],
};

export default checkbox;
export { checkbox };
