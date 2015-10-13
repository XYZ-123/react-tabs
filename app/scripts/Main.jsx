import {TabHolder} from './tab-holder';

class App extends React.Component {
  render()
  {
    console.log("I fired");
    return (<div><TabHolder /><div className="main">Example with tabs</div></div>);
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
