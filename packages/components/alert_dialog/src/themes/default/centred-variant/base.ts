import { content as baseContent, imageContainer } from "./../base";
import { imageContainerColors } from "./../colors";

const content = baseContent + " text-center max-w-xl";

const getImageContainer = (color: string) => {
    return imageContainer + " mx-auto " + imageContainerColors[color];
};

export { content, getImageContainer };
export { overlay, title, description, actions, centredActions, image } from "./../base";
