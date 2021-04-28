import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

interface MeetupListProps {
  meetups: Array<any>
}

const MeetupList: React.FC<MeetupListProps> = ({meetups}) => {
  return <ul className={classes.list}>
    {meetups.map((meetup: any) => 
      <MeetupItem
       key={meetup.id}
       id={meetup.id}
       title={meetup.title}
       image={meetup.image}
       description={meetup.description}
       address={meetup.address}
      />
    )}
  </ul>;
};

export default MeetupList;
