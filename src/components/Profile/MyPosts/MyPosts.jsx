import classes from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
    return   <div>
        my posts
      <div>
       <textarea></textarea>
       <button type="button">New Post</button>
        </div>
      <div className="post">
     <Post message="Hi!How are you?"/>
      <Post message="Hi!It`s my first post!"/>
      </div>
      </div>
} 

export default MyPosts;