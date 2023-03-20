import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="container">
      <article className="about__page">
        <h1>this is about me</h1>
      </article>

      <h2> Brief ={'>'} </h2>

      <ul className="menu">
        <strong>
          {' '}
          Hi 👋 My name is Mahmoud Zyada Abbas iam frontend Developer from 2020
        </strong>
        <li>Skills</li>
        <li> - Html Css JavaScript</li>
        <li> - BootStrap && BULMA</li>
        <li> - Git&&Github</li>
        <li> - React&&Redux</li>
        <li> - i also know some staff :</li>
        <li>
          {' '}
          - vite npm Algorism problem Solving
          <a href="../../public/Capture.PNG" target={'_blank'} className="link">
            ( codeWars ) {''}
          </a>
          also Styled Component && React Router 6 && React Icons && Axios and{' '}
          <em>More ... ...</em>
        </li>
        <strong> My Future Goal : </strong>
        <li> i want To learn React :</li>
        <li> FrameWork ={`>`} Gatsby || NextJs</li>
        <li> Testing ={`>`} Jest || React Testing Library</li>
        <li> Serverless</li>
        <li> Desktop Applications in JavaScript ={`>`} Electron</li>
      </ul>
    </section>
  );
};
export default About;
