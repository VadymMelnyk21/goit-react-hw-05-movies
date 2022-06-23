import { fetchTrending } from '../services/API';

export const App = () => {
  fetchTrending().then(res => console.log(res));
  return <div>123</div>;
};
