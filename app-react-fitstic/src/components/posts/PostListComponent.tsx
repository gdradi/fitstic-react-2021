import React from "react";
import { Post } from "../../models/Post";
import { CreatePostCallback, CreatePostComponent } from "./CreatePostComponent";
import { DeletePostCallback, SinglePostComponent } from "./SinglePostComponent";

export interface PostsListComponentProps {
    postList: Post[];
    createCallback: CreatePostCallback;
    deleteCallback: DeletePostCallback;
}

/**
 * PostListComponent priceve in infresso una lista di post e la passa al SinglePostComponent per generare la vista
 * riceve anche la callback di delete per eliminare un post
 */
export let PostsListComponent: React.FunctionComponent<PostsListComponentProps> = (props) => {
    
    /*
    const fakeText: string = `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. 
                            Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

    let fakeDate: Date = new Date();

    let post0: Post = {
        id: 1,
        author: "Jordan Reed",
        title: "Live in NYC",
        content: fakeText,
        date: "Yesterday",
        isEdited: true
    }
    let post1: Post = {
        id: 2,
        author: "Angela Cybill",
        title: "My day...",
        content: fakeText,
        date: "Yesterday",
        isEdited: true
    }
    let post2: Post = {
        id: 3,
        author: "Robert Jaron",
        title: "News of the World",
        content: fakeText,
        date: "Today",
        isEdited: false
    }
    let post3: Post = {
        id: 4,
        author: "William A. Corbett",
        title: "I love music",
        content: fakeText,
        date: fakeDate.toLocaleString(),
        isEdited: true
    }
    let post4: Post = {
        id: 5,
        author: "Daniel M. Lee",
        title: "I travel for work",
        content: fakeText,
        date: fakeDate.toLocaleString(),
        isEdited: false
    }
    */



    return <>
        <CreatePostComponent createCallback={props.createCallback}/>
        {props.postList.map((item, index) => <SinglePostComponent deleteCallback={props.deleteCallback} key={index} post={item}/>).reverse()}
    </>
}