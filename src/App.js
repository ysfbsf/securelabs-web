import { useState } from 'react';
import { MainRoutes } from './routes/MainRoutes'

const App = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <MainRoutes expanded={expanded} setExpanded={setExpanded}/>
  );
}

export default App;
