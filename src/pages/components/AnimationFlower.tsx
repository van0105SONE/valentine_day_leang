import styles from "./FlowerAnimation.module.css";
import Image from 'next/image';

export interface FlowerAnimationProps{
    imagePath:string
}


const FlowerAnimation = ({imagePath}:FlowerAnimationProps) => {
  // Number of flowers to display
  const numFlowers = 100;

  // Function to generate random positions and animations
  const generateFlowers = () => {
    const flowers = [];
    for (let i = 0; i < numFlowers; i++) {
      const isRose = Math.random() > 0.5; // Randomly choose between rose and daisy
      const size = Math.floor(Math.random() * 40 + 20); // Random size between 20 and 60
      const top = Math.random() * 100; // Random vertical position
      const left = Math.random() * 100; // Random horizontal position
      const animationDuration = Math.floor(Math.random() * 10 + 5); // Random animation duration

      flowers.push(
        <div
          key={i}
          className={`${styles.flower} ${isRose ? styles.rose : styles.daisy}`}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${animationDuration}s`,
          }}
        >
          <Image
            src={imagePath} // Path to the image in the public folder
            alt="A beautiful flower"
            width={500} // Desired width of the image
            height={300} // Desired height of the image
            layout="responsive" // Optional: Makes the image responsive
          />
        </div>
      );
    }
    return flowers;
  };

  return <div className={styles.flowerContainer}>{generateFlowers()}</div>;
};

export default FlowerAnimation;
