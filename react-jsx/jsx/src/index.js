import React from 'react';
import ReactDOM from 'react-dom';

const App = function() {
    return <div>Hi there!</div>;
};
// Equals to: 
// const App = () => {
//     return React.createElement(
//         "div",
//         null,
//         "Hi there!"      
//     );
// };
// Convert by babel, JSX is an easier way to write the "behind the scenes" function calls.

ReactDOM.render(<App />, document.querySelector('#root'));