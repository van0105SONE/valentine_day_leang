import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import FlowerAnimation from "./AnimationFlower";
import { createClient } from "../../utils/supabase/server";
import SocialCardForm from "./InputCardForm";

export interface ValentineGift {
  facebook_name: string;
  message: string;
}

export default function Flower() {
  const [isInput, setIsInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [valentineGift, setValentineGift] = useState<ValentineGift | undefined>();




  const addData = async (username: string, message: string) => {
    const supabase = await createClient();
    const { data } = await supabase.from("valentine_gift").select("*").eq("facebook_name", username); // Condition: completed = true
    if (data == null || data[0] == null || data[0] == undefined) {
      const { error } = await supabase.from("valentine_gift").insert({
        facebook_name: username,
        message: message,
      });

      if (error) {
        console.log("something went wrong........🥲");
      } else {
        console.log("Congratulation........🎉");
        localStorage.setItem("usid", username);
        fecthData();
        setIsInput(false);
      }
    } else {
      const  usid = data[0].facebook_name;
      localStorage.setItem("usid", usid);
      fecthData();
      setIsInput(false);
    }
  };

  const fecthData = async () => {
    const usid = localStorage.getItem("usid");
    if (usid != "" || usid != null) {
      const supabase = await createClient();

      const { data } = await supabase.from("valentine_gift").select("*").neq("facebook_name", usid); // Condition: completed =

      console.log("user data: ", data);
      const weigts: number[] = [];
      const count = data?.length || 0;
      for (let i = 0; i < count; i++) {
        weigts.push(Math.random() * 1);
      }

      const result = getWeightedRandomItem(data as ValentineGift[], weigts);

      setValentineGift({
        message: result?.message,
        facebook_name: result?.facebook_name,
      });
    }
  };

  useEffect(() => {
    // Subscribe to changes in the 'posts' table
    const usid = localStorage.getItem("usid");
    if (usid == "" || usid == null) {
      setIsInput(true);
    }

    fecthData();
  }, []);

  const getWeightedRandomItem = (items: ValentineGift[], weights: number[]) => {
    if (items.length === 0 || items.length !== weights.length) {
      return items[0];
    }

    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0); // Calculate total weight
    const random = Math.random() * totalWeight; // Generate a random number in the range [0, totalWeight)

    let cumulativeWeight = 0;
    for (let i = 0; i < items.length; i++) {
      cumulativeWeight += weights[i];
      if (random < cumulativeWeight) {
        return items[i];
      }
    }

    return items[0];
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.cardContainer}>
      <FlowerAnimation imagePath="/images/poppy.png" /> {/* Add flower animations */}
      <FlowerAnimation imagePath="/images/nymphea.png" />
      <FlowerAnimation imagePath="/images/rose.png" />
      {isInput ? (
        <SocialCardForm callback={addData} /> // Show the form if isInput is true
      ) : (
        <div>
          <div className={`${styles.card} ${isOpen ? styles.open : ""}`} onClick={handleClick}>
            <div className={styles.cardFront}>
              <h1>Happy Valentine&apos;s Day!</h1>
              <p>Click to open the card</p>
            </div>
            <div className={styles.cardInside}>
              <h2>ວາບ {valentineGift?.facebook_name} ຫາເອົາເອງເດີ🤣🤣</h2>
              <p>{valentineGift?.message}</p>
              <p>Love, {valentineGift?.facebook_name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
