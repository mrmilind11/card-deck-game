import {FC} from 'react';
import styles from './card.module.css';
import {CardColor, CardData, CardFaceIcons} from "../../constants/card.constants.ts";

interface CardProps {
    cardData: CardData;
    onClick?: () => void;
}

export const Card: FC<CardProps> = ({cardData, onClick}) => {
    const cardColor = CardColor[cardData.face];
    return (
        <div onClick={onClick} className={`${styles.card} ${cardColor === 'red' ? styles.cardRed : styles.cardBlack}`}>
            <p>{cardData.value}</p>
            <div className={styles.cardFace}>
                {CardFaceIcons[cardData.face]}
            </div>
        </div>
    )
}
