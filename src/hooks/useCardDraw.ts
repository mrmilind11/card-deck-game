import {useState} from "react";
import {CardData, CardFace, CardValues} from "../constants/card.constants.ts";

const getAllCards = (): CardData[] => {
    return [CardFace.CLUBS, CardFace.DIAMONDS, CardFace.HEARTS, CardFace.SPADES].reduce((acc, current) => {
        return [...acc, ...CardValues.map((value) => ({face: current, value}))]
    }, [] as CardData[]).sort(() => Math.random() - 0.5);
}

export const useCardDraw = () => {
    const [cards, setCards] = useState<CardData[]>(getAllCards());

    const drawCards = (count: number): CardData[] => {
        if (cards.length < count) {
            throw new Error('Not enough cards');
        }
        const drawnCards = cards.slice(0, count);
        setCards((state) => state.slice(count));
        return drawnCards;
    }

    const putCard = (card: CardData) => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        cards.splice(randomIndex, 0, card);
        setCards([...cards]);
    }

    return {
        cards,
        drawCards,
        putCard
    }
}
