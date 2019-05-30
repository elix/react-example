This repository shows how a React project can consume any web component, including any web component from the [Elix](https://component.kitchen/Elix) library.


# Quick start

Enter the following in a terminal window:

```
git clone git@github.com:elix/react-example.git
cd react-example
npm install
npm run build
npx http-server
```

Then open [http://localhost:8080](http://localhost:8080) to view the sample page.


# Using web components in React

Web components like the ones in the Elix library are defined as JavaScript classes that you can manipulate as markup in HTML or directly in your JavaScript/TypeScript code.


## Instantiating web components in markup

Load the source file for the desired Elix component as a module. You can bundle it into your application using a bundler like webpack, or load it directly as shown here:

```html
<html>
  <head>
    <script type="module" src="node_modules/elix/src/ListBox.js"></script>
  </head>
  <body>
    <elix-list-box aria-label="Fruits" style="height: 250px; max-width: 300px">
      <div>Acai</div>
      <div>Akee</div>
      <div>Apple</div>
      <div>Apricot</div>
      <div>Avocado</div>
      <div>Banana</div>
      <!-- etc. -->
    </elix-list-box>
  </body>
</html>
```

Once the component module is loaded, you can then instantiate the component with its tag name. The tag name for the [ListBox](https://component.kitchen/elix/ListBox) component is `elix-list-box`. If desired, you can then set properties on the component as attributes.


## Instantiating web components in JSX

Each Elix component module exposes a default export that you can `import` into your JavaScript/TypeScript application.

```jsx
// Import the Elix components we want to use.
import 'elix/src/ListBox.js';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <elix-list-box aria-label="Fruits" selected-index="0">
        <div>Acai</div>
        <div>Akee</div>
        <div>Apple</div>
        <div>Apricot</div>
        <div>Avocado</div>
        <div>Banana</div>
        <!-- etc. -->
      </elix-list-box>
    );
  }

}
```

In JSX, you can reference the component by its tag name. You can then pass data to it as attributes. The sample above sets both the standard `aria-label` attribute and the custom `selected-index` attribute, which sets the `ListBox`'s `selectedIndex` property to the desired index. Normally your React application would track the `selectedIndex` as state and update that state by listening to an event on the `ListBox`; see `src/app.jsx` for more complete sample source code.
