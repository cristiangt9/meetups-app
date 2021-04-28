import { useState } from "react";
import { EventFormTypeCustom, EventInputTypeCustom, Meetup } from "../../typesInterfaces/form";
import Card from "../UI/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props: any) => {
  const [form, setForm] = useState<Meetup>({
    title: "",
    image: "",
    address: "",
    description: "",
  });
  const changeHandler = (event: EventInputTypeCustom) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event: EventFormTypeCustom) => {
    event.preventDefault();
    props.onAddMeetup(form);
    
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            name="title"
            value={form.title}
            onChange={changeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            name="image"
            value={form.image}
            onChange={changeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            name="address"
            value={form.address}
            onChange={changeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            name="description"
            value={form.description}
            onChange={changeHandler}
            rows={5}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
