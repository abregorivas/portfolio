import React from 'react';
import Copy from 'react-icons/lib/fa/copyright';
import Facebook from 'react-icons/lib/fa/facebook-square';
import Github from 'react-icons/lib/fa/github-square';
import Linkin from 'react-icons/lib/fa/linkedin-square';
import Codepen from 'react-icons/lib/fa/codepen';
import styles from '../styles/components/_footer.scss';

const Footer = () => (
  <div className={styles.main_container}>
    <span>
      <Copy /> Roland Abregorivas
    </span>
    <span>privacy</span>
    <ul className={styles.social_media}>
      <li>
        <a title="see source code">
          <Github size={32} color={'#c6c6c6'} />
        </a>
      </li>
      <li>
        <a title="check my profile">
          <Linkin size={32} color={'#c6c6c6'} />
        </a>
      </li>
      <li>
        <a title="follow me">
          <Facebook size={32} color={'#c6c6c6'} />
        </a>
      </li>
      <li>
        <a title="see more on codepen" href="#">
          <Codepen size={32} color={'#c6c6c6'} />
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
