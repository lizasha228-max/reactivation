import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.main__wrapper}>
      <div className={classes.dialogs}>
        <div className={classes.dialog}>
          <DialogItem name="Liza" id="1" />
          <DialogItem name="Anna" id="2" />
          <DialogItem name="Mishel" id="3" />
          <DialogItem name="Serhii" id="4" />
          <DialogItem name="Kristian" id="5" />
        </div>
      </div>
      <div className={classes.messages}>
        <Message message="Hi!" />
        <Message message="Hi!How are you?" />
        <Message message="I`m fine" />
        <Message message="How will you celebrate New Year?" />
        <Message message="I will celebrate with my parents<" />
      </div>
    </div>
  );
};

export default Dialogs;
