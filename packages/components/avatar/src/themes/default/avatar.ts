import { Avatar } from "../avatar.types";
import * as baseAvatar from "./base";

const avatar: Avatar = {
    root: baseAvatar.root,
    image: baseAvatar.image,
    fallback: baseAvatar.solidFallback,
    topStatus: baseAvatar.topStatus,
    bottomStatus: baseAvatar.bottomStatus,
};

export default avatar;
export { avatar };
