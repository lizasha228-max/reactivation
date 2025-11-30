import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
    return    <div>
      <div className={classes.contentImg}><img src="https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1689402671_kartin-papik-pro-p-kartinki-plyazh-dlinnaya-8.jpg"/></div>
      <div>ava + scription</div>
      <MyPosts />
    </div>
} 

export default Profile;