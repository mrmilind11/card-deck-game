import {FC} from 'react';
import styles from './card-stack.module.css';
import {CardData} from "../../hooks/useCardDraw.ts";
import {Card} from "../card/Card.tsx";

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
