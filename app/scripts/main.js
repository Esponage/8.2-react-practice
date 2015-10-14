// var rootElement = (
//   <div>
//     <h1>Contacts</h1>
//     <ul>
//       <li>
//         <h2>James Nelson</h2>
//         <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a>
//       </li>
//
//       <li>
//         <h2>Joe Citizen</h2>
//         <a href="mailto:joe@example.com">joe@example.com</a>
//       </li>
//     </ul>
//   </div>
// );
//
// ReactDOM.render(rootElement, document.getElementById('react-app'))

var newContact = {name: '', email: '', description: ''};

var contacts = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 2, name: "Jim", email: "jim@example.com"},
  {key: 3, name: "Joe"},
];

var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },

  render(){
    return (
      <li>
        <h2>{this.props.name}</h2>
        <a href={'mailto:' + this.props.email}>{this.props.email}></a>
        <div>{this.props.description}</div>
      </li>
    )
  }
});

var contactItemElements = contacts
  .filter(function(contact) {
     return contact.email;
   })
  .map(function(contact) {
    return <ContactItem {...contact} />;
  });

  var RootElement = React.createClass({
    render() {
      return(
    <div>
      <h1>Contacts</h1>
      <ul>
        {contactItemElements}
      </ul>
        <ContactForm contact={this.props.contact}></ContactForm>
     </div>
    )
  }
})



// HERE BEGINS EXERCISE 3 OF PART 1

var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
},

  render(){
    return (
      <form>
        <input type="text" placeholder="Name (required)" value={this.props.contact.name} />
          <input type="email" placeholder="Email" value={this.props.contact.email} />
            <textarea placeholder="Description" value={this.props.contact.description} />
            <button type="submit">Add Contact</button>
      </form>
    )
  }
});

ReactDOM.render(<RootElement contact={newContact}/>, document.getElementById('react-app'));
