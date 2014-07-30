# superb-word

> A Custom Element wrapper for the awesome [superb](https://github.com/sindresorhus/superb). Displays a random superb word.

## Demo

[Check it live!](http://dotch.github.io/superb-word)

##Install

Install the component using Bower:

```sh
$ bower install dotch/superb-word --save
```

Or [download as ZIP](https://github.com/dotch/superb-word/archive/master.zip).

## Usage

1. Import Web Components polyfill:

    ```html
    <script src="bower_components/platform/platform.js"></script>
    ```

2. Import Custom Element:

    Option 1: as Html-Import:
    ```html
    <link rel="import" href="dist/superb-word.html">
    ```

    Option 2: as Script-tag:
    ```html
    <script src="dist/superb-word.js">
    ```

3. Start using it:

    ```html
    This is <superb-word></super-word>