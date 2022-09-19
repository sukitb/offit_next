import styles from './Card.module.css';
import Image from 'next/image';

const Card = ({ title, image, duration, createActivityAt }) => {
  return (
    <div className={styles.container}>
      <Image src={image} width={50} height={50} alt="activityImg" />
      <h2>{title}</h2>
      <h3>{duration}</h3>
      <h3>{createActivityAt}</h3>
    </div>
  );
};

export default Card;
