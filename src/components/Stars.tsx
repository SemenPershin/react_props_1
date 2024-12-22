import { Star } from "./Star";
import { ReactNode } from "react";

interface Props {
    count: number;
}

export const Stars = (porps: Props) => {

    

    if (porps.count < 1 || porps.count > 5 || typeof porps.count != "number") {
        return <ul></ul>
    }

    const starsArr: Array<ReactNode> = [];

    for (let i = 0; i < porps.count; i++) {
        starsArr[i] = <li key={i}><Star/></li>
    }
    return <ul className="card-body-stars u-clearfix">{starsArr}</ul>
}

Stars.defaultProps = {count: 0}