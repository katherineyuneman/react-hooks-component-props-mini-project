import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About"
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About src={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts} minutes={blogData.minutes}/>
    </div>
  );
}

export default App;


