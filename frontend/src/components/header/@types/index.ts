import {ROUTES} from "../../../constants/routes";

export interface IProps {
    bg?: boolean,
    src?: string,
    dontShowOnSmallViewPort?: boolean,
}

export interface IRoutes {
    to: ROUTES,
}

export interface ILogo extends IRoutes {
    alt: string,
    src: string
}

export type IPicture = Pick<ILogo, 'src'>

export interface IStyles {
    src?: string,
    dontShowOnSmallViewPort?: boolean,
}

export interface ISearch {
    searchTerm: string,
    handlerChangeSearchTerm: (value: string) => void,
}

export interface ISearchInput {
    active: boolean,
}

export interface ITextLink {
    active?: boolean,
}