import {TabHeader} from "./tab-header";
import {Tab} from "./tab";

export class TabHolder extends React.Component {
  constructor(props)
  {
    super(props);
    let tabs = [{Id:1, Active:true, Header:"Header of first tab",Content:"Hello from first tab"}];//window.localStorage.getItem("tabs");
    this.state = {"tabs": tabs};
  }
  handleHeaderClick(id)
  {
    console.log(`Clicked tab with id ${id}`);
  }
  render()
  {
    console.log("I fired");
    var contentNode;
    for(let tab of this.state.tabs)
    {
      if(tab.Active)
      {
        contentNode = <Tab Content={tab.Content}/>;
      }
    }
    var tabHeaders = this.state.tabs.map((tab)=>{return <TabHeader key={tab.Id} handleHeaderClick={this.handleHeaderClick.bind(this)} Id={tab.Id} Header={tab.Header} Active={tab.Active}/>});
    return (<div className="tab-holder">
                <div className="tab-headers">{tabHeaders}</div>
                <div className="tab-content">{contentNode}</div>
            </div>);
  }
}
