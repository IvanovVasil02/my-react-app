
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComoponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <ButtonComponent  btnText="questo è un pulsante" />

      <ImageComoponent src="https://www.mr-loto.it/wp-content/uploads/2022/09/importanza-delle-piccole-cose.jpg" alt="prima immagine a caso" />
      <ImageComoponent src="https://cdn.vegaooparty.it/media_vgp/blog_left_content_vgp/ita104/61f3f0ab68be6_10-piccole-attenzioni-romantiche.jpg" alt="seconda immagine a caso" />
    </div>
  );
}

export default App;
