# Scroll Area Component Theme

## Overview

The scroll area component theme is a collection of Tailwind CSS utilities that can be used to create scroll areas with a single variant. Scroll areas are used to allow users to scroll through content that is larger than the viewport.

## Installation

To install the scroll area component theme, run the following command:

```bash
npm install @tailus/themer-scroll-area
```

## Importation

To import the scroll area component theme, you can use the following import:

```tsx
import { scrollArea } from "@tailus/themer-scroll-area";
```

## Variants

The scroll area component theme provides a single variant:

-   `Default`: The default variant.

## Props

The scroll area component theme object contains the following properties:

-   `root`: The Tailwind CSS utilities for the root element of the scroll area component.
-   `bar`: An object containing the Tailwind CSS utilities for the scrollbar elements :
    -   `horizontal`: The Tailwind CSS utilities for the horizontal scrollbar element.
    -   `vertical`: The Tailwind CSS utilities for the vertical scrollbar element.
-   `thumb`: The Tailwind CSS utilities for the scroll thumb element.

## Usage

To use the scroll area component theme, simply import the `default` variant and add the appropriate Tailwind CSS utilities to the scroll area element and its child elements. For example, to create a default scroll area component, you would import the `default` variant and add the `scrollArea` Tailwind CSS utility to the scroll area element.

```tsx
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { scrollArea as scrollAreaTheme } from "@tailus/themer-scroll-area";

const ScrollAreaUI = () => (
    <ScrollArea.Root className="h-full w-fit overflow-hidden">
        <ScrollArea.Viewport className="flex h-full w-full snap-x snap-proximity scroll-pl-12 items-center"></ScrollArea.Viewport>
        <ScrollArea.Scrollbar className={scrollAreaTheme.bar.vertical} orientation="vertical">
            <ScrollArea.Thumb className={scrollAreaTheme.thumb} />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className={scrollAreaTheme.bar.horizontal} orientation="horizontal">
            <ScrollArea.Thumb className={scrollAreaTheme.thumb} />
        </ScrollArea.Scrollbar>
    </ScrollArea.Root>
);

export default ScrollAreaUI;
```

**Note:** There is no customization available for the scroll area component theme at this time.
