/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
/* import dadosIniciais from '../../data/dados_iniciais.json'; */
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embeded=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
        /* console.log(categoriasComVideos); */
      })
      .catch((err) => {
        console.log(err.message);
        /*  alert('Entrou aqui!!' + err); */
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[8].titulo}
                url={dadosIniciais[0].videos[8].url}
                videoDescription="Professor André Moraes - Descubra um pouco mais sobre a vida do @chameoandre, que depois de muito suor e tempo para assistir os vídeos da imersão REACT da Alura conseguiu fazer essa porra toda funcionar como devia :)"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
