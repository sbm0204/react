import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  // 컴포넌트 **내부**에서 프로그래밍 방식으로 페이지 이동을 구현
  const navigate = useNavigate();
  
  const ok = () => {
      navigate('/ok');
  }

  return (
    <>
      <header>
        <h1>고정.앱 헤더입니다.</h1>
        <div className="nav">
          <Link to={'./list'} className="test">리스트 페이지</Link>
          <br />
          <Link to={'./detail'} className="test">상세 페이지</Link>
          <br />
          <NavLink to={'./list'}>리스트 페이지</NavLink>
          <br />
          <NavLink to={'./detail'}>상세 페이지</NavLink>
          <br />
          <button type="button" onClick={ok}></button>
        </div>
      </header>
      <main>
        {/* 라우터의 자식 컴포넌트를 출력해주는 것이 outlet이다. */}
        <Outlet>
        </Outlet>
      </main>
      <footer>
        <p>고정.카피라이트 footer입니다.</p>
      </footer>
    </>
  )
}

export default App;