import * as baseAvatar from "./base";
import config from "./../../avatar.config";

const topStatus = {
    online:
        baseAvatar.avatarStatus.base +
        " before:top-[--avatar-status-position] " +
        baseAvatar.avatarStatus.appearances[config.appearance] +
        " before:top-[--avatar-status-position] " +
        baseAvatar.statusColors.online,
    offline:
        baseAvatar.avatarStatus.base +
        " before:top-[--avatar-status-position] " +
        baseAvatar.avatarStatus.appearances[config.appearance] +
        " before:top-[--avatar-status-position] " +
        baseAvatar.statusColors.offline,
    away:
        baseAvatar.avatarStatus.base +
        " before:top-[--avatar-status-position] " +
        baseAvatar.avatarStatus.appearances[config.appearance] +
        " before:top-[--avatar-status-position] " +
        baseAvatar.statusColors.away,
    busy:
        baseAvatar.avatarStatus.base +
        " before:top-[--avatar-status-position] " +
        baseAvatar.avatarStatus.appearances[config.appearance] +
        " before:top-[--avatar-status-position] " +
        baseAvatar.statusColors.busy,
};

const bottomStatus = {
    online:
        baseAvatar.avatarStatus.base +
        " before:bottom-[--avatar-status-position] " +
        baseAvatar.avatarStatus.appearances[config.appearance] +
        " before:bottom-[--avatar-status-position] " +
        baseAvatar.statusColors.online,
    offline:
        baseAvatar.avatarStatus.base +
        " before:bottom-[--avatar-status-position] " +
        baseAvatar.avatarStatus.appearances[config.appearance] +
        " before:bottom-[--avatar-status-position] " +
        baseAvatar.statusColors.offline,
    away:
        baseAvatar.avatarStatus.base +
        " before:bottom-[--avatar-status-position] " +
        baseAvatar.avatarStatus.appearances[config.appearance] +
        " before:bottom-[--avatar-status-position] " +
        baseAvatar.statusColors.away,
    busy:
        baseAvatar.avatarStatus.base +
        " before:bottom-[--avatar-status-position] " +
        baseAvatar.avatarStatus.appearances[config.appearance] +
        " before:bottom-[--avatar-status-position] " +
        baseAvatar.statusColors.busy,
};

const root = {
    xs: baseAvatar.root + " " + baseAvatar.sizes.xs,
    sm: baseAvatar.root + " " + baseAvatar.sizes.sm,
    md: baseAvatar.root + " " + baseAvatar.sizes.md,
    lg: baseAvatar.root + " " + baseAvatar.sizes.lg,
    xl: baseAvatar.root + " " + baseAvatar.sizes.xl,
};

const fallback = {
    primary: baseAvatar.fallback + " " + baseAvatar.colors.primary[config.appearance],
    secondary: baseAvatar.fallback + " " + baseAvatar.colors.secondary[config.appearance],
    accent: baseAvatar.fallback + " " + baseAvatar.colors.accent[config.appearance],
    danger: baseAvatar.fallback + " " + baseAvatar.colors.danger[config.appearance],
    success: baseAvatar.fallback + " " + baseAvatar.colors.success[config.appearance],
    warning: baseAvatar.fallback + " " + baseAvatar.colors.warning[config.appearance],
    info: baseAvatar.fallback + " " + baseAvatar.colors.info[config.appearance],
    gray: baseAvatar.fallback + " " + baseAvatar.colors.gray[config.appearance],
    neutral: baseAvatar.fallback + " " + baseAvatar.colors.neutral[config.appearance],
};

const avatar = {
    root,
    image: baseAvatar.image,
    fallback,
    topStatus,
    bottomStatus,
};

export default avatar;
export { avatar };
