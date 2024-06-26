import styles from "./PreviousButton.module.css";
import { useNavigate, useParams } from "react-router-dom";
import blogs from "../../data/blogs";

function PreviousButton() {
  function handleClick() {
    navigate(`/blog/${prevBlog}`);
  }
  const navigate = useNavigate();
  let { title } = useParams();
  let blog = blogs.find((object) => object.title === title);
  let prevBlog;
  let disabled;
  if (blogs.indexOf(blog) === 0) {
    prevBlog = "";
    disabled = true;
  } else {
    prevBlog = blogs[blogs.indexOf(blog) - 1].title;
  }

  return disabled ? (
    <button disabled onClick={handleClick}>
      &lt;&lt;
    </button>
  ) : (
    <button onClick={handleClick}>&lt;&lt;</button>
  );
}

export default PreviousButton;
