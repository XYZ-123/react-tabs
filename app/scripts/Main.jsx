import {TabHolder} from './tab-holder';

class App extends React.Component {
  render()
  {
    console.log("I fired");
    return (<div><TabHolder /></div>);
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
