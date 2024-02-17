export enum CardFace {
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
type CardConstants = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
export const CardValues: CardConstants[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
export type CardData = {
    face: CardFace,
    value: CardConstants
}
