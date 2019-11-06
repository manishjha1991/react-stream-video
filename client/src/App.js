import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./components/streams/StreamList";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";
import StreamCreate from "./components/streams/StreamCreate";
import Header from "./Header"
import "./App.css";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" exact component={StreamCreate} />
          <Route path="/stream/edit" exact component={StreamEdit} />
          <Route path="/stream/delete" exact component={StreamDelete} />
          <Route path="/stream/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
