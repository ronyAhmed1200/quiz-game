### Quiz game

This is a quiz game (project no. 1) which is created with react, redux and tailwind.

![Try some quiz](https://ronyahmed1200.github.io/quiz-game/)

For a working tailwind, follow the docs of tailwind with create-react-app. Otherwise it doesn't work.

### How we made this?

- for material ui alert box: `npm install @mui/material @emotion/react @emotion/styled`

### How to get icons in react?

there are two process:

1. using react icons: `npm install react-icons --save`. Then use it like this way. This is the most better way.

```
import { FaBeer } from 'react-icons/fa';
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
```

2. using fontawesome cdn in head of index.html.. and using `<i class='fas fa-github fa-3x'/>` this way.

### some important note:

1. when button gets clicked, it fires an `event`
   you can catch that event
   in your case that `event` is called event

in the even there are many properties (you can check them by using `console.log(event)`
event.target is one of the properties
it refers to the element that has been clicked

2. There is one interesting way of swapping:

````var a = 1;
var b = 2;
[a,b] = [b,a];```
````
