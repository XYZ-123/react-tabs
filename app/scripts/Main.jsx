import {TabHolder} from './tab-holder';

class App extends React.Component {
  render()
  {
    console.log("I fired");
    console.log(TabHolder);
    return (<div><TabHolder /><div className="main">Example with tabs</div></div>);
  }
}

React.render(<App />, document.getElementById("container"));
