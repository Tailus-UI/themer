# Flag themes

The @tailus/themer-flag package provides a theme for the flag component. The flag component is a versatile component that can be used to display alerts, notifications, and other types of messages.

## Installation

To install the flag package, run the following command:

`npm install @tailus/themer-flag`

## Example

```
import { flag as flagTheme } from "@tailus/themer-flag"

const FlagUI = () => (
    <div className={flagTheme.root} aria-label="Error flag" aria-describedby="error-flag-description" role="alert" >
        <div className={flagTheme.icon.parent}>
            <TimeIcon className={flagTheme.icon.danger} aria-hidden />
        </div>
        <p className={flagTheme.title.danger} id="error-flag-description">
            Update failed !{" "}
            <a href="#" className={flagTheme.link}>
                Learn more
            </a>{" "}
        </p>
        <button className={flagTheme.close.button}>
            <span className="sr-only">Dismiss alert</span>
            <TimeIcon className={flagTheme.close.icon} aria-hidden />
        </button>
    </div>
)

export default FlagUI;
```

## Default Variant

`import { flag } from "@tailus/themer-flag`

The default variant of the flag component contains the following properties:

-   `root`: Contains the utilities for the base layout of the component.
-   `icon`: Contains two properties:
    -   `parent`: The parent size utilities width and height.
    -   `icon`: The icon itself, including colors (success, danger, warning, gray, and info) and the size utilities.
-   `title`: Contains the base style utilities and the same colors as the icon.
-   `actions`: Contains utilities for aligning the action links inside.
-   `link`: Contains utilities to style the `<a href="" />` tag.
-   `close`: Contains button ghost variant utilities.
    -   `button` : Button shape
    -   `icon` : Button icon

## With Message Variant

`import { flagWithMessage } from "@tailus/themer-flag`

The with message variant of the flag component contains the following properties, in addition to the properties of the `default variant`:

-   `content`: The element that contains the main content of the flag component.
-   `message`: The element that contains the message of the flag component.

### Example

```
import { flagWithMessage as flagTheme } from "@tailus/themer-flag

const FlagWithMessage = () => (
    <div className={flagTheme.root} aria-label="Error flag" aria-describedby="error-flag-description-2" role="alert" >
        <div className={flagTheme.icon.parent}>
            <ExclamationIcon className={flagTheme.icon.info} aria-hidden />
        </div>
        <div className={flagTheme.content}>
            <h6 className={flagTheme.title.info}>New update available</h6>
            <p id="error-flag-description-2" className={flagTheme.message}>
                Your account is being used on another device, please logout and login again.
            </p>
            <div className={flagTheme.actions}>
                <a href="#" className={flagTheme.link}>
                    Free up space
                </a>
                <a href="#" className={flagTheme.link}>
                    Upgrade storage
                </a>
            </div>
        </div>
        <button className={flagTheme.close.button}>
            <span className="sr-only">Dismiss alert</span>
            <TimeIcon className={flagTheme.close.icon} aria-hidden />
        </button>
    </div>
)

export default FlagWithMessage;
```

## Customization

The following properties can be customized:

-   Border radius
-   Shadow :
    -   Size
    -   Opacity
-   Light Border color
-   Dark Border color
-   Dark background

```
tailus: {
    components: {
        flag: {
            borderRadius: "md",
            lightBorder : "100",
            darkBorder: "800",
            darkBackground : "950",
            shadow : {
                size : "lg",
                opacity : "10"
            }
        },
    },
},
```
