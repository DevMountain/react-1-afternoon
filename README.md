<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project we will create a react application that solves computer science toy problems and showcases them in a feed. The file structure has already been created for us but none of the functionality works. At the end of this project you should have an understanding of the following topics:

* Components
* State
* Import / Export
* .gitignore
* NPM install

# Live Example

<a href="https://devmountain.github.io/react-1-afternoon/">Click Me!</a>

<img src="https://github.com/DevMountain/react-1-afternoon/blob/solution/readme/1-2.png" />

## Setup

* `Fork` and `clone` this repository.
* `cd` into the project directory.
* Run `npm install`.
* After `npm install` has finished run `npm start`.

## Step 1

### Summary

In this step, we are going to dive into the functionality of the application. If we take a look into the `src` folder we'll see that we have a `components` folder with a `TopicBrowser` and a `Topics` folder. Our `TopicBrowser` component will display a list of topics from the `Topics` folder. Each topic will be its own component.

### Instructions

* Open `src/components/TopicBrowser/TopicBrowser.js`.
* Import `React` and `Component` from `react`.
* Create a basic react component called `TopicBrowser`:
  * This component should `render` one `<p>` element that says "Hello World."
* Export `TopicBrowser` by default.
* Open `src/App.js`.
* Import the `TopicBrowser` component after the `import` of react.
* Render the `TopicBrowser` component in the `render` method of `App`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `src/components/TopicBrowser/TopicBrowser.js` and importing `React, { Component }` from `react` at the top of the file. This will allow use to use JSX and create a class that extends on `Component`.

```js
import React, { Component } from 'react';
```

Now let's create a basic component that renders a `<p>` element that says "Hello World". We do this by saying `class TopicBrowser extends Component {}`. TopicBrowser is the name of the class, which can be anything you want, usually when dealing with classes it's common to see constructor camel case ( meaning the first letter is also captalized ). In React constructor camel case is required for the name of your class. If it is not constructor camel case the component will not mount or render in your application. Since this component is going to browse our topics, I went with the class name of TopicBrowser. 

```js
class TopicBrowser extends Component {

}
```

Now that we have our component `TopicBrowser` let's have it render the `<p>` element. Since we extended on `Component` we have access to a method called `render() {}`. This is the method that is called to render our JSX onto the DOM. Inside the `render` method we use a `return` statement to `return` the JSX that will be rendered. 

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

Both ways are completely fine, however I'll be using the same line `export`. Now that our `export` is setup we can `import` it in `App.js` and `render` it. We can `import` components with the following format: `import ComponentNameHere from '/file_path_to_component_here'`. Therefore our `import` in `src/components/App.js` would look like:

```js
import TopicBrowser from './components/TopicBrowser/TopicBrowser'
```

The `import` is clever enough to add on the `.js` extension for us. Now that `src/components/App.js` has `TopicBrowser` imported we can `render` it the same way rendered our `<p>` element in `TopicBrowser`. The only differencing being to `render` components you wrap the component name in `< />`. Our `src/components/App.js` should now look like: 

```js
import React, { Component } from 'react';
import './index.css';
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
import './index.css';
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

<img src="https://github.com/DevMountain/react-1-afternoon/blob/solution/readme/2-2.png" />

## Step 2

### Summary

In this step, we'll render all of our topics from the `Topics` folder, create the basic outlines for each of the topics ( the same exact way we did `TopicBrowser` ) with the only difference being the `<p>` element saying what the component name is, and then import and render those topic components into our `TopicBrowser` component.

### Instructions

* Create a basic outline for each topic component ( the same exact way we did the `TopicBrowser` component ):
  * Make sure the name of the class is the same name as the file. 
  * Have the component render a `<p>` element saying the name of the component.
* Open `src/components/TopicBrowser/TopicBrowser.js`.
* Import all the topic files from `src/components/Topics` into `src/components/TopicBrowser/TopicBrowser.js`.
* Render a parent `div` element containing all of the Topic components.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's start by going into our Topics folder. Inside we will see 5 javascript files, inside these files we will create a React component that solves a certain computer science toy problem. The basic outline is going to be similiar across these components with the only difference being the `<p>` element that gets rendered. 

Creating a React component:
* `import React, { Component } from 'react'`
* Create the class for your new component. The format is: `class ClassNameGoesHere extends Component {}`
* Use the `render() {}` method to get elements to `render` onto the DOM. JSX goes inside a `return` statement of the `render() {}` method.
* Export your newly created class either on the same line of it's declaration or at the bottom of the file.

Here is what the `EvenAndOdd` component will look like applying these bullet points.

```js
import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  render() {
    return (
      <p> EvenAndOdd Component </p>
    )
  }
}
```  

<details>

<summary> <code> FilterObject.js </code> </summary>

```js
import React, { Component } from 'react';

export default class FilterObject extends Component {
  render() {
    return (
      <p> FilterObject Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> FilterString.js </code> </summary>

```js
import React, { Component } from 'react';

export default class FilterString extends Component {
  render() {
    return (
      <p> FilterString Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> Palindrome.js </code> </summary>

```js
import React, { Component } from 'react';

export default class Palindrome extends Component {
  render() {
    return (
      <p> Palindrome Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> Sum.js </code> </summary>

```js
import React, { Component } from 'react';

export default class Sum extends Component {
  render() {
    return (
      <p> Sum Component </p>
    )
  }
}
```

</details>

<br />

After you applied the same concepts to the 4 other javascript files in the Topics folder, we'll then import them into `TopicBrowser.js`. Just like how we imported `TopicBrowser` into `App.js` we'll do:

```js
import React, { Component } from 'react';

// Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
  render() {
    return (
      
    )
  }
}
```

Now that they are imported into our `TopicBrowser` component we can render them in our `return`. Similiar to how we rendered `TopicBrowser` in `App.js` we'll wrap each component we imported in `< />`. Since we are trying to `render` more than component we'll have to wrap the components in a `div`. The `return` of a `render` method can only return one element, but there is no limit to how much you can nest in that one element. Your `TopicBrowser` should look like:

```js
import React, { Component } from 'react';

// Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    )
  }
}
```

</details>

### Solution

<details>

<summary> <code> TopicBrowser.js </code> </summary>

```js
import React, { Component } from 'react';

// Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    )
  }
}
```

</details>

<details>

<summary> <code> EvenAndOdd.js </code> </summary>

```js
import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  render() {
    return (
      <p> EvenAndOdd Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> FilterObject.js </code> </summary>

```js
import React, { Component } from 'react';

export default class FilterObject extends Component {
  render() {
    return (
      <p> FilterObject Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> FilterString.js </code> </summary>

```js
import React, { Component } from 'react';

export default class FilterString extends Component {
  render() {
    return (
      <p> FilterString Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> Palindrome.js </code> </summary>

```js
import React, { Component } from 'react';

export default class Palindrome extends Component {
  render() {
    return (
      <p> Palindrome Component </p>
    )
  }
}
```

</details>

<details>

<summary> <code> Sum.js </code> </summary>

```js
import React, { Component } from 'react';

export default class Sum extends Component {
  render() {
    return (
      <p> Sum Component </p>
    )
  }
}
```

</details>

<img src="https://github.com/DevMountain/react-1-afternoon/blob/solution/readme/3.png" />

## Step 3

### Summary

In the following steps it's important to understand that there is more than one way to solve a toy problem; if your solution doesn't match mine that's okay. Also, since the following 5 components are very similiar in their structure, only step 3's detailed instructions go into great detail. The other steps after that won't go into much detail.

In this step, we'll start with the first topic: `EvenAndOdd`.

### Instructions

<b>The problem summary:</b> Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers.

<b>The component outline:</b> One parent `div` element, one `h4` element, one `input` element, one `button` element, and two `span` elements. 

* Open `src/components/Topics/EvenAndOdd.js`.
* Remove the `<p>` element from the `return` of the `render` method.
* Add the component outline to the `return` of the `render` method.
* Add the following `className` props to the outline:
  * `div` - className="puzzleBox evenAndOddPB"
  * `input` - className="inputLine"
  * `button` - className="confirmationButton"
  * Both `span`s - className="resultsBox"
* Assign the `h4` element the value of `"Evens and Odds"`.
* Create a `constructor` method that creates an initial state:
  * `evenArray` - This should default to an empty array.
  * `oddArray` - This should default to an empty array.
  * `userInput` - This should default to an empty string.
* Create an `onChange` prop for the `input` element that updates the value of `userInput` on state.
* Create an `onClick` prop for the `button` element that calls a method on the class:
  * This method should solve the toy problem.
  * This method should update the value of `evenArray` and `oddArray` on state.
* Assign one `span` element to display the value of `evenArray`.
* Assign the other `span` element to display the value of `oddArray`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
render() {
  <div className="puzzleBox evenAndOddPB">
    <h4> Evens and Odds </h4>
    <input className="inputLine"></input>
    <button className="confirmationButton"> Split </button>
    <span className="resultsBox"></span>
    <span className="resultsBox"></span>
  </div>
}
```

Now that we have a rough draft of every thing our component will need, let's start filling in the functionality. We will use state to keep track of what the user input is, our even's array, and our odd's array. We can use state by defining a `constructor() {}` method. Before we can use `state` we have to invoke `super`. After the invocation of `super` we can create our state object with `this.state = {}` and add our three properties to it.

```js
constructor() {
  super();

  this.state = {
    evenArray: [],
    oddArray: [],
    userInput: ''
  }
}
```

Next, let's update our last two `span` elements to display our `evenArray` and `oddArray`.

```js
render() {
  <div className="puzzleBox evenAndOddPB">
    <h4> Evens and Odds </h4>
    <input className="inputLine"></input>
    <button className="confirmationButton"> Split </button>
    <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
    <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
  </div>
}
```

What's `JSON.stringify`? This is not a necassary addition, but without it your array would not display as [1,2,3,4] but rather 1234. `JSON.stringify` gives our display a more readable format. You could just do `this.state.evenArray` or `this.state.oddArray` if you want to.

Next let's update our `input` element to handle user input. In React you can use the `onChange` attribute that calls a function every time a user types in the `input` field. 

```js
render() {
  <div className="puzzleBox evenAndOddPB">
    <h4> Evens and Odds </h4>
    <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
    <button className="confirmationButton"> Split </button>
    <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
    <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
  </div>
}
```

What's `e`? `e` is the event. In this instance we can use the event to get the current value inside of the `input` element. We can access this by doing `e.target.value`. With this setup every time a user types in this `input` field our arrow function gets called, capturing the event, and then calls our method on the class called `handleChange` and passes the value that's currently in the input field. For example if I typed in the `input` field "1,2" then `handleChange` will have been called three times. Every key stroke invokes `handleChange` and passes in the current value, this would look like:

* First Time: `e.target.value` = "1"
* Second Time: `e.target.value` = "1,"
* Third Time: `e.target.value` = "1,2"

Let's add a method on our class called `handleChange` to update our `state` property `userInput`.

```js
handleChange(val) {
  this.setState({ userInput: val });
}
```

Now that our `input` functionality is finished, all that's left is getting our `button` to execute a method that solves the toy problem. In React we can execute a function on a button click by using the attribute `onClick`. Since we want to execute this method with an argument we'll nest it in an arrow function.

```js
render() {
  <div className="puzzleBox evenAndOddPB">
    <h4> Evens and Odds </h4>
    <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
    <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
    <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
    <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
  </div>
}
```

Now whenever a user clicks our `button` element our arrow function is called which calls a method on our class called `assignEvenAndOdds` and passes in the current `userInput` on `state`. Let's create this method on our class.

```js
assignEvenAndOdds(userInput) {

}
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section.

</details>

### Solution

<details>

<summary> <code> EvenAndOdd.js </code> </summary>

```js
import React, { Component } from 'react';

export default class EvenAndOdd extends Component {

  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput) {
    var arr = userInput.split(',');
    var evens = [];
    var odds = [];

    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] % 2 === 0 ) {
        evens.push( parseInt(arr[i], 10) );
      } else {
        odds.push( parseInt(arr[i], 10) );
      }
    }
    
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
        <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}
```

</details>

<br /> 

<img src="https://github.com/DevMountain/react-1-afternoon/blob/solution/readme/1g.gif" />

## Step 4 

### Summary

In this step, we'll build out the `FilterObject` component.

### Instructions

<b>The problem summary:</b> Using a pre-determined array of objects, filter out objects that do not have a given property. Display a new array populated with the objects that do have the given property.

<b>The component outline</b>: One parent `div` element, one `h4` element, one `span` element, one `input` element, one `button` element, and one `span` element.

* Open `src/components/Topics/FilterObject.js`.
* Remove the `<p>` element from the `return` of the `render` method.
* Add the component outline to the `return` of the `render` method.
* Add the following `className` props to the outline:
  * `div` - className="puzzleBox filterObjectPB"
  * The first `span` - className="puzzleText"
  * `input` - className="inputLine"
  * `button` - className="confirmationButton"
  * The last `span` - className="resultsBox filterObjectRB"
* Assign the `h4` element the value of `"Filter Object"`.
* Create a `constructor` method that creates an initial state:
  * `unFilteredArray` - This should default to an array of objects. Try to pick an array of objects that share similiar propteries but they should not be indentical objects.
  * `userInput` - This should default to an empty string.
  * `filteredArray` - This should default to an empty array.
* Create an `onChange` prop for the `input` element that updates the value of `userInput` on state.
* Create an `onClick` prop for the `button` element that calls a method on the class:
  * This method should solve the toy problem.
  * This method should update the value of `filteredArray`.
* Assign the first `span` element the value of `unFilteredArray`.
* Assign the last `span` element the value of `filteredArray`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"></span>
        <input className="inputLine"></input>
        <button className="confirmationButton"> Filter </button>
        <span className="resultsBox filterObjectRB"></span>
      </div>
    )
  }
```

Now that we have a rough draft of everything our component will need, let's start filling in the functionality. We will use state to keep tracck of what the user input is, our unfiltered array, and our filtered array. 

```js
  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredEmployees: []
    }
  }
```

Next let's update our `span` elements to display our unfiltered and filtered array of employees.

```js
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine"></input>
        <button className="confirmationButton"> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
```

Next let's update our `input` element to handle user input.

```js
  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton"> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
```

Finally let's update our `button` element to handle filtering our employee array.

```js
  filterEmployees(prop) {

  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section.

</details>

### Solution

<details>

<summary> <code> FilterObject.js </code> </summary>

```js
import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filteredEmployees: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterEmployees(prop) {
    var employees = this.state.employees;
    var filteredEmployees = [];
    
    for ( var i = 0; i < employees.length; i++ ) {
      if ( employees[i].hasOwnProperty(prop) ) {
        filteredEmployees.push(employees[i]);
      }
    }

    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
}
```

</details>

<br /> 

<img src="https://github.com/DevMountain/react-1-afternoon/blob/solution/readme/2g.gif" />

## Step 5

### Summary 

In this step, we'll build out the `FilterString` component.

### Instructions

<b>The problem summary:</b> Using a pre-determined array of strings, filter out strings that do not contain a given string. Display a new array populated with the strings that do contain the given string.

<b>The component outline:</b> One paren `div` element, one `h4` element, one `span` element, one `input` element, one `button` element, and another `span` element.

* Open `src/components/Topics/FilterString.js`.
* Remove the `<p>` element from the `return` of the `render` method.
* Add the component outline to the `return` of the `render` method.
* Add the following `className` props to the outline:
  * `div` - className="puzzleBox filterStringPB"
  * The first `span` - className="puzzleText"
  * `input` - className="inputLine"
  * `button` - className="confirmationButton"
  * The last `span` - className="resultsBox filterStringRB"
* Assign the `h4` element the value of `"Filter String`.
* Create a `constructor` method that creates an initial state:
  * `unFilteredArray` - This should default to an array of strings. You choose what strings go in the array.
  * `userInput` - This should default to an empty string.
  * `filteredArray` - This should default to an empty array.
* Create an `onChange` prop for the `input` element that updates the value of `userInput` on state.
* Create an `onClick` prop for the `button` element that calls a method on the class:
  * This method should solve the toy problem.
  * This method should update the value of `filteredArray`.
* Assign the first `span` element the value of `unFilteredArray`.
* Assign the last `span` element the value of `filteredArray`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"></span>
        <input className="inputLine"></input>
        <button className="confirmationButton"> Filter </button>
        <span className="resultsBox filterStringRB"></span>
      </div>
    )
  }
```

Now that we have a rough draft of everything our component will need, let's start filling in the functionality. We will use state to keep track of what the user input is, our unfiltered array, and our filtered array.

```js
  constructor() {
    super();

    this.state = {
      names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filteredNames: []
    };
  }
```

Next, let's update our `span` elements to display our unfiltered and filtered array of names.

```js
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
        <input className="inputLine"></input>
        <button className="confirmationButton"> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
      </div>
    )
  }
```

Next, let's update our `input` element to handle user input.

```js
  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton"> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
      </div>
    )
  }
