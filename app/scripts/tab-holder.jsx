import {TabHeader} from "./tab-header";
import {Tab} from "./tab";
import {TabAddForm} from "./tab-add-form";
import {Identity} from "./Identity";

export class TabHolder extends React.Component {
  constructor(props)
  {
    super(props);
    let tabs = Immutable.List.of({Id:1, Active:true, Header:"Header of first tab",Content:"Hello from first tab"},
      {Id:2, Active:false, Header:"Header of second tab",Content:"Hello from second tab"});//window.localStorage.getItem("tabs");
    this.state = {tabs: tabs, showAddForm:false};
  }
  onHeaderClick(id)  {
    console.log(`Clicked tab with id ${id}`);

    var updatedList = this.state.tabs.map((value)=>{
        value.Active = (value.Id == id);
        return value;
    });
    this.setState({tabs:updatedList});
  }
  onHeaderDelete(id)  {
    console.log(`Delete tab with id ${id}`);

    var updatedList = this.state.tabs.filter((value)=>{return value.Id != id});
    this.setState({"tabs":updatedList});
  }
  onTabAdd(header, content)  {
    var tabToAdd = {Header:header,Content:content,Active:true,Id:Identity.next()};
    var updatedList = this.state.tabs.push(tabToAdd);
    this.setState({tabs:updatedList});
  }
  toggleAddForm() {
    this.setState({showAddForm: !this.state.showAddForm});
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
        break;
      }
    }
    var tabAddForm = <TabAddForm onTabAdd={this.onTabAdd.bind(this)}/>;
    var tabHeaders = this.state.tabs.map((tab, index)=>{return <TabHeader key={index}
                                                                          onHeaderClick={this.onHeaderClick.bind(this)}
                                                                          onDeleteClick={this.onHeaderDelete.bind(this)}
                                                                          Id={tab.Id}
                                                                          Header={tab.Header}
                                                                          Active={tab.Active}/>});
    return (<div className="tab-holder">
                <div className="tab-headers">{tabHeaders}</div>
                <div className="tab-content">{contentNode}</div>
                <div className="tab-tools">
                    <span onClick={this.toggleAddForm.bind(this)} className="tab-tools__add">+</span>
                  <div>{this.state.showAddForm ? tabAddForm: null}</div>
                </div>

            </div>);
  }
}
