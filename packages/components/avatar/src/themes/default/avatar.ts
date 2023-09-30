import * as baseAvatar from "./base";

const avatar = {
    root: baseAvatar.root,
    image: baseAvatar.image,
    fallback: baseAvatar.solidFallback,
    softFallback: baseAvatar.softFallback,
    topStatus: baseAvatar.topStatus,
    bottomStatus: baseAvatar.bottomStatus,
};

export default avatar;
export { avatar };
