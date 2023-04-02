### Answer These

# Explain the topics below in your own words. You can use diagrams, or you can also explain with code

1. What are the major features of React?

 ` Virtual DOM The original DOM is thereby represented by a virtual DOM. This characteristic of React helps to speed up the app development process and offers flexibility. The algorithm facilitates the replication of a web page in React’s virtual memory.Whenever the app is modified or updated, the entire UI is rendered again by the virtual DOM, by updating the components that have been modified. This reduces the time and cost taken for development.`

`JavaScript XML or JSX It is a markup syntax that describes the appearance of the interface of the app. It makes the syntax just like HTML and is used to create React components by developers.JSX is one of the best features of React JS as it makes it super easy for developers to write the building blocks.`

`React Native Uses native, rather than web components to facilitate native React JS development for Android and iOS.Basically, this feature transforms React code to render it compatible with iOS or Android platforms and provides access to their native features.`

`One-Way Data Binding This means that React uses a flow of data that is unidirectional, forcing developers to use the callback feature to edit components, and preventing them from editing them directly.The controlling of data flow from a single point is achieved with a JS app architecture component called Flux. It actually affords developers better control over the app and makes it more flexible and effective.`

`Declarative UI This feature makes React code more readable and easier to fix bugs. React JS is the best platform to develop UIs that are both exciting and engaging not just for web apps, but mobile apps as well.`
 
 `Component Based Architecture This simply means that the user interface of an app based on React JS is made up of several components, with each of them having its particular logic, written in JS.Due to this, developers can relay the data across the app without the DOM being impacted. React JS components play a huge part in deciding the app visuals and interactions.`

2. What is the difference between Element and Component? Give example fo an Element and a Component.
  
  `Give example fo an Element and a Component. React Element - It is a simple object that describes a DOM node and its attributes or properties you can say. It is an immutable description object and you can not apply any methods on it.`
 ```js
  Eg -<button class="blue"></button> 
```
  `React Component - It is a function or class that accepts an input and returns a React element. It has to keep references to its DOM nodes and to the instances of the child components.`
 ```jsx
  const SignIn = () => (
  <div>
   <p>Sign In</p>
   <button>Continue</button>
   <button color='blue'>Cancel</button>
  </div>
);
```

3. How do you decide if a value should be the state?

`if there is something which depends on that value or which is getting changed and as per that UI needs to be updated we take that value as state`

4. What are the differences between props and state?

` The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component,props can not be modified but states can be modified using setState.`

```jsx
//props
function A(props) {
  return <h1>{props.message}</h1>
}
//states

class A extends React.Component{  
  constructor(props) {  
    super(props)  
    this.state={data:"Sample Data"}  
  }  
  render() {
    return(<h2>Class State data: {this.state.data}</h2>)  
  } 
}

render(<A />, document.getElementById("root"));
render(<A message=”hello” />,document.getElementById(“root”));
```

5. Why do we pass key prop while displaying an array of elements.

`if we do not pass key prop then we will get warning while using map at the time of displaying array of elements.`

6. What is a controlled and uncontrolled component?

  `Controlled component` is where value of state can be displayed but in uncontrolled it is not,Unlike the uncontrolled component, the input form element in the controlled component is handled by the component rather than the DOM. It takes its current value through props. The changes are notified through callbacks. 
  
  `uncontrolled component` Similar to the traditional HTML form inputs, the uncontrolled component can be written using a ref to get form values from the DOM. Thus there is no need to write an event handler for every state update and the HTML elements maintain their own state that will be updated when the input value changes.