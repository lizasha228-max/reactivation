import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={classes.main__wrapper}>
      <div className={classes.dialogs}>
        <div className={classes.dialog}>
            <div>
           <NavLink to="/dialogs/1"> Anna </NavLink>
            </div>
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to="/dialogs/2"> Liza </NavLink>
            </div>
        <div className={classes.dialog}>
            <NavLink to="/dialogs/3"> Mishel </NavLink>
            </div>
        <div className={classes.dialog}>
           <NavLink to="/dialogs/4"> Serhii </NavLink> 
            </div>
        <div className={classes.dialog}>
           <NavLink to="/dialogs/5"> Kristian </NavLink> 
            </div>
            </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi!</div>
        <div className={classes.message}>Hi!How are you?</div>
        <div className={classes.message}>I`m fine</div>
        <div className={classes.message}>How will you celebrate New Year?</div>
        <div className={classes.message}>I will celebrate with my parents</div>
      </div>
    </div>
  );
};

export default Dialogs;
