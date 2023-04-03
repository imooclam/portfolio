import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <article className="Error">
      <h1> sorry wrong Page 😢😢😢</h1>
      <Link to="project" className="btn btn-primary">
        Show me Project
      </Link>
    </article>
  );
};
export default Error;
