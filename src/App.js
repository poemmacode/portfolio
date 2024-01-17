import { HelmetProvider } from 'react-helmet-async';
import "./index.css";
import { Landing } from './pages/Landing';

export default function App() {

  return (
    <HelmetProvider>
      <Landing />
    </HelmetProvider>
  );
}
