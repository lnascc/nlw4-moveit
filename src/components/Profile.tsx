import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lnascc.png" alt="Larissa Nascimento" />
      <div>
        <strong>Larissa Nascimento</strong>
        <p>
          <img src="icons/level.svg" alt="levelup" />
          Level { level }
        </p>
      </div>
    </div>
  );
}