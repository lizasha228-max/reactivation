import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.contentImg}>
        <img src="https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1689402671_kartin-papik-pro-p-kartinki-plyazh-dlinnaya-8.jpg" />
      </div>
      <div className={classes.main__content}>
        <div>ava + scription</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
