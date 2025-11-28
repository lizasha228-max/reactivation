import classes from "./Profile.module.css";

const Profile = () => {
    return    <div className={classes.content}>
      <div className={classes.contentImg}><img src="https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1689402671_kartin-papik-pro-p-kartinki-plyazh-dlinnaya-8.jpg"/></div>
      <div>ava + scription</div>
      <div>my posts</div>
      <div>new posts</div>
      <div className="post">
      <div className="item">Post 1</div>
      <div className="item">Post 2</div>
    </div>
    </div>
} 

export default Profile