import { createRoot } from 'react-dom/client';

// import React components
import App from '../components/app.component.jsx';

/*
* create React root element and insert it into document
*/

const bootstrapReact =
   () => {
      const root = createRoot(document.getElementById('insertReactHere'));
      root.render(
         <App />
      );
   }

bootstrapReact();

console.log('le bundle a été généré !');
