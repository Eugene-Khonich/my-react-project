// import { Alert } from '../Alert/Alert';
// import { Product } from '../Product/Product';

// export const App = () => {
//   return (
//     <>
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error">
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success">
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning">
//         Please update your profile contact information
//       </Alert>
//     </>
//   );
// };
// import ClickCounter from '../ClickCounter/ClickCounter ';
// import { useEffect } from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && <Modal />}
    </div>
  );
};

export default App;
