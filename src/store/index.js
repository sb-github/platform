import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import DevTools from '../components/DevTools/DevTools';
import crawlersInfo from '../components/Crawler/crawlerReducer';
import treeInfo from '../components/WordTree/treeReducer';
import stopwords from '../components/StopWord/StopWordReducer'
import {fetchWords} from "../components/StopWord/StopWordActions";
import {fetchCrawlers} from "../components/Crawler/crawlerActions";
import skills from '../components/Skill/skillReducer';
import materials from '../components/Material/materialReducer';
import dirs from '../components/Directions/reducer';
import {fetchMaterials} from "../components/Material/materialActions";
import {fetchSkills} from "../components/Skill/skillActions";

export const reducer = combineReducers({
  crawlersInfo,
  treeInfo,
  stopwords,
  skills,
  materials,
  dirs
});

const store = createStore(
  reducer,
  DevTools.instrument(),
  applyMiddleware(
    thunkMiddleware
  )
);


store.dispatch(fetchCrawlers(0));
store.dispatch(fetchSkills());
store.dispatch(fetchMaterials());
store.dispatch(fetchWords());

export default store;