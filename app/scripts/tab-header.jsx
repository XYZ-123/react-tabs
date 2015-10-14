export class TabHeader extends React.Component
{
  handleClick()
  {
    this.props.handleHeaderClick(this.props.Id);
  }
  handleDeleteClick()
  {
    this.props.handleDeleteClick(this.props.Id);
  }
  render()
  {
    console.log("I fired");
    var classNames =  "tab-header "+(this.props.Active ? "active":"");
    console.log(classNames);
    return(<div className={classNames} onClick={this.handleClick.bind(this)}>
              {this.props.Header}
              <span onClick={this.handleDeleteClick.bind(this)} className="tab-header__remove">X</span>
          </div>);
  }
}
