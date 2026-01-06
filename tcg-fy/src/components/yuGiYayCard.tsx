import React from 'react';
import '../visuals/twoPiecesStyle.css'

interface YuGiYayCardProps {
    ImageSrc: string;
    Title: string;
    Description: string;
    Category?: string;
    Power?: string;
    Mana?: string;
}

export const YuGiYayCard: React.FC<YuGiYayCardProps> = ({
    ImageSrc,
    Title,
    Description,
    Category,
    Power,
    Mana
}) => {
    return (
        <div className="yu-gi-yay-card">
            <img src={ImageSrc} alt={Title} />
            <h2>{Title}</h2>
            <p>{Description}</p>
            {Category && <span className="category">{Category}</span>}
            {Power && <span className="power">{Power}</span>}
            {Mana && <span className="mana">{Mana}</span>}
        </div>
    );
};