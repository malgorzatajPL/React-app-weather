import ReactDOM from 'react-dom';
import React from 'react';
import MyComponent from './components/useForecast';

// https://github.com/lottie-react-native/lottie-react-native

const App = () => {
    return <MyComponent />;
};
export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
