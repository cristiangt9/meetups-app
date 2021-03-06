import Card from "../UI/Card";
import classes from "./MeetupItem.module.css";

interface MeetupItemProps {
  id: string;
  image: string;
  title: string;
  address: string;
  description: string;
}

const MeetupItem: React.FC<MeetupItemProps> = ({
  id,
  image,
  title,
  address,
  description,
}) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
