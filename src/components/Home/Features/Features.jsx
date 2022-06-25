import GithubIcon from 'assets/images/githubLogo3.png';
import Styles from './Features.module.scss';

const Features = () => (
  <div className={Styles.container}>
    <h3>It includes following technologies.</h3>
    <div className={Styles.featureContainer}>
      <ul>
        <li>React: version 17+</li>
        <li>Redux ToolKit</li>
        <li>Material UI</li>
        <li>SASS</li>
        <li>React testing library</li>
        <li>Eslint</li>
        <li>React moduler approach</li>
        <li>Git</li>
      </ul>
    </div>

    <div className={Styles.githubLink}>
      <img src={GithubIcon} alt="github logo" />
      <div>
        <h3>Access the code on github</h3>
        <a href="https://github.com/ankit-2017/react-modular" target="_blank" rel="noreferrer">Click Here: React Starter Kit</a>
      </div>
    </div>
  </div>
);

export default Features;
