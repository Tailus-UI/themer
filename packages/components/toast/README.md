# Toast Component Theme

## Overview

The toast component theme is a collection of Tailwindcss utilities that can be used to create toasts with a single variant. Toasts are small, unobtrusive notifications that appear on the screen to inform users of an event or to provide feedback.

## Installation

To install the toast component theme, run the following command:

```bash
npm install @tailus/themer-toast
```

## Importation

To import the toast component theme, you can use the following import:

```tsx
import { toast } from "@tailus/themer-toast";
```

## Properties

The toast object contains the following properties:

-   `viewport`: The Tailwindcss utilities for the viewport of the toast component.
-   `root`: The Tailwindcss utilities for the root element of the toast component.
-   `header`: The Tailwindcss utilities for the header of the toast component.
-   `title`: The Tailwindcss utilities for the title of the toast component.
-   `description`: The Tailwindcss utilities for the description of the toast component.
-   `actions`: The Tailwindcss utilities for the actions of the toast component.

## Customization

The following properties can be customized:

-   border radius
-   border color on light and dark mode

**Customization that will be applied to other components (feedback components):**

-   border color on light and dark mode

You can also use the `extend` section of your Tailwind CSS config file to customize the toast component theme. For example, to add a new border radius to the toast component theme, you would add the following code to your `tailwind.config.js` file:

```javascript
module.exports = {
    extend: {
        tailus: {
            components: {
                toast: {
                    borderRdius: "xl",
                },
            },
        },
    },
};
```

## Usage

To use the toast component theme, simply add the appropriate Tailwindcss utilities using the `toast` object properties to the toast element and its child elements. For example, to create a toast component, you would add the `toast` object properties to the toast element.

### Example : Radix UI

```jsx
import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import { toast as theme } from "@tailus/themer-toast";
import { ghostButton, ghostIconButton, button } from "@tailus/themer-button";
import { Cross2Icon } from "@radix-ui/react-icons";

const ToastUI = () => {
    const [open, setOpen] = React.useState(false);
    const eventDateRef = React.useRef(new Date());
    const timerRef = React.useRef(0);

    React.useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <Toast.Provider swipeDirection="center">
            <button
                className={button.primary.lg}
                onClick={() => {
                    setOpen(false);
                    window.clearTimeout(timerRef.current);
                    timerRef.current = window.setTimeout(() => {
                        eventDateRef.current = oneWeekAway();
                        setOpen(true);
                    }, 100);
                }}
            >
                <span>Add to calendar</span>
            </button>

            <Toast.Root className={theme.root} open={open} onOpenChange={setOpen}>
                <div className={theme.header}>
                    <Toast.Title className={theme.title}>Scheduled: Catch up</Toast.Title>
                    <div className={theme.actions}>
                        <Toast.Action asChild altText="Goto schedule to undo">
                            <button className={ghostButton.primary.sm}>
                                <span>Undo</span>
                            </button>
                        </Toast.Action>
                        <Toast.Close>
                            <button className={ghostIconButton.gray.sm}>
                                <span className="sr-only">Dismiss toast</span>
                                <Cross2Icon className={ghostIconButton.icon.md} aria-hidden />
                            </button>
                        </Toast.Close>
                    </div>
                </div>
                <Toast.Description asChild>
                    <time
                        className={theme.description}
                        dateTime={eventDateRef.current.toISOString()}
                    >
                        {prettyDate(eventDateRef.current)}
                    </time>
                </Toast.Description>
            </Toast.Root>
            <Toast.Viewport className={theme.viewport} />
        </Toast.Provider>
    );
};

function oneWeekAway(date) {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7);
    return new Date(inOneWeek);
}

function prettyDate(date) {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "short" }).format(date);
}

export default ToastUI;
```
