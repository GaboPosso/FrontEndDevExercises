class MyApp extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {
        name: 'CamperBot'
      }    
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name}/>
      </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>Hello, my name is: {this.props.name}</h1>
    )
  }
}
