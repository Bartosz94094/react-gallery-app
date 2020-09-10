import React from 'react';
import styles from "./App.module.css";
import Gallery from './components/gallery/Gallery';
import spinner from './assets/rolling.svg'


class App extends React.Component {

  state = {
    data: null,
  }

  componentDidMount() {
    fetch('https://picsum.photos/v2/list')
        .then(response => response.json())
        .then(data => this.setState({ data }))
        .catch(err => console.error(err));
  }
  
  render() {
    return(
      this.state.data == null?
      <img className={styles.spinner} src={spinner} alt="spinner"/>
      :
      <Gallery data={this.state.data}/>
    );
  }
}

export default App;
