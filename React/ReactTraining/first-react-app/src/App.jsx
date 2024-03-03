import Header from './assets/components/header.jsx';
import Food from './assets/components/food.jsx';
import Footer from './assets/components/footer.jsx';
import Card from './assets/components/card.jsx';
import UseStatePrac from './assets/components/useStatePrac.jsx';
import ObjPrac from './assets/components/useStateObjPrac.jsx';
import List from './assets/components/list.jsx';

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
    <List />
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

