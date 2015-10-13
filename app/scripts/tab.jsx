export class Tab extends React.Component
{
  render()
  {
    console.log("I fired");
    return(<div className="tab">{this.props.Content}</div>);
  }
}
