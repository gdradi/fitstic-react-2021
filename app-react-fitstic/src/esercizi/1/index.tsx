import React from 'react';
import ReactDOM from 'react-dom';
import { Post, PostProps } from './Models/post';
import './styles/app.css'

let App: React.FunctionComponent = () => {
  return <div> <ListPostComponent /> </div>
};


let PostComponent: React.FunctionComponent<PostProps> = (props) => {
  return (
    <div className="container">
      <h2>POST</h2>
      <div>
        <label>Titolo:</label>
        <p>{props.post.title}</p>
      </div>
      <div>
        <label>Autore:</label>
        <p>{props.post.author}</p>
      </div>
      <div>
        <label>Contenuto:</label>
        <p>{props.post.content}</p>
      </div>
      <div>
        <label>Data di creazione:</label>
        <p>{props.post.creationDate}</p>
      </div>
    </div>
  )
};


let ListPostComponent: React.FunctionComponent = () => {
  let myPosts: Array<Post> = [
    new Post('Sono il titolo 1', "Sono l'autore 1", 'Sono il contenuto 1', new Date()),
    new Post('Sono il titolo 2', "Sono l'autore 2", 'Sono il contenuto 2', new Date()),
    new Post('Sono il titolo 3', "Sono l'autore 3", 'Sono il contenuto 3', new Date()),
    new Post('Sono il titolo 4', "Sono l'autore 4", 'Sono il contenuto 4', new Date()),
    new Post('Sono il titolo 5', "Sono l'autore 5", 'Sono il contenuto 5', new Date())
  ];
  return <div>
    {myPosts.map(item => {
      return <PostComponent post={item} />
    })}
  </div>
};



  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );