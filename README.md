# Tailus Themer

Tailwind CSS Styling Library for Building Modern, Consistent and Accessible Web UIs with Radix UI, Melt UI, and Radix Vue.

## Concept

Imagine Tailus Themer as a secret style vault for our UI Kits. It uses Tailwind CSS, making it super easy to customize the look and feel of your components. This means you get a consistent design foundation across all these UI Kits, but with the freedom to tweak things to perfectly match your brand.

## Features

-   🎨 Built-in Palettes
-   🎨 Multi-Theming
-   🛠️ Effortless Customization
-   🚀 Expanded Component Variants
-   ♿ Accessibility First
-   🌟 Modern & Trendy

## Quick Start

1. **Install Tailus Themer:**

```bash
npm install @tailus/themer
```

2. **Update your tailwindcss config**

    Import the themer preset to set default theme and enable data-attributes customizations

```javascript
import type { Config } from 'tailwindcss'
import { themer, grayColorVariables } from '@tailus/themer'

module.exports =  {
  content: [
    // your other paths
    "./node_modules/@tailus/themer/dist/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gray: grayColorVariables,
      },
    },
  },
  presets: [
    themer
  ]
} satisfies Config
```

Under normal circumstances, it's not necessary to add the `gray` color to your Tailwind CSS configuration. However, because Tailwind CSS generates the `gray` color from the `defaultTheme` object, you must include it in your configuration to prevent any errors.

## Customize your theme

Use `data-attributes` to customize your theme

### Palette

Use the `data-palette` attribute to change the color palette of your theme.

```html
<html data-palette="trust"></html>
```

[Learn more about palette customization]()

The available palettes are:

-   `trust`
-   `romance`
-   `passion`
-   `nature`
-   `energy`
-   `mystery`
-   `oz`
-   `spring`
-   `winter`

#### Multi-Theming

The `palette` plugin comes with a variety of palettes built with the tailwindcss default colors. You can effortlessly switch between these palettes or even allow your users to select the theme they prefer.

[Learn more about muilti-theming]()

### Shade

You can adjust the background and border colors of your theme using the `data-shade` attribute. This change is more noticeable in dark mode.

```html
<html data-shade="900"></html>
```

The available shades are:

-   `800`
-   `900`
-   `925`
-   `950`
-   `glassy`

[Learn more about the shade plugin]()

### Rounded

You can adjust the border radius of your theme using the `data-rounded` attribute.

```html
<html data-rounded="xlarge"></html>
```

The available rounded values are:

-   `none`
-   `default`
-   `small`
-   `medium`
-   `large`
-   `xlarge`
-   `2xlarge`
-   `3xlarge`
-   `full`

[Learn more about the rounded plugin]()

### Shadow

You can adjust the shadow of your theme using the `data-shadow` attribute. ( ⚠️ Not yet available)

```html
<html data-shadow="medium"></html>
```

The available shadow values are:

[Learn more about the rounded plugin]()

## Contributing

Tailus Themer is an open source project and contributions from the community are always the welcome. If you have any ideas or suggestions for how to improve Tailus Themer, please feel free to open an issue or submit a pull request.

## Support

If you have any questions or need help with using Tailus Themer, please feel free to reach out on Twitter.

## License

Tailus Themer is licensed under the MIT license.

## Author

-   [Méschac Irung](https://twitter.com/meschacirung)

## Credits

-   [Tailwind CSS](https://www.tailwindcss.com)
-   [Radix UI](https://www.radix-ui.com/)
-   [Tailwind Variants](https://www.tailwind-variants.org/docs/introduction)
-   [Flowbite Theme](https://flowbite.com/)
-   Special thanks to [Shekinah Tshiokufila](https://twitter.com/tshiokufila) for the continuous support and feedback.
-   Special thanks to [Théo Balick](https://twitter.com/theo_balick) whose brainstorming sessions and research fueled the creation of Tailus Themer.
