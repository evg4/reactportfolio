import styles from "./BlogPost.module.css";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs";
import BackButton from "../BackButton/BackButton";

function BlogPost() {
  let { title } = useParams();
  let blog = blogs.find((object) => object.title === title);
  return (
    <div className={styles.blogPost}>
      <section>
        <h2>{title}</h2>
        <p>{`${blog.day}.${blog.month}.${blog.year}`}</p>
        <img></img>
        <p>{blog.fullText}</p>
      </section>
      <BackButton />
    </div>
  );
}

export default BlogPost;
