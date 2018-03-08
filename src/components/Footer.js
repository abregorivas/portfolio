import React from 'react';
import Copy from 'react-icons/lib/fa/copyright';
import Facebook from 'react-icons/lib/fa/facebook-square';
import Github from 'react-icons/lib/fa/github-square';
import Linkin from 'react-icons/lib/fa/linkedin-square';
import styles from '../styles/components/_footer.scss';

const Footer = () => (
  <div className={styles.main_container}>
    <span>
      <Copy /> Roland Abregorivas
    </span>
    <span>privacy</span>
    <ul>
      <li>
        <Github size={32} color={'#252D35'} />
      </li>
      <li>
        <Linkin size={32} color={'#252D35'} />
      </li>
      <li>
        <Facebook size={32} color={'#252D35'} />
      </li>
    </ul>
  </div>
);

export default Footer;
