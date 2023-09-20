import { highlightRootToggle as toggle } from "@tailus/themer-toggle";

const highlightToggleGroup = {
    root: "flex items-center justify-center gap-px",
    item: toggle.root,
    icon: toggle.icon,
    iconBefore: toggle.iconBefore,
    iconAfter: toggle.iconAfter,
};

export default highlightToggleGroup;
export { highlightToggleGroup };
