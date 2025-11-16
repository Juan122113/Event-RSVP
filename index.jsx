const { useState } = React;

export function EventRSVPForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [checkbox, setCheckbox] = useState(false);
  const [dietary, setDietary] = useState("None");
  const [submitBool, setSubmitBool] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitBool(true);
  }
 
  return(
    <div>
      <form action="" style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:
          <input type="text" required name="name" placeholder="Name:" onChange={e => setName(e.target.value)}/>
        </label>
        <label htmlFor="email">Email:
          <input name="email" placeholder="Email:" type="email" required onChange={e => setEmail(e.target.value)}/>
        </label>
        <label htmlFor="attendees">Number of Attendees:  
          <input type="number" placeholder="Number of Attendees:" name="attendees" required min="1" onChange={e => setNumber(e.target.value)}/>
        </label>
        <label htmlFor="dietary preferences">Dietary Preferences:
          <input placeholder="Dietary Pref.: (optional)"type="text" name="dietary preferences" onChange={e => setDietary(e.target.value)}/>
        </label>
        <label htmlFor="guests">Bringing additional guests?
          <input type="checkbox" name="guests" onChange={e => setCheckbox(e.target.value)}/>
        </label>
        <button type="submit">Submit RSVP</button>
      </form>

      <div style={{display: submitBool ? "block" : "none"}}>
        <h1>RSVP Submit!</h1>

        <li>
          <ul>Name: {name}</ul>
          <ul>Email: {email}</ul>
          <ul>Number of Attendees: {number}</ul>
          <ul>Dietary Preferences: {dietary}</ul>
          <ul>Additional guests: {checkbox ? "Yes" : "No"}</ul>
        </li>
      </div>
    </div>
    
  );

}