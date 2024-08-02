# Tailus UI Themer

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

    Import the themer plugins to set your theme and enable data-attributes customizations

```javascript
import type { Config } from 'tailwindcss'
import { shade, components, rounded, animations, palettes, palette } from '@tailus/themer'

module.exports =  {
  content: [
    // your other paths
    "./node_modules/@tailus/themer/dist/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: palettes.trust,
    },
  },
  plugins: [
    shade,
    rounded,
    components,
    animations,
    palette
  ]
} satisfies Config
```

## Customize your theme

Use `data-attributes` to customize your theme

### Palette

Use the `data-palette` attribute to change the color palette of your theme.

```html
<html data-palette="trust"></html>
```

[Learn more about palette customization](https://ui.tailus.io/react/theming/palette)

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

The `palette` plugin comes with a variety of palettes built with the tailwindcss default colors. You can effortlessly switch between these palettes or even allow your users to select the palette they prefer.

[Learn more about muilti-theming](https://ui.tailus.io/react/theming/palette#multi-theming)

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

[Learn more about the shade plugin](https://ui.tailus.io/react/theming/shade)

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

[Learn more about the rounded plugin](https://ui.tailus.io/react/theming/rounded)

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
