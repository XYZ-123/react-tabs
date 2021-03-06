export class TabHeader extends React.Component
{
  handleClick()
  {
    this.props.onHeaderClick(this.props.Id);
  }
  handleDeleteClick()
  {
    this.props.onDeleteClick(this.props.Id);
  }
  render()
  {
    var classNames =  "tab-header "+(this.props.Active ? "active":"");
    return(<div className={classNames} >
              <span onClick={this.handleClick.bind(this)}>{this.props.Header}</span>
              <span onClick={this.handleDeleteClick.bind(this)} className="tab-header__remove">X</span>
          </div>);
  }
}
