import config from "../../../avatar.config";
import { Sizes, StatusColors } from "../../avatar.types";

const baseRoot = "relative block rounded-[--avatar-border-radius]";

const sizes: Sizes = {
    xs: "text-sm h-6 w-6",
    sm: "text-base h-8 w-8",
    md: "text-lg h-10 w-10",
    lg: "text-lg h-12 w-12",
    xl: "text-xl h-14 w-14",
};

const image = "h-full w-full rounded-[--avatar-border-radius] object-cover";

const avatarStatus = {
    base: "before:absolute before:z-[1] before:right-[--avatar-status-position] before:h-3 before:w-3 before:rounded-full before:border-2",
    appearances: {
        light: "before:border-white",
        dark: "before:border-gray-950",
        both: "before:border-white dark:before:border-gray-950",
    },
};

const statusColors: StatusColors = {
    online: "before:bg-success-500",
    offline: "before:bg-gray-500",
    away: "before:bg-warning-600",
    busy: "before:bg-danger-500",
};

const fallback =
    "absolute inset-0 m-auto h-full flex items-center justify-center rounded-[--avatar-border-radius] w-full font-medium";

/**
 * @description Get the avatar status utilities
 * @param position
 * @param status
 * @returns {string} The avatar status utilities
 */
function getAvatarStatus(position: string, status: string): string {
    return (
        avatarStatus.base +
        avatarStatus.appearances[config.appearance] +
        ` before:${position}-[--avatar-status-position] ` +
        statusColors[status]
    );
}

const topStatus: StatusColors = {
    online: getAvatarStatus("top", "online"),
    offline: getAvatarStatus("top", "offline"),
    away: getAvatarStatus("top", "away"),
    busy: getAvatarStatus("top", "busy"),
};

const bottomStatus: StatusColors = {
    online: getAvatarStatus("bottom", "online"),
    offline: getAvatarStatus("bottom", "offline"),
    away: getAvatarStatus("bottom", "away"),
    busy: getAvatarStatus("bottom", "busy"),
};

const root: Sizes = {
    xs: baseRoot + " " + sizes.xs,
    sm: baseRoot + " " + sizes.sm,
    md: baseRoot + " " + sizes.md,
    lg: baseRoot + " " + sizes.lg,
    xl: baseRoot + " " + sizes.xl,
};
export { root, image, avatarStatus, statusColors, fallback, topStatus, bottomStatus };
export { softFallback, solidFallback } from "./colors";
