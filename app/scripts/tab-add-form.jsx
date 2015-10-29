import {Importance} from "./Importance";

export class TabAddForm extends React.Component
{
  handleAdd(e)
  {
    e.preventDefault();
    var header = this.refs.header.value.trim();
    var content = this.refs.content.value.trim();
    var importance = this.refs.importance.value || 1;
    if(!header || !content)
    {
      return;
    }
    this.props.onTabAdd(header, content, importance);
    this.refs.header.value = '';
    this.refs.content.value = '';
  }
  handleCancel(e)
  {
    e.preventDefault();
    this.refs.header.value = '';
    this.refs.content.value = '';
  }
  render()
  {
    return (<div className="addForm">
              <span>Header</span>
              <input placeholder="Enter tab title here" type="text" ref="header"/>
              <span>Content</span>
                <input placeholder="Enter article content here" type="text" ref="content"/>
              <span>Importance</span>
              <select ref="importance">
                <option value={Importance.Low}>Low</option>
                <option value={Importance.Medium}>Medium</option>
                <option value={Importance.High}>High</option>
              </select>
              <button onClick={this.handleAdd.bind(this)}>Add</button>
              <button onClick={this.handleCancel.bind(this)}>Cancel</button>
          </div>)
  }
}
