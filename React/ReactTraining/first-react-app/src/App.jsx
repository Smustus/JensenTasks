import Header from './header.jsx';
import Food from './food.jsx';
import Footer from './footer.jsx';
import Card from './card.jsx';
import UseStatePrac from './useStatePrac.jsx';
import ObjPrac from './useStateObjPrac.jsx';

function App() {
  return(
    <>

    <Header />
    <section className='card-container'>
      <Card title="Card title" year={2012} text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nostrum aspernatur pariatur, iusto odit quidem itaque est reprehenderit ipsum aut!"/>
      <Card title="Card title-2" year={2004} text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius molestiae veniam consectetur."/>
      <Card />
    </section>
    <Food />
    <hr/>
    <UseStatePrac />
    <hr/>
    <ObjPrac />
    <hr/>
    <Footer />

    </>
  );
}

export default App

