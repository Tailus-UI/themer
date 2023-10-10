# Empty State

## Overview

The empty state component theme is a collection of Tailwindcss utilities that can be used to create empty state components with different colors and styles. Empty state components are used to inform users that there is currently no data to display.

## Installation

To install the empty state component theme, run the following command:

```bash
npm install @tailus/themer-empty-state
```

## Importation

To import the empty state component theme, you can use the following import:

```tsx
import { emptyState } from "@tailus/themer-empty-state";
```

## Properties

The empty state object contains the following properties:

-   `root`: The Tailwindcss utility for the root element of the empty state component.
-   `imageContainer`: An object containing the Tailwindcss utilities for the image container in the empty state component. The object contains the following properties:
    -   `primary`: The Tailwindcss utility for the image container when the empty state component has a primary image.
    -   `secondary`: The Tailwindcss utility for the image container when the empty state component has a secondary image.
    -   `accent`: The Tailwindcss utility for the image container when the empty state component has an accent image.
    -   `success`: The Tailwindcss utility for the image container when the empty state component has a success image.
    -   `info`: The Tailwindcss utility for the image container when the empty state component has an info image.
    -   `warning`: The Tailwindcss utility for the image container when the empty state component has a warning image.
    -   `danger`: The Tailwindcss utility for the image container when the empty state component has a danger image.
    -   `gray`: The Tailwindcss utility for the image container when the empty state component has a gray image.
-   `image`: The Tailwindcss utility for the image in the empty state component.
-   `content`: The Tailwindcss utility for the content of the empty state component.
-   `title`: The Tailwindcss utility for the title of the empty state component.
-   `description`: The Tailwindcss utility for the description of the empty state component.

## Example

```tsx
import { emptyState } from "@tailus/themer-empty-state";
import { outlinedButton } from "@tailus/themer-button";

const EmptyStateUI = () => (
    <div className={emptyState.root}>
        <div className={emptyState.imageContainer.gray}>
            <img
                className={emptyState.image}
                src=""
                alt="Tailus disconnected user empty state"
                width={512}
                height={512}
            />
        </div>
        <div className={emptyState.content}>
            <h3 className={emptyState.title}>You're offline</h3>
            <p className={emptyState.description}>We've got something for everyone.</p>
        </div>
        <button className={outlinedButton.info.md}>
            <span>Retry</span>
        </button>
    </div>
);

export default EmptyStateUI;
```

**Note:** There is no customization available for the `empty-state` component theme at this time.
