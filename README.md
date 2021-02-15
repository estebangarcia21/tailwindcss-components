# tailwindcss-components

An easy to use package for creating reusable TailwindCSS components in React.

## Features

- 🛠 **Typescript Support**
- 📦 **Tiny Bundle Size (1.5KB minified, 812B minified + gzipped)**
- 💨 **Rapid Installation**
- 🙂 **Easy to Use**

## Motivation

I wanted a tool that was easy to use and easy to install so that I could create reusable TailwindCSS components in a clean way with no boilerplate.

## Installation

Install tailwindcss-components through your favorite package manager.

```
npm install tailwindcss-components

or

yarn add tailwindcss-components
```

## Usage

Use the `twc` object to add styles to JSX tags.

```jsx
import twc from "tailwindcss-components"

const Header = twc.h1`text-3xl font-semibold text-gray-900`
const Text = twc.p`my-2 leading-7 text-gray-800`

const MyComponent = () => {
  return (
    <div>
      <Header>Tailwind Components</Header>
      <Text>Amazing!</Text>
    </div>
  )
}
```

## Intellisense

You can configure the TailwindCSS Intellisense plugin for VSCode to provide style completion by adding the following to your `settings.json` file...

```json
"tailwindCSS.experimental.classRegex": ["twc\\.\\w+`([^`]*)"]
```

## How it Works

`tailwindcss-components` simply passes down the style string into the `className` prop of the specified JSX tag.
