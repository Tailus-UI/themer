# Avatar Component Theme

## Overview

The avatar component theme is a collection of Tailwindcss utilities that can be used to create avatars with different colors, styles, and variants. Avatars are graphical representations of users, and can be used in a variety of contexts, such as profile pages, chat rooms, and social media feeds.

## Installation

To install the avatar component theme, run the following command:

```bash
npm install @tailus/themer-avatar
```

## Importation

To import the avatar component theme, you can use the following import:

```tsx
import { avatar, softFallbackAvatar } from "@tailus/themer-avatar";
```

## Variants

The avatar component theme provides two variants:

-   `solidFallback` (default): The default variant.
-   `softFallback`: A soft variant with rounded corners and lighter background colors.

## Reference

The avatar component theme object.

```ts
Avatar = {
    root: {
        xs,
        sm,
        md,
        lg,
        xl
    };
    fallback:
    {
        primary,
        secondary,
        accent,
        danger,
        warning,
        info,
        success,
        gray
    };
    image: string;
    topStatus: {online, offline, away, busy};
    bottomStatus: {online, offline, away, busy};
};
```

## Properties

The avatar component theme object contains the following properties:

-   `root`: The Tailwindcss utilities for the root element of the avatar component.
-   `fallback`: An object containing the Tailwindcss utilities for the fallback element, which is used if the avatar does not have an image.
    -   `primary`: The Tailwindcss utilities for the primary fallback color.
    -   `secondary`: The Tailwindcss utilities for the secondary fallback color.
    -   `accent`: The Tailwindcss utilities for the accent fallback color.
    -   `danger`: The Tailwindcss utilities for the danger fallback color.
    -   `warning`: The Tailwindcss utilities for the warning fallback color.
    -   `info`: The Tailwindcss utilities for the info fallback color.
    -   `success`: The Tailwindcss utilities for the success fallback color.
    -   `gray`: The Tailwindcss utilities for the gray fallback color.
-   `image`: The Tailwindcss utilities for the avatar image element.
-   `topStatus`: An object containing the Tailwindcss utilities for the top status element, which can be used to indicate the user's online status.
    -   `online`: The Tailwindcss utilities for the online status.
    -   `offline`: The Tailwindcss utilities for the offline status.
    -   `away`: The Tailwindcss utilities for the away status.
    -   `busy`: The Tailwindcss utilities for the busy status.
-   `bottomStatus`: An object containing the Tailwindcss utilities for the bottom status element, which can be used to indicate the user's role or other information.
    -   `online`: The Tailwindcss utilities for the online status.
    -   `offline`: The Tailwindcss utilities for the offline status.
    -   `away`: The Tailwindcss utilities for the away status.
    -   `busy`: The Tailwindcss utilities for the busy status.

## Customization

The following properties can be customized in the avatar component theme:

-   `borderRadius`
-   `statusInset`

```ts
tailus: {
    components: {
        avatar: {
            borderRadius: "full",
            statusInset: "0.5"
        }
    }
}
```

## Usage

To use the avatar component theme, simply import the appropriate variant and add the appropriate Tailwindcss utilities to the avatar element and its child elements. For example, to create a default avatar component, you would import the default `avatar` variant and add its properties to the avatar element.

## Example

### Radix-UI

```tsx
import * as Avatar from "@radix-ui/react-avatar";
import { avatar as avatarTheme } from "@tailus/themer-avatar";

const Avatar = () => (
    <div className="flex gap-5">
        <Avatar.Root className={avatarTheme.root.lg + " " + avatarTheme.topStatus.offline}>
            <Avatar.Image className={avatarTheme.image} src="" alt="Shekinah Tshiokufila" />
            <Avatar.Fallback className={avatarTheme.fallback.warning} delayMs={600}>
                ST
            </Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className={avatarTheme.root.lg}>
            <Avatar.Fallback className={avatarTheme.fallback.warning}>ST</Avatar.Fallback>
        </Avatar.Root>
    </div>
);

export default Avatar;
```
