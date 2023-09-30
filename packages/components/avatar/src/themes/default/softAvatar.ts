import * as baseAvatar from "./base";

const softFallbackAvatar = {
    root: baseAvatar.root,
    image: baseAvatar.image,
    fallback: baseAvatar.softFallback,
    topStatus: baseAvatar.topStatus,
    bottomStatus: baseAvatar.bottomStatus,
};

export default softFallbackAvatar;
export { softFallbackAvatar };
