import {ROUTES} from "../../../constants/routes";

export interface IProps {
    bg?: boolean,
    src?: string,
}

export interface IRoutes {
    to: ROUTES,
}

export interface ILogo extends IRoutes {
    alt: string,
    src: string
}

export interface IStyles  {
    src?:string,
}