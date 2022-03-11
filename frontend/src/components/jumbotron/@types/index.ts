export type Direction = 'row' | 'column';


export interface IProps {
    direction?: Direction,
}

export interface IStyles extends Pick<IProps, 'direction'> {
}

export interface IImage {
    src: string,
    alt: string,
}