```

Finally, let's update our `button` element to handle filtering our names array.

```js
  filterNames(userInput) {

  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
      </div>
    )
  }
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section.

</details>

### Solution

<details>

<summary> <code> FilterString.js </code> </summary>

```js
import React, { Component } from 'react';

export default class FilterString extends Component {
  
  constructor() {
    super();

    this.state = {
      names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filteredNames: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    var names = this.state.names;
    var filteredNames = [];

    for ( var i = 0; i < names.length; i++ ) {
      if ( names[i].includes(userInput) ) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
      </div>
    )
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-1-afternoon/blob/solution/readme/3g.gif" />

## Step 6

### Summary

In this step, we'll build out the `Palindrome` component.

### Instructions

<b>The problem summary:</b> Using a given string, determine if it is spelt the same backwards as it is forwards. 

<b>The component outline:</b> One parent `div` element, one `h4` element, one `input` element, one `button` element, and one `span` element.

* Open `src/components/Topics/Palindrome.js`.
* Remove the `<p>` element from the `return` of the `render` method.
* Add the component outline to the `return` of the `render` method.
* Add the following `className` props to the outline:
  * `div` - className="puzzleBox filterStringPB"
  * `input` - className="inputLine"
  * `button` - className="confirmationButton"
  * `span` - className="resultsBox"
* Assign the `h4` element the value of `"Palindrome"`.
* Create a `constructor` method that creates an initial state:
  * `userInput` - This should default to an empty string.
  * `palindrome` - This should default to an empty string.
* Create an `onChange` prop for the input element that updates the value of `userInput` on state.
* Create an `onClick` prop for the `button` element that calls a method on the class:
  * This method should solve the toy problem.
  * This method should update the value of `palindrome`.
* Assign the `span` element the value of `palindrome`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine"></input>
        <button className="confirmationButton"> Check </button>
        <span className="resultsBox"></span>
      </div>
    )
  }
```

