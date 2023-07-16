import { Route, Routes } from 'react-router-dom';

import { Container } from '@mui/material';

import routes from './routes';

export function Pages() {
  return (
    <Container>
      <Routes>
        {Object.values(routes).map(({ path, component: Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Container>
  );
}
