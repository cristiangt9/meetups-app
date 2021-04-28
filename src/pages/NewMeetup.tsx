import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { Meetup } from "../typesInterfaces/form";

const NewMeetup = () => {

  const addMeetupHandler = (dataForm: Meetup) => {
    
  }
  return <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </section>;
};

export default NewMeetup;
