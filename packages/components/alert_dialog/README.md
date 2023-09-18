# Alert Dialog Theme

## Overview

The alert dialog theme is a collection of Tailwindcss utilities that can be used to create alert dialogs with different variants and colors. The default variant is `alertDialog`, but there is also a centered variant called `centeredAlertDialog`. Both variants share the same properties, which can be customized to meet your needs.

## Installation

To install the alert dialog theme, run the following command:

`npm install @tailus/themer-alert-dialog`

## Importation

To import the alert dialog theme, use the following import:

```
import { alertDialog, centeredAlertDialog } from "@tailus/themer-alert-dialog";
import { centredAlertDialog as alertDialogTheme } from "@tailus/themer-alert-dialog"
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

```
import { alertDialog as alertDialogTheme } from "@tailus/themer-alert-dialog"
import { button as solidButton, ghostButton, softIconButton } from "@tailus/themer-button"
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const AlertDialogUI = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <button className={softIconButton.danger.md}>
                <span className="sr-only">Delete</span>
                <svg className={softIconButton.icon.md} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className={alertDialogTheme.overlay} />
            <AlertDialog.Content className={alertDialogTheme.content}>
                <AlertDialog.Title className={alertDialogTheme.title}>Are you absolutely sure?</AlertDialog.Title>
                <AlertDialog.Description className={alertDialogTheme.description}>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialog.Description>
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

```
import { centredAlertDialog as alertDialogTheme } from "@tailus/themer-alert-dialog"
import { button as solidButton, ghostButton, softIconButton } from "@tailus/themer-button"
import * as AlertDialog from "@radix-ui/react-alert-dialog";

const CentredAlertDialog = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <button className={softIconButton.danger.md}>
                <span className="sr-only">Delete</span>
                <svg className={softIconButton.icon.md} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className={alertDialogTheme.overlay} />
            <AlertDialog.Content className={alertDialogTheme.content}>
                <div className={alertDialogTheme.imageContainer.danger}>
                    <img className={alertDialogTheme.image} src="https://cdn-icons-png.flaticon.com/512/6460/6460112.png" alt="" />
                </div>
                <AlertDialog.Title className={alertDialogTheme.title}>Are you absolutely sure?</AlertDialog.Title>
                <AlertDialog.Description className={alertDialogTheme.description}>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialog.Description>
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

-   overlay light color
-   overlay dark color
-   alert dialog shadow
-   alert dialog light border color
-   alert dialog dark border color
-   alert dialog dark background color
-   alert dialog border radius

```
tailus: {
    components: {
        alertDialog: {
            borderRadius: "",
            borderColor : "",
            alertBackground : ""
            overlayBackground : "",
            shadow : {
                size : "",
                opacity:""
            },
            dark : {
                borderColor : "",
                alertBackground : ""
                overlayBackground : "",
            }
        },
    },
},
```
