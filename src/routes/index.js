import { Switch, Route, Redirect } from 'react-router-dom';

import NewsList from '../components/news/news-list';
import CategoriesList from '../components/categories/categories-list';
import NewsDetail from '../components/news/news-detail';
import Search from '../components/search/search';

const AppRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/top-news" />;
        }}
      />
      <Route path="/top-news" exact>
        <NewsList />
      </Route>
      <Route path="/top-news/:id">
        <NewsDetail />
      </Route>
      <Route path="/categories">
        <CategoriesList />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  );
};

export default AppRouter;
