import { Avatar } from "../avatar.types";
import * as baseAvatar from "./base";

const softFallbackAvatar: Avatar = {
    root: baseAvatar.root,
    image: baseAvatar.image,
    fallback: baseAvatar.softFallback,
    topStatus: baseAvatar.topStatus,
    bottomStatus: baseAvatar.bottomStatus,
};

export default softFallbackAvatar;
export { softFallbackAvatar };
