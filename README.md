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

All we need to do in order to get started is run `npm install` in the root directory of the project. After `npm install` is completed you can test to see if the project is ready to go by running `npm start`. You should see in your terminal 2 warnings, however no errors. You can choose to keep your development server running throughout the project or just remember to run `npm start` at the solution stage of each step.

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

## Step 2

### Summary

Now that our `TopicBrowser` component is created and we know everything has been exported and imported correctly, let's remove the `<p>` element and start focusing on the functionality of the `TopicBrowser` component.

In this step we will render all of our topics from the `Topics` folder. We will start by creating basic outlines for each of the topics ( the same exact way we did `TopicBrowser` ) with the only difference being the `<p>` element saying what the component name is. We'll then import those topic components into our `TopicBrowser` component.

### Instructions

Create a basic outline for each topic component file inside of `src/Topics` and have them render a `<p>` element saying the name of the component. Then import each topic into `TopicBrowser` and render them one after another.

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

<img src="https://github.com/DevMountain/showcase/blob/solution/readme/2-1.png" />

## Step 3

### Summary

Now that our topic components are created and we know they are exported and imported correctly, let's remove the `<p>` elements and start focusing on the functionality of each topic. In the following steps it's important to understand that there is more than one way to solve a toy problem, if your solution doesn't match mine that's okay. Also, since the following 5 components are very similiar in their structure, only step 3's detailed instructions go into great detail. The other steps after that won't go into much detail.

In this step we'll start with the first topic: `EvenAndOdd`.

### Instructions

<b>The problem summary:</b> Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers.

<b>The component outline:</b> Render one `input` element, one `button` element, and two `<p>` elements. 

Let's begin by rendering our component's outline. Then use `state` to keep track of three properties: `evenArray`, `oddArray`, and `userInput`. Have the `input` element update the value of `userInput` while the user types. Have the `button` element call a method on the class that solves the toy problem and updates the values of `evenArray` and `oddArray`. Assign one `<p>` element to display the value of `evenArray` and assign the other `<p>` element to display the value of the `oddArray`. 

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
render() {
  <input></input>
  <button> Split </button>
  <p></p>
  <p></p>
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

Next, let's update our last two `<p>` elements to display our `evenArray` and `oddArray`.

```js
render() {
  <input></input>
  <button> Split </button>
  <p> Evens: { JSON.stringify(this.state.evenArray) } </p>
  <p> Odds: { JSON.stringify(this.state.oddArray) } </p>
}
```

What's `JSON.stringify`? This is not a necassary addition, but without it your array would not display as [1,2,3,4] but rather 1234. `JSON.stringify` gives our display a more readable format. You could just do `this.state.evenArray` or `this.state.oddArray` if you want to.

Next let's update our `input` element to handle user input. In React you can use the `onChange` attribute that calls a function every time a user types in the `input` field. 

```js
render() {
  <input onChange={ (e) => this.handleChange(e.target.value) }></input>
  <button> Split </button>
  <p> Evens: { JSON.stringify(this.state.evenArray) } </p>
  <p> Odds: { JSON.stringify(this.state.oddArray) } </p>
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
  <input onChange={ (e) => this.handleChange(e.target.value) }></input>
  <button onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
  <p> Evens: { JSON.stringify(this.state.evenArray) } </p>
  <p> Odds: { JSON.stringify(this.state.oddArray) } </p>
}
```

Now whenever a user clicks our `button` element our arrow function is called which calls a method on our class called `assignEvenAndOdds` and passes in the current `userInput` on `state`. Let's create this method on our class.

```js
assignEvenAndOdds(userInput) {

}
```

How you solve the toy problem is up to you, if you can't figure it out, check out the solution section.

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

  handleChange(e) {
    this.setState({ userInput: e.target.value });
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
      <div>
        <input value={this.state.userInput} onChange={ (e) => this.handleChange(e) }></input>
        <button onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
        <p> Evens: { JSON.stringify(this.state.evenArray) } </p>
        <p> Odds: { JSON.stringify(this.state.oddArray) } </p>
      </div>
    )
  }
}
```

</details>

<br /> 

<b> Insert giphy here of flow once the app has been styled </b>

## Step 4 

### Summary

In this step we are going to do the same thing but now with our component `FilterObject`. 

### Instructions

<b>The problem summary:</b> Using a pre-determined array of objects, filter out objects that do not have a given property. Display a new array populated with the objects that do have the given property.

<b>The component outline</b>: Render one `input` element, one `button` element, and two `<p>` elements.

Let's begin by rendering our component's outline. Then use state to keep track of three properties: `unFiltertedArray`, `userInput`, and `filteredArray`. Have the `input` element update the value of `userInput` while the user types. Have the `button` element call a method on the class that solves the toy problem and updates the value of `filteredArray`. Assign one `<p>` element the value of `unFilteredArray` and the other `<p>` element the value of `filteredArray`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
  render() {
    return (
      <div>
        <p></p>
        <input></input>
        <button> Filter </button>
        <p></p>
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

Next let's update our `<p>` elements to display our unfiltered and filtered array of employees.

```js
  render() {
    return (
      <div>
        <p> Original: { JSON.stringify(this.state.employees, null, 10) } </p>
        <input></input>
        <button> Filter </button>
        <p> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </p>
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
      <div>
        <p> Original: { JSON.stringify(this.state.employees, null, 10) } </p>
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button> Filter </button>
        <p> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </p>
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
      <div>
        <p> Original: { JSON.stringify(this.state.employees, null, 10) } </p>
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <p> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </p>
      </div>
    )
  }
```

How you solve the toy problem is up to you, if you can't figure it out, check out the solution section.

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
      <div>
        <p> Original: { JSON.stringify(this.state.employees, null, 10) } </p>
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <p> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </p>
      </div>
    )
  }
}
```

</details>

<br /> 

<b> Insert giphy here of flow once the app has been styled </b>

## Step 5

### Summary 

In this step we are going to build out our `FilterString` component.

### Instructions

<b>The problem summary:</b> Use a pre-determined array of strings, filter out strings that do not contain a given string. Display a new array populated with the strings that do contain the given string.

<b>The component outline:</b> Render one `<p>` element, one `input` element, one `button` element, and another `<p>` element.

Let's begin by rendering our component's outline. Then use state to keep track of three properties: `unFilteredArray`, `userInput`, and `filteredArray`. Have the `input` elment update the value of `userInput` while the user types. Have the `button` element call a method on the class that solves the toy problem and updates the value of `filteredArray`. Assign one `<p>` element the value of `unFilteredArray` and the other `<p>` element the value of `filteredArray`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by rendering our component's outline.

```js
  render() {
    return (
      <div>
        <p></p>
        <input></input>
        <button> Filter </button>
        <p></p>
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

Next, let's update our `<p>` elements to display our unfiltered and filtered array of names.

```js
  render() {
    return (
      <div>
        <p> Names: { JSON.stringify(this.state.names, null, 10) } </p>
        <input></input>
        <button> Filter </button>
        <p> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </p>
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
      <div>
        <p> Names: { JSON.stringify(this.state.names, null, 10) } </p>
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button> Filter </button>
        <p> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </p>
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
      <div>
        <p> Names: { JSON.stringify(this.state.names, null, 10) } </p>
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <p> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </p>
      </div>
    )
  }
```

How you solve the toy problem is up to you, if you can't figure it out, check out the solution section.

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
      <div>
        <p> Names: { JSON.stringify(this.state.names, null, 10) } </p>
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <p> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </p>
      </div>
    )
  }
}
```

</details>