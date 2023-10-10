# Alert Dialog Theme

## Overview

The alert dialog theme is a collection of Tailwindcss utilities that can be used to create alert dialogs with different variants and colors. The default variant is `alertDialog`, but there is also a centered variant called `centeredAlertDialog`. Both variants share the same properties, which can be customized to meet your needs.

## Installation

To install the alert dialog theme, run the following command:

```bash
npm install @tailus/themer-alert-dialog
```

## Importation

To import the alert dialog theme, use the following import:

```tsx
import { alertDialog, centeredAlertDialog } from "@tailus/themer-alert-dialog";
import { centredAlertDialog as alertDialogTheme } from "@tailus/themer-alert-dialog";
```

## Variants

The following variants are available :

-   `alertDialog`: The default variant.
-   `centeredAlertDialog`: A variant that centers the alert dialog content.

### Properties

The following properties are available for both variants:

-   `content`: The Tailwindcss utility for the content of the alert dialog.
-   `overlay`: The Tailwindcss utility for the overlay that appears behind the alert dialog.
-   `title`: The Tailwindcss utility for the title of the alert dialog.
-   `description`: The Tailwindcss utility for the description of the alert dialog.
-   `actions`: The Tailwindcss utility for the actions in the alert dialog.
-   `imageContainer`: An object containing the Tailwindcss utilities for the image container in the alert dialog. The object contains the following properties:
-   `info`: The Tailwindcss utility for the image container when the alert dialog has an info icon.
-   `warning`: The Tailwindcss utility for the image container when the alert dialog has a warning icon.
-   `danger`: The Tailwindcss utility for the image container when the alert dialog has a danger icon.
-   `image`: The Tailwindcss utility for the image in the alert dialog.

## Examples

### Radix UI

#### Default variant

```tsx
import { alertDialog as alertDialogTheme } from "@tailus/themer-alert-dialog";
import { button as solidButton, ghostButton, softIconButton } from "@tailus/themer-button";
import { TrashIcon } from "@radix-ui/react-icons";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const AlertDialogUI = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <button className={softIconButton.danger.md}>
                <span className="sr-only">Delete</span>
                <TrashIcon className={softIconButton.icon.md} aria-hidden />
            </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className={alertDialogTheme.overlay} />
            <AlertDialog.Content className={alertDialogTheme.content}>
                <AlertDialog.Title className={alertDialogTheme.title}>
                    Are you absolutely sure?
                </AlertDialog.Title>
                <AlertDialog.Description className={alertDialogTheme.description}>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                </AlertDialog.Description>
                <div className={alertDialogTheme.actions}>
                    <AlertDialog.Cancel asChild>
                        <button className={ghostButton.gray.md}>
                            <span>Cancel</span>
                        </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <button className={solidButton.danger.md}>
                            <span>Delete</span>
                        </button>
                    </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
);

export default AlertDialogUI;
```

#### Centered variant

```tsx
import { centredAlertDialog as alertDialogTheme } from "@tailus/themer-alert-dialog";
import { button as solidButton, ghostButton, softIconButton } from "@tailus/themer-button";
import { TrashIcon } from "@radix-ui/react-icons";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const CentredAlertDialog = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <button className={softIconButton.danger.md}>
                <span className="sr-only">Delete</span>
                <TrashIcon className={softIconButton.icon.md} aria-hidden />
            </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className={alertDialogTheme.overlay} />
            <AlertDialog.Content className={alertDialogTheme.content}>
                <div className={alertDialogTheme.imageContainer.danger}>
                    <img
                        className={alertDialogTheme.image}
                        src="https://cdn-icons-png.flaticon.com/512/6460/6460112.png"
                        alt=""
                    />
                </div>
                <AlertDialog.Title className={alertDialogTheme.title}>
                    Are you absolutely sure?
                </AlertDialog.Title>
                <AlertDialog.Description className={alertDialogTheme.description}>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                </AlertDialog.Description>
                <div className={alertDialogTheme.actions}>
                    <AlertDialog.Cancel asChild>
                        <button className={ghostButton.gray.md}>
                            <span>Cancel</span>
                        </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <button className={solidButton.danger.md}>
                            <span>Delete</span>
                        </button>
                    </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
);

export default CentredAlertDialog;
```

## Customization

The following properties can be customized:

-   shadow
-   border radius

```js
tailus: {
    components: {
        alertDialog: {
            rounded: "xl",
            shadow: {
                size: "md",
                opacity:5,
            }
        },
    },
},
```
