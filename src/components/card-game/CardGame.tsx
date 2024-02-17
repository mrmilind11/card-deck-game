import {FC, useState} from 'react';
import styles from './card-game.module.css';
import {useCardDraw} from "../../hooks/useCardDraw.ts";
import {CardStack} from "../card-stack/CardStack.tsx";
import {CardData} from "../../constants/card.constants.ts";

const DRAW_COUNT = 5;

export const CardGame: FC = () => {
    const {cards, drawCards, putCard} = useCardDraw();

    const [selectedCards, setSelectedCards] = useState<CardData[]>([]);

    const handleDrawCards = () => {
        try {
            const drawnCards = drawCards(DRAW_COUNT);
            setSelectedCards((state) => [...drawnCards, ...state]);
        } catch (e) {
            alert(e);
        }

    }

    const putCardBack = (cardIndex: number) => {
        putCard(selectedCards[cardIndex]);
        setSelectedCards((state) => state.filter((_, index) => index !== cardIndex));
    }

    return (
        <div className={styles.cardGameContainer}>
            <div className={styles.drawCardRow}>
                <div className={styles.drawCardBox} onClick={handleDrawCards}>
                    <p>Draw Cards</p>
                </div>
                {
                    cards.length < DRAW_COUNT && (
                        <div className={styles.drawCardAlert}>Alert !! Not enough cards to draw</div>)
                }
            </div>
            {selectedCards.length > 0 && <hr/>}
            <CardStack cards={selectedCards} onSelect={putCardBack}/>
        </div>
    )
}
