import * as basePopover from "./base";

type Popover = {
    content: string;
    arrow: string;
    title: string;
    description: string;
    close: string;
};

const popover: Popover = {
    ...basePopover,
};

export default popover;
export { popover };
