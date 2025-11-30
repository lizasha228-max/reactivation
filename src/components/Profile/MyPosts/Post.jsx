import classes from "./Post.module.css";

const Post = (props) => {
    return  <div className={classes.item}>
      <img src="https://img.freepik.com/premium-vector/young-blonde-woman-social-media-avatar_506604-469.jpg" />
       {props.message}
        <div>
          <span>Like</span>{props.likescount}
        </div>
        </div>
} 

export default Post;