import classes from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
    return   <div className={classes.mypost__main}>
        My Posts
      <div>
        <div className={classes.post__area}><textarea></textarea></div>
       <button type="button">New Post</button>
        </div>
      <div className="post">
     <Post message="Hi!How are you?" likescount="0"/>
      <Post message="Hi!It`s my first post!" likescount="25"/>
      </div>
      </div>
} 

export default MyPosts;