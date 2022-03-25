export interface IFeatureCardContext {
    setItemFeature: (item: ItemType) => void,
    setIsShowFeature: (bool: boolean) => void,
    itemFeature: ItemType,
    isShowFeature: boolean,
}

export interface IFeature {
    src: string,
}

export interface Slide {
    id: string,
    title: string, //Коммедия
    items: Array<ItemType>
}

export interface ItemType {
    id: string,
    title: string,
    description: string,
    genre: string,
    maturity: number,
    slug: string,
    images: {
        large: string,
        small: string,
    }
}

export interface IFeatureText {
    fontWeight?: 'bold' | 'normal' | 'regular',
}

export interface IGroup {
    margin?: string,
    flexDirection?: 'column' | 'row' | string,
    alignItems?: 'center' | string,
}

export interface IMaturity {
    rating: number,
}

export interface ICardItem {
    item: ItemType
}

export interface IImage {
    src: string,
    alt: string,
}
