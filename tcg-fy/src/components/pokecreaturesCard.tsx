import React from 'react';
import '../visuals/pokeCreaturesStyle.css'

interface PokeCreaturesCardProps {
    ImageSrc: string;
    Title: string;
    Description: string;
    Category?: string;
    Power?: string;
    Mana?: string;
}

export const PokeCreaturesCard: React.FC<PokeCreaturesCardProps> = ({
    ImageSrc,
    Title,
    Description,
    Category,
    Power,
    Mana
}) => {
    return (
        <div className="poke-creature-card">
            <div className="poke-creature-image-area">
                <img className="poke-creature-image" src={ImageSrc} alt={Title} />
            </div>
            <div className="poke-creature-text-area">
                <h2 className="poke-creature-title">{Title}</h2>
                <p className="poke-creature-description">{Description}</p>
            </div>
            {Category && <span className="category">{Category}</span>}
            {Power && <span className="power">{Power}</span>}
            {Mana && <span className="mana">{Mana}</span>}
        </div>
    );
};