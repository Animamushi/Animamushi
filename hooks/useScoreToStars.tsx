import React from "react";

export const Stars = (score: number | string) => {
    //console.log("type", typeof score)
    if (typeof score === 'string') {
        score = parseInt(score);
    }
    score = (score > 0) ? Math.round((5 / 100) * score) : 0;
    //console.log(score)
    const star = (key: number) => (<span className="material-icons" key={key} >star</span>);
    const halfStar = (key: number) => (<span className="material-icons" key={key}>star_half</span>);
    const outLineStar = (key: number) => (<span className="material-icons" key={key}>star_outline</span>);
    const stars = (score: number) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < score) {
                stars.push(star(i));
            } else if (i === score - 1) {
                if (((5 / 100) * score % 1 > 0.49)) {
                    stars.push(halfStar(i));
                } else {
                    stars.push(outLineStar(i))
                }
            } else {
                stars.push(outLineStar(i))
            }
        }
        return stars;
    }
    return <>{stars(score)}</>;
}