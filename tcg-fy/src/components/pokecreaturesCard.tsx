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
            <div className="poke-creature-inner">

                <strong>{Category}</strong>
                <div className="poke-creature-header">
                <span>{Title || "Nome da Criatura"}</span>
                {Mana && <span>{Mana}</span>}
                </div>

                <div className="poke-creature-image-area">
                <img src={ImageSrc} className="poke-creature-image" alt="PokeCreature-Image" />
                </div>

                <div className="poke-creature-text-area">
                
                <p>{Description}</p>
                </div>

                <div className="poke-creature-footer">
                {Power && <span>ATK {Power}</span>}
                </div>
            </div>
        </div>
    );
};