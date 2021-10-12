import ReactDOM from 'react-dom'
import React from 'react'
import Spiner from './components/Loading'
import Search from './components/Search' 

// https://github.com/lottie-react-native/lottie-react-native

const App = () => {
    return <Search />
}
export default App

ReactDOM.render(<App />, document.querySelector('#root'))
