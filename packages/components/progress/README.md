# Progress Theme

## Overview

The progress component theme is a collection of Tailwindcss utilities that can be used to create progress components with a single variant. Progress components are used to indicate the progress of a task or operation.

## Installation

To install the progress component theme, run the following command:

```bash
npm install @tailus/themer-progress
```

## Importation

To import the progress component theme, you can use the following import:

```bash
import { progress } from "@tailus/themer-progress";
```

## Properties

The progress object contains the following properties:

-   `root`: The Tailwindcss utilities for the root element of the progress component.
-   `header`: The Tailwindcss utilities for the header of the progress component.
-   `indicator`: The Tailwindcss utilities for the indicator of the progress component. The indicator can have one of the following colors: `primary`, `secondary`, `accent`, `danger`, `warning`, `success`, `gray`, `gradient` or `neutral`.
-   `label`: The Tailwindcss utilities for the label of the progress component.
-   `message`: The Tailwindcss utilities for the message of the progress component.
-   `timer`: The Tailwindcss utilities for the timer of the progress component.

## Usage

To use the progress component theme, simply add the appropriate `progress` object properties to the progress element and its child elements.

### Example

#### Radix UI

```tsx
import React from "react";
import * as Progress from "@radix-ui/react-progress";
import { progress as theme } from "@tailus/themer-progress";

const ProgressUI = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(32), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Progress.Root
            className={theme.root + " w-64"}
            style={{
                // Fix overflow clipping in Safari
                // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                transform: "translateZ(0)",
            }}
            value={progress}
        >
            <Progress.Indicator
                className={theme.indicator.primary}
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    );
};

export default ProgressUI;
```
