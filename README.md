<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will take a look at a react application created using `create-react-app`. The layout has already been created for us but none of the functionality works. At the end of this project you should have an understanding of the following topics:

* Components
* State
* Props
* Import / Export
* .gitignore
* NPM install

After completing this project you'll have the knowledge to add more toy problems as you complete them throughout your time at DevMountain. You can also expand from toy problems if you like by adding tricks you learn during DevMountain.

## Setup

All we need to do in order to get started is run `npm install` in the root directory of the project. After `npm install` is completed you can test to see if the project is ready to go by running `npm start`. You should see in your terminal 2 warnings, however no errors. You can choose to keep your development server running throughout the project or just remember to run `npm start` at solution stage of each step.

## Step 1

### Summary

In this step we are going to dive into the functionality of the application. If we take a look into the `src` folder we'll see that we have a `components` folder with a `TopicBrowser` and a `Topics` folder. Our `TopicBrowser` component will display a list of topics from the `Topics` folder. Each topic will be its own component. Let's start by creating our `TopicBrowser` component. 

### Instructions

Import the necssary items from 'react' and create a `TopicBrowser` class that renders a `<p>` element that says "Hello World". Then export `TopicBrowser`, import it in `App.js`, and render `TopicBrowser` in `App.js`. 

<details>

<summary> Detailed Instructions </summary>

<br />

Let's start by importing `React, { Component }` from 'react'. This will allow use to use JSX and create a class that extends on `Component`.

```js
import React, { Component } from 'react';
```

Now let's create a basic component that renders a `<p>` element that says "Hello World". We do this by saying `class TopicBrowser extends Component {}`. TopicBrowser is the name of the class, which can be anything you want, usually when dealing with classes it's common to see constructor camel case ( meaning the first letter is also captalized ). Since this component is going to browse our topics, I went with the class name of TopicBrowser. 

```js
class TopicBrowser extends Component {

}
```

Now that we have our component `TopicBrowser` let's have it render the `<p>` element. Since we extended on `Component` we have access to a method called `render() {}` this is the method that is called to render our JSX onto the DOM. Inside the `render` method we `return` the JSX. 

```js
class TopicBrowser extends Component {
  render() {
    return (
      <p> Hello World </p>
    )
  }
}
```

Then we need to `export` our `TopicBrowser` component so that other files can `import` it. You may have seen two different ways to accomplish this method. One way is exporting it at the end of the file and another way is doing it on the same line as when you declare your class. 

<details>

<summary> <code> TopicBrowser.js ( export on bottom ) </code> </summary>

```js
import React, { Component } from 'react';

class TopicBrowser extends Component {
  render() {
    return (
      <p> Hello World </p>
    )
  }
}

export default TopicBrowser;
```

</details>

<details>

<summary> <code> TopicBrowser.js ( export on same line ) </code> </summary>

```js
import React, { Component } from 'react';

export default class TopicBrowser extends Component {
  render() {
    return (
      <p> Hello World </p>
    )
  }
}
```

</details>

<br />

Both ways are completely fine, however I'll be using the same line `export`. Now that our `export` is setup we can `import` it in `App.js` and `render` it. We can `import` components with the following format: `import ComponentNameHere from '/file_path_to_component_here'`. Therefore our `import` in `App.js` would look like:

```js
import TopicBrowser from './components/TopicBrowser/TopicBrowser'
```

The `import` is clever enough to add on the `.js` extension for us. Now that `App.js` has `TopicBrowser` imported we can `render` it the same way rendered our `<p>` element in `TopicBrowser`. The only differencing being to `render` components you wrap the component name in `< />`. Our `App.js` should now look like: 

```js
import React, { Component } from 'react';
import './App.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'

class App extends Component {
  render() {
    return (
      <TopicBrowser />
    )
  }
}

export default App;
```

</details>

## Solution

<details>

<summary> <code> App.js </code> </summary>

```js
import React, { Component } from 'react';
import './App.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'

class App extends Component {
  render() {
    return (
      <TopicBrowser />
    )
  }
}

export default App;
```

</details>

<details>

<summary> <code> TopicBrowser.js </code> </summary>

```js
import React, { Component } from 'react';

export default class TopicBrowser extends Component {
  render() {
    return (
      <p> Hello World </p>
    )
  }
}
```

</details>

<img src="https://github.com/DevMountain/showcase/blob/solution/readme/1-1.png" />