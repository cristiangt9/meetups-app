import MeetupList from "../components/meetups/MeetupList";
import classes from "./AllMeetups.module.css";
import DUMMY_DATA from "./DummyData";

const AllMeetups = () => {
  return (
    <>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA}/>
    </>
  );
};

export default AllMeetups;
