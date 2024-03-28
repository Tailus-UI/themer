import type { SizesWithoutFull, Sizes } from "../../types";

export type Radius = {
    button: Sizes;
    accordion: SizesWithoutFull;
    annonce: Sizes;
    avatar: Sizes;
    badge: Sizes;
    card: SizesWithoutFull;
    flag: SizesWithoutFull;
    field: Sizes;
    popover: SizesWithoutFull;
    tooltip: Sizes;
    menu: SizesWithoutFull;
    alert: SizesWithoutFull;
    switch: Sizes;
    toast: SizesWithoutFull;
    tabs: {
        default: Sizes;
        soft: Sizes;
        bottomIndicator: Sizes;
    };
};
