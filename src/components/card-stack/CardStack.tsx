import {FC} from 'react';
import styles from './card-stack.module.css';
import {Card} from "../card/Card.tsx";
import {CardData} from "../../constants/card.constants.ts";

interface CardStackProps {
    cards: CardData[];
    onSelect: (index: number) => void;
}

export const CardStack: FC<CardStackProps> = ({cards, onSelect}) => {
    return (
        <div className={styles.cardStack}>
            {
                cards.map((card, index) => (
                    <Card key={card.value + card.face} cardData={card} onClick={() => onSelect(index)}/>
                ))
            }
        </div>
    )
}
