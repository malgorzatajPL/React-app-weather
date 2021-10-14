import ReactDOM from 'react-dom';
import React from 'react';
import CurrentDate from './components/date';

// https://github.com/lottie-react-native/lottie-react-native

const App = () => {
    return <CurrentDate />;
};
export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
