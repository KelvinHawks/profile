import React from 'react';
import './App.css';

function App() {
  const [contacts, setContact] = React.useState({
    firstName: "John",
    lastName:"Doe",
    phone: "0712345678",
    email: "johnDoe@gmail.com",
    isFavourite: false
}
)
const starIcon = contacts.isFavourite ? "star-filled.jpg" : "star-empty.jpg"
function toggleFavourite(){
  setContact(prevstate=>{
    return{...prevstate, isFavourite: !prevstate.isFavourite}
  })
}
  return (
    <main className="App">
      <img onClick={toggleFavourite} src={`/images/${starIcon}`} width="100px"/>
      <article>
        <div>
          <h2>{contacts.firstName} {contacts.lastName}</h2>
          <p>{contacts.phone}</p>
          <p>{contacts.email}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
