import React from 'react';
import ReactDOM from 'react-dom';
import ListBox from 'elix/elements/ListBox';
import items from './items';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: items,
      selectedIndex: 0
    };
  }

  componentDidMount() {
    this.refs.list.addEventListener('selected-index-changed', event => {
      this.setState({
        selectedIndex: event.detail.selectedIndex
      });
    });
  }

  render() {
    const itemElements = this.state.items && this.state.items.map(item => (
      <div key={item}>{item}</div>
    ));
    return (
      <div>
        <h1>React app with an Elix list box</h1>
        <p>
          Selection: {this.state.items[this.state.selectedIndex]}
        </p>
        <elix-list-box
            ref="list"
            aria-label="Fruits"
            selected-index={this.state.selectedIndex}
            style={{height: "295px", maxWidth: "400px"}}>
          {itemElements}
        </elix-list-box>
      </div>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));
