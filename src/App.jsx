import { useState } from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import ProductList from "./components/ProductList.jsx";
import TabUi from "./components/TabUi.jsx";
import './App.css';

function App() { 
  const [prodFlg, setProdFlg] = useState(true);
  const [tabFlg, setTabFlg] = useState(false);

  {/* 초기값으로 잡으려고. 초기값으로 item list가 제일 먼저 오게*/}

  const viewProductList = () => {    
    setProdFlg(true);
    setTabFlg(false);
  }

  const viewTabUi = () => {
    setProdFlg(false);
    setTabFlg(true);
  }

  return (
  <>
  <Header>

  </Header>
  <main>
    <div>
      <span onClick={viewProductList}>Item List</span>
      <br />
      <span onClick={viewTabUi}>Test</span>
    </div>
    { tabFlg && <TabUi></TabUi> }
    { prodFlg && <ProductList></ProductList>}
  </main>
  <Footer>

  </Footer>
    
  </>
  );
}

export default App;