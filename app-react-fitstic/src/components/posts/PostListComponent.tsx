import React from "react";
import { CreatePostCallback, EditPostCallback } from "../../models/CallbackInterfaces";
import { Post } from "../../models/Post";
import { CreatePostComponent } from "./CreatePostComponent";
import { DeletePostCallback, SinglePostComponent } from "./SinglePostComponent";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { PostDetailComponent } from "./PostDetailComponent";


export interface PostsListComponentProps {
    postList: Post[];
    createCallback: CreatePostCallback;
    deleteCallback: DeletePostCallback;
    editCallback: EditPostCallback;
}


enum ERoute {
    HOME = "/",
    CREATE = "/create"
};


/**
 * PostListComponent priceve in infresso una lista di post e la passa al SinglePostComponent per generare la vista
 * riceve anche la callback di delete per eliminare un post
 */
export let PostsListComponent: React.FunctionComponent<PostsListComponentProps> = (props) => {

    /*
        Lista di rotte che abbiamo deciso:
        1.  "/" -> lista di post
        2. "/create" -> ambiente di creazione

        Una rotta è l'associazione:
            (percorso, componente da visualizzare)
        il routing è di fatto l'insieme di tutte le rotte che sono
        definite all'interno della nostra applicazione

    */
   let location = useLocation();

    return (

        <div className="postsListComponent">
            
            <div className="navbar">
                <Link to={ERoute.HOME}>Home</Link>
                <Link to={ERoute.CREATE}>Create</Link>
            </div>

<div className="wrapper">
            <div className="breadcrumb">Pathname: {location.pathname}</div>

            <Switch>
              
              {/* Rotta 1 */}
                <Route exact path={ERoute.HOME}>
                    {props.postList.map((item, index) => <SinglePostComponent editCallback={props.editCallback} deleteCallback={props.deleteCallback} key={index} post={item}/>).reverse()}
                </Route>


                {/* Rotta 2 */}
                <Route exact path={ERoute.CREATE}>
                    <CreatePostComponent createCallback={(post) => { 
                        props.createCallback(post); 
                        //setPath(ERoute.HOME);
                       
                    }}/>
                </Route>


                {/* 
                 Rotta 3:  /post/:id   visualizzazione del post con id = :id 
                            /post/<???????>    =>     <???????>  sarà per voi il contenuto della variabile id
                */}
                 <Route exact path={"/post/:id"}>
                     <PostDetailComponent editCallback={props.editCallback} deleteCallback={props.deleteCallback} postList={props.postList}  />
                     {/* <SinglePostComponent  editCallback={props.editCallback} deleteCallback={props.deleteCallback} post={} /> */}
                 </Route>

                
            </Switch>
            </div>
        </div>
    );
}