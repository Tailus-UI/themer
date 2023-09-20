# Switch

## Overview

The switch component theme is a collection of Tailwindcss utilities that can be used to create switch components with different colors and styles. Switch components are used to allow users to toggle between two states, such as on and off.

## Installation

To install the switch component theme, run the following command:

`npm install @tailus/themer-switch`

## Importation

To import the switch component theme, you can use the following import:

```
import { switchThemer } from "@tailus/themer-switch";
```

## Example

### Radix UI

```

import * as Switch from "@radix-ui/react-switch";
import { switchTheme } from "@tailus/themer-switch";

const SwitchUI = () => (
    <form>
        <div className={switchTheme.parentElement}>
            <Switch.Root className={switchTheme.root} id="airplane-mode">
                <Switch.Thumb className={switchTheme.thumb} />
            </Switch.Root>
            <label className={switchTheme.label} htmlFor="airplane-mode">
                Airplane mode
            </label>
        </div>
    </form>
);

export default SwitchUI;

```

## Properties

The switchThemer object contains the following properties:

-   `parentElement`: The Tailwindcss utility for the parent element of the switch component.
-   `root`: The Tailwindcss utility for the root element of the switch component.
-   `thumb`: The Tailwindcss utility for the thumb of the switch component.
-   `label`: The Tailwindcss utility for the label of the switch component.

## Customization

The following property can be customized:

-   `border-radius`

```
tailus: {
    components: {
        switch: {
            borderRadius: "",
        },
    },
},
```
