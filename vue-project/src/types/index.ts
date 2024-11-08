export enum COLOR {
    RED = 'RED',
    BLUE = 'BLUE',
    GREEN = 'GREEN',
    WHITE = 'WHITE',
    BLACK = 'BLACK'
}

export interface Product {
    id: string
    name: string
    title: string
    subtible: string
    color: COLOR | string,
    price: number,
    imageSrc: string
    imageAlt: string
    href: string
}