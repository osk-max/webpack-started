import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) => {
  console.log( 'Creando etiqueta H1 ' );
  const h1 = document.createElement('H1');
  h1.innerText = `Hola ${ nombre }`;
  document.body.append(h1);  

  // Imagen
  // const imagen = document.createElement('IMG');
  // imagen.src = webpacklogo;
  // document.body.append(imagen);
  }

