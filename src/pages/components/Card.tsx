import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import FlowerAnimation from "./AnimationFlower";
import Image from 'next/image';

export interface ValentineGift {
  facebook_name: string;
  message: string;
}

export default function Flower() {
  const [isInput, setIsInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Subscribe to changes in the 'posts' table
    const usid = localStorage.getItem("usid");
    if (usid == "" || usid == null) {
      setIsInput(true);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.cardContainer}>
      <FlowerAnimation imagePath="/images/poppy.png" /> {/* Add flower animations */}
      <FlowerAnimation imagePath="/images/nymphea.png" />
      <FlowerAnimation imagePath="/images/rose.png" />
      <div>
        <div className={`${styles.card} ${isOpen ? styles.open : ""}`} onClick={handleClick}>
          <div className={styles.cardFront}>
            <h1>Happy Valentine&apos;s Day!</h1>
            <p>Click to open the card</p>
          </div>
          <div className={styles.cardInside}>
          <h1 className={styles.typing}>ວາເລັນທາຍນີ້ ຄືຊິບໍ່ມີດ່ອກ, ດອກມົງດອກໄມ້.................🥲🥲</h1>
          <p className={styles.typing}>ມີແຕ່ຫົວໃຈ ກັບ ໃບສີແດງໃຫ້ເຈົ້າສະແກນແລ້ວກໍຈ່າຍ</p>
            <Image
              src="/images/qr_code.jpeg" // Path to the image in the public folder
              alt="A beautiful flower"
              width={500} // Desired width of the image
              height={200} // Desired height of the image
              layout="responsive" // Optional: Makes the image responsive
            />
          </div>
        </div>
      </div>
    </div>
  );
}
