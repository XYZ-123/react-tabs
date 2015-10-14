import {TabHeader} from "./tab-header";
import {Tab} from "./tab";

export class TabHolder extends React.Component {
  constructor(props)
  {
    super(props);
    let tabs = Immutable.List.of({Id:1, Active:true, Header:"Header of first tab",Content:"Hello from first tab"},
      {Id:2, Active:false, Header:"Header of second tab",Content:"Hello from second tab"});//window.localStorage.getItem("tabs");
    this.state = {"tabs": tabs};
  }
  handleHeaderClick(id)
  {
    console.log(`Clicked tab with id ${id}`);
  }
  handleHeaderDelete(id)
  {
    console.log(`Delete tab with id ${id}`);
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
    var tabHeaders = this.state.tabs.map((tab, index)=>{return <TabHeader key={index}
                                                                          handleHeaderClick={this.handleHeaderClick.bind(this)}
                                                                          handleDeleteClick={this.handleHeaderDelete.bind(this)}
                                                                          Id={tab.Id}
                                                                          Header={tab.Header}
                                                                          Active={tab.Active}/>});
    return (<div className="tab-holder">
                <div className="tab-headers">{tabHeaders}</div>
                <div className="tab-content">{contentNode}</div>
                <div className="tab-tools">
                    <span className="tab-tools__add">+</span>
                </div>
            </div>);
  }
}
