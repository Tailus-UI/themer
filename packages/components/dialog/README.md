# Dialog theme

## Overview

The dialog component theme is a collection of Tailwindcss utilities that can be used to create dialogs with a single variant. Dialogs are modal windows that appear in front of app content to provide critical information or ask for a decision.

## Installation

To install the dialog component theme, run the following command:

```bash
npm install @tailus/themer-dialog
```

## Importation

To import the dialog component theme, you can use the following import:

```tsx
import { dialog } from "@tailus/themer-dialog";
```

## Example

### Radix UI

```tsx
import * as Dialog from "@radix-ui/react-dialog";
import * as Toggle from "@radix-ui/react-toggle";
import { toggle } from "@tailus/themer-toggle";
import { button as buttonTheme, ghostButton } from "@tailus/themer-button";
import { dialog } from "@tailus/themer-dialog";
import { BookmarkIcon, BookmarkFilledIcon } from "@radix-ui/react-icons";

const DialogUI = () => (
    <Dialog.Root>
        <Dialog.Trigger>
            <Toggle.Root className={toggle.root.md} value="bookmark" aria-label="Bookmark">
                <BookmarkIcon className={toggle.iconBefore.primary.md} />
                <BookmarkFilledIcon className={toggle.iconAfter.primary.md} />
            </Toggle.Root>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className={dialog.overlay} />
            <Dialog.Content className={dialog.content}>
                <Dialog.Title className={dialog.title}>Sign in to bookmark</Dialog.Title>
                <Dialog.Description className={dialog.description}>
                    You need to be signed in to save your frequently used components.
                </Dialog.Description>

                <div className={dialog.actions}>
                    <Dialog.Close>
                        <button className={ghostButton.primary.md}>
                            <span>Cancel</span>
                        </button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <button className={buttonTheme.primary.md}>
                            <span>Sign in</span>
                        </button>
                    </Dialog.Close>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default DialogUI;
```

## Properties

The dialog object contains the following properties:

-   `content`: The Tailwindcss utility for the content of the dialog.
-   `overlay`: The Tailwindcss utility for the overlay that appears behind the dialog.
-   `title`: The Tailwindcss utility for the title of the dialog.
-   `description`: The Tailwindcss utility for the description of the dialog.
-   `actions`: The Tailwindcss utility for the actions in the dialog.
-   `closeButton`: The Tailwindcss utility for the close button in the dialog.

## Customization

The following properties can be customized

**Note:** Customization except the border radius will be applied to all feedback components like the flag or the alert dialog (shares the same border radius).

### Customizable properties:

-   border radius
-   light border color
-   dark border color
-   shadow size
-   shadow opacity
-   dark mode background

**Note :** All these properties can be customized trough the `alert` and `feedback` object.

```js
tailus: {
    components: {
        feedback: {
            borderColor : "200",
            shadow: {
                size: "md",
                opacity:4,
            },
            dark: {
                borderColor: "600",
                bg: "950",
            }
        },
    },
},
```
