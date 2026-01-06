import React from 'react';
import '../visuals/magiciansGatheringStyle.css'

interface MagiciansGatheringCardProps {
    ImageSrc: string;
    Title: string;
    Description: string;
    Category?: string;
    Power?: string;
    Mana?: string;
}

export const MagiciansGatheringCard: React.FC<MagiciansGatheringCardProps> = ({
    ImageSrc,
    Title,
    Description,
    Category,
    Power,
    Mana
}) => {
    return (
        <div className="magicians-gathering-card">
            <img src={ImageSrc} alt={Title} />
            <h2>{Title}</h2>
            <p>{Description}</p>
            {Category && <span className="category">{Category}</span>}
            {Power && <span className="power">{Power}</span>}
            {Mana && <span className="mana">{Mana}</span>}
        </div>
    );
};