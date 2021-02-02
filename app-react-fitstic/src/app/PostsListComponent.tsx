import { useState } from "react";
import React from "react";
import { Post } from "./Post";
import { CreatePostCallback, CreatePostComponent } from "./CreatePostComponent";
import { DeletePostCallback, PostComponent } from "./PostComponent";
import { StatisticsComponent } from "./StatisticsComponent";



export const PostsListComponent: React.FunctionComponent = () => {
    // let post1: Post = {id: 0, autore: "Dante Alighieri", hashtag: "#LaDivinaCommedia", contenuto:"Viaggio mistico", data: new Date()};
    // let post2: Post = {id: 1, autore: "Agatha Christie", hashtag: "#AssassinioSull'OrientExpress", contenuto:"Libro giallo", data: new Date()};
    // let post3: Post = {id: 2, autore: "James Joice", hashtag: "#Ulisse", contenuto:"Romanzo moderno",data: new Date()};
    // let post4: Post = {id: 3, autore: "Alessandro Manzoni", hashtag: "#IPromessiSposi", contenuto:"Romanzo storico", data: new Date()};
    
    let [listaPostValue, setListaPostValue] = useState<Post[]>([]);

    // Callback di creazione
    let callbackCreate: CreatePostCallback = (postNuovo)=>{    
        // Creazione di una nuova lista che contiene la lista precedente + il nuovo post
        let nuovaLista = listaPostValue.concat(postNuovo);
        //let nuovaLista = [...listaPostValue, postNuovo];
        // Modifica dello stato sovrascrive la nuova lista
        setListaPostValue(nuovaLista);
    };

    // Callback di eliminazione
    let callbackDelete: DeletePostCallback = (idDaEliminare) => {
        console.log("Callback delete: ricevuto id", idDaEliminare);   
        
        /**
         * In italiano si legge:
         * "dammi una nuova lista che contenga SOLO gli elementi per cui la condizione è vera" ->
         * "dammi una nuova lista che contenga SOLO gli elementi il cui id (item.id) è diverso dall'idDaEliminare"
         */
        let nuovaLista = listaPostValue.filter(item => item.id !== idDaEliminare);
        setListaPostValue(nuovaLista);
    }


    return <>
   <StatisticsComponent lista={listaPostValue} /> 
   <CreatePostComponent callback={callbackCreate} />
   {listaPostValue.map((item, index)=><PostComponent key={index} deleteCallback={callbackDelete} post={item}/>)}    
    </>
};