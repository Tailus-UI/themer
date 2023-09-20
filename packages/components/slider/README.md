# Slider theme

## Overview

The slider component theme is a collection of Tailwindcss utilities that can be used to create slider components with different colors and styles. Slider components are used to allow users to select a value from a range of values.

## Installation

To install the slider component theme, run the following command:

`npm install @tailus/themer-slider`

## Importation

To import the slider component theme, you can use the following import:

```
import { slider } from "@tailus/themer-slider";
```

## Example

### Radix UI

```
import * as Slider from "@radix-ui/react-slider";
import {slider as sliderTheme} from "@tailus/themer-slider"

const SliderUI = () => (
    <form>
        <Slider.Root className={sliderTheme.root} defaultValue={[50]} data-orientation="vertical" max={100} step={1}>
            <Slider.Track className={sliderTheme.track}>
                <Slider.Range className={sliderTheme.range} />
            </Slider.Track>
            <Slider.Thumb className={sliderTheme.thumb} aria-label="Volume" />
        </Slider.Root>
    </form>
);

export default SliderUI;
```

## Properties

The `slider` object contains the following properties:

-   `root`: The Tailwindcss utility for the root element of the slider component.
-   `track`: The Tailwindcss utility for the track of the slider component.
-   `range`: The Tailwindcss utility for the range of the slider component.
-   `thumb`: The Tailwindcss utility for the thumb of the slider component.
