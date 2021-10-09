import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Repo from './components/Repo/Repo';
import Main from './components/Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { getFavouritesListId } from './redux/selectors';
import { setFavouritesListId } from './redux/reduxFavourites';

const App = () => {
  const dispatch = useDispatch();
  const favouritesIdList = useSelector(getFavouritesListId);
  const [spleshScreenTogle, setSpleshScreenTogle] = useState(true);

  const spleshTimeout = setTimeout(() => {
    setSpleshScreenTogle(false);
  }, 2000);

  // сохранение и изьятие с localStorage id избранных
  useEffect(() => {
    let favouritesId = JSON.parse(localStorage.getItem('favourites'));
    if(favouritesId && favouritesId.length > 0) {
      favouritesId.forEach(item => dispatch(setFavouritesListId(item)));
    }
    return () => {
      clearTimeout(spleshTimeout)
    }
  }, []);

  useEffect(() => {
    localStorage.clear('favourites');
    if(favouritesIdList.length > 0) {
      localStorage.setItem('favourites', JSON.stringify(favouritesIdList));
    }
  }, [favouritesIdList]);

  return (
    <BrowserRouter>
      { spleshScreenTogle && <div className="splashScreen">Ворошилов Игорь</div> }
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/account/:username/:reponame" component={Repo}/>
          <Redirect to='/'/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
