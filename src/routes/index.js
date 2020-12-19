import { Switch, Route, Redirect } from 'react-router-dom';

import NewsList from '../components/news/news-list';
import CategoriesList from '../components/categories/categories-list';
import CategoryList from '../components/categories/category-list';
import NewsDetail from '../components/news/news-detail';
import Search from '../components/search/search';

const AppRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => {
          return <Redirect to='/top-news' />;
        }}
      />
      <Route path='/top-news' exact>
        <NewsList />
      </Route>
      <Route path='/news-detail'>
        <NewsDetail />
      </Route>
      <Route path='/categories/:category'>
        <CategoryList />
      </Route>
      <Route path='/categories'>
        <CategoriesList />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
    </Switch>
  );
};

export default AppRouter;
