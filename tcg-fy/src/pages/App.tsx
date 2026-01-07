import React, {useState} from 'react';
import logo from '../visuals/images/TCG-FY_Logo.png';
import '../visuals/App.css';
import { MagiciansGatheringCard } from '../components/magiciansGatheringCard';
import { TwoPiecesCard } from '../components/twoPiecesCard';
import { PokeCreaturesCard } from '../components/pokecreaturesCard';
import { YuGiYayCard } from '../components/yuGiYayCard';

function App() {

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [power, setPower] = useState<string>('');
  const [mana, setMana] = useState<string>('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const handlePowerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPower(event.target.value);
  };

  const handleManaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMana(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='inline-container'>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>TCG-fy!&nbsp;&nbsp;&nbsp;</h1>
        </div>
      </header>

      <main>
        <h2>
          Suas fotos em cartas de TCG!
        </h2>
        <p>Adicione uma imagem para começar:</p>
        <input
          className='image-input'
          type="file"
          name="Adicionar Imagem"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const file = event.target.files?.[0] ?? null;
              if (file) {
                  console.log(file);
                  setSelectedImage(file);
              }
          }}
        />

        {selectedImage && (
          <div>
            {/* Display the selected image */}
            <br />
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br /> <br />

            <h2>Selecionar Estilo:</h2>

            <div className='cards-container'>
              <button
                onClick={() => setSelectedCard('Magicians Gathering')}
                className={`magicians-gathering-selector-button ${selectedCard === 'Magicians Gathering' ? 'selected' : ''}`}
              >
                Magicians Gathering
              </button>

              <button
                onClick={() => setSelectedCard('Two Pieces')}
                className={`two-pieces-selector-button ${selectedCard === 'Two Pieces' ? 'selected' : ''}`}
              >
                Two Pieces
              </button>

              <button
                onClick={() => setSelectedCard('PokeCreatures')}
                className={`poke-creatures-selector-button ${selectedCard === 'PokeCreatures' ? 'selected' : ''}`}
              >
                PokeCreatures
              </button>
              
              <button
                onClick={() => setSelectedCard('YuGiYay')}
                className={`yu-gi-yay-selector-button ${selectedCard === 'YuGiYay' ? 'selected' : ''}`}
              >
                YuGiYay
              </button>
            </div>

            <div className='cards-inputs'>
              {selectedCard && <h3>Estilo selecionado: {selectedCard}</h3>}

              <input
                type='text'
                placeholder='Título'
                onChange={handleTitleChange}
                required
              />
              <input
                type='text'
                placeholder='Descrição'
                onChange={handleDescriptionChange}
                required
              />
              <input
                type='text'
                placeholder='Categoria (Opcional)'
                onChange={handleCategoryChange}
              />
              <input
                type='text'
                placeholder='Poder (Opcional)'
                onChange={handlePowerChange}
              />
              <input
                type='text'
                placeholder='Mana (Opcional)'
                onChange={handleManaChange}
              />
            </div>
          </div>
        )}

        {selectedImage && selectedCard === 'Magicians Gathering' && (
          <MagiciansGatheringCard 
              ImageSrc={selectedImage ? URL.createObjectURL(selectedImage) : ''}
              Title={title}
              Description={description}
              Category={category}
              Power={power}
              Mana={mana}
          />)
        }
        {selectedImage && selectedCard === 'Two Pieces' && (
          <TwoPiecesCard 
            ImageSrc={selectedImage ? URL.createObjectURL(selectedImage) : ''}
            Title={title}
            Description={description}
            Category={category}
            Power={power}
            Mana={mana}
          />)
        }

        {selectedImage && selectedCard === 'PokeCreatures' && (
          <PokeCreaturesCard 
            ImageSrc={selectedImage ? URL.createObjectURL(selectedImage) : ''}
            Title={title}
            Description={description}
            Category={category}
            Power={power}
            Mana={mana}
          />)
        }

        {selectedImage && selectedCard === 'YuGiYay' && (
          <YuGiYayCard
            ImageSrc={selectedImage ? URL.createObjectURL(selectedImage) : ''}
            Title={title}
            Description={description}
            Category={category}
            Power={power}
            Mana={mana}
          />)
        }
      </main>
      <footer className='App-footer'><h3>Ver 1.0</h3></footer>
    </div>
  );
}

export default App;
