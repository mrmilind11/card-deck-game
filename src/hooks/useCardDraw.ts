import {useEffect, useState} from "react";

enum CardFace {
    HEARTS = 'hearts',
    DIAMONDS = 'diamonds',
    CLUBS = 'clubs',
    SPADES = 'spades',
}

export const CardFaceIcons: Record<CardFace, string> = {
    [CardFace.HEARTS]: '♥️',
    [CardFace.DIAMONDS]: '♦️',
    [CardFace.CLUBS]: '♣️',
    [CardFace.SPADES]: '♠️',
}

export const CardColor: Record<CardFace, 'black' | 'red'> = {
    [CardFace.HEARTS]: 'red',
    [CardFace.DIAMONDS]: 'red',
    [CardFace.CLUBS]: 'black',
    [CardFace.SPADES]: 'black'
}

type CardValueType = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

const CardValues: CardValueType[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export type CardData = {
    face: CardFace,
    value: CardValueType
}

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

    useEffect(() => {
        console.log('cards', cards);
    }, [cards]);

    return {
        cards,
        drawCards,
        putCard
    }
}
