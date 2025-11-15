const { useState } = React;

export function EventRSVPForm() {

  // let submitBool = false;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [checkbox, setCheckbox] = useState();
  const [dietary, setDietary] = useState("");
  const [submitBool, setSubmitBool] = useState(false);

  //const handleInputChanged = ((e) => {});

  const handleSubmit = (e) => {
      e.preventDefault();
      // submitBool=true;
      setSubmitBool(true);
      console.log(submitBool);
  }
  console.log(submitBool);
  // const rsvpSubm = (submitBool) => {submitBool ? "block" : "none"}

  // function rsvpSubm(submitBool) {
  //   submitBool ? "block" : "none";
  // }
 
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
      </div>
      {/* {if (submitBool) {
        <div></div>
        }
      }; */}
      <div>
        {/* {if (submitBool) {
        <div></div>
        } */}
        {/* {submitBool : <div></div> : } */}
      </div>
    </div>

    // {if (submitBool) {
    //   <div></div>
    //   }
    // }
  );

}