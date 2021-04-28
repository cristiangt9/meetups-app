import classes from "./Card.module.css";
interface CardProps {
    children: React.ReactNode
}
const Card: React.FC<CardProps> = (props: any) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