Now that we have a rough draft of everything our component will need, let's start filling in the functionality. We will use state to keep track of what the user input is and if the user input is a palindrome or not.

```js
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }
```

Next, let's update our `span` element to display `palindrome`.

```js
  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine"></input>
        <button className="confirmationButton"> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
```

Next, let's update our `input` element to handle user input

```js
  handleChange(val) {
    this.setState({ userInput: val });
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton"> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
```

Finally, let's update our `button` element to handle setting `palindrome` to `"true"` or `"false"`.

```js
  isPalindrome(userInput) {

  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section.

</details>

### Solution

<details>

<summary> <code> Palindrome.js </code> </summary>

```js
import React, { Component } from 'react';

export default class Palindrome extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  isPalindrome(userInput) {
    var forwards = userInput;
    var backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if ( forwards === backwards ) {
      this.setState({ palindrome: 'true' });
    } else {
      this.setState({ palindrome: 'false' });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-1-afternoon/blob/solution/readme/4g.gif" />

## Step 7

### Summary

In this step, we'll build out the `Sum` component.

### Instructions

<b>The problem summary:</b> Given two numbers, calculate the sum and display it.

<b>The component outline:</b> One parent `div` element, one `h4` element, two `input` elements, one `button` element, and one `span` element.

* Open src/components/Topics/Sum.js.
* Remove the `<p>` element from the `return` of the `render` method.
* Add the component outline to the `return` of the `render` method.
* Add the following `className` props to the outline:
  * `div` - className="puzzleBox sumPB"
  * The two `input` - className="inputLine"
  * `button` - className="confirmationButton"
  * `span` - className="resultsBox"
* Assign the `h4` element the `value` of `"Sum"`.
* Create a `constructor` method that creates an initital state:
  * `number1` - This should default to `0`.
  * `number2` - This should default to `0`.
  * `sum` - This should default to `null`.
* Create an `onChange` prop for the first `input` element that updates the value of `number1` on state.
* Create an `onChange` prop for the second `input` element that updates the value of `number2` on state.
* Create an `onClick` prop for the button element that calls a method on the class:
  * This method should solve the toy problem.
  * This method should update the value of `sum`.
* Assign the `span` element the value of `sum`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number"></input>
        <input className="inputLine" type="number"></input>
        <button className="confirmationButton"> Add </button>
        <span className="resultsBox"></span>
      </div>
    )
  }
```

Now that we have a rough draft of everything our component will need, let's start filling in the functionality. We will use state to keep track of two numbers the user gives us and the sum of those two numbers.

```js
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
```

Next, let's update our `span` element to display `sum`.

```js
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number"></input>
        <input className="inputLine" type="number"></input>
        <button className="confirmationButton"> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
```

Next, let's update our `input` elements to handle user input

```js
  updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton"> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
```

Finally, let's update our `button` element to update the value of `sum`.

```js
  add(num1, num2) {

  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section.

</details>

### Solution

<details>

<summary> <code> Sum.js </code> </summary>

```js
import React, { Component } from 'react';

export default class Sum extends Component {

  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
}
```

</details>

<br />

<img src="https://github.com/DevMountain/react-1-afternoon/blob/solution/readme/5g.gif" />

## Black Diamond

To take this project a step further try to add more toy problems to the project throughout your time at DevMountain. This is completely optional, however this project has the potential to be a `showcase` of your knowledge to solve CS problems.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>


