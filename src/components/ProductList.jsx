


import './ProductList.css';
import TabUi from './TabUi';

function ProductList() {

  
  const products = [
    {id: 0, title: '바지', info: '누가 입어도 어울리는 바지', price: 190900, img: 'https://picsum.photos/id/63/5000/2813'},
    {id: 1, title: '양말', info: '항상 새 것같은 양말', price: 4000, img: 'https://picsum.photos/id/66/3264/2448'},
    {id: 2, title: '스커트', info: '맵thㅣ나는 스커트', price: 72000, img: 'https://picsum.photos/id/69/4912/3264'}
  ];

  return (
  <div className="card-container">
    {
      products.map(item => {
        return (
          <div className="card" key={item.id}>
            <div className="card-image" style={{backgroundImage: `url('${item.img}')`}}></div>
            <p className="card-title">{item.title}</p>
            <p className="card-price">{item.price}</p>
          </div>
        )
      })
    }
    </div>
    );
  }

export default ProductList;