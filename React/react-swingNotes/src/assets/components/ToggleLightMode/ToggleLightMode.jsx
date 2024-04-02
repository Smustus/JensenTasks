import { useContext } from 'react';
import './ToggleLightMode.css';
import { LightContext, ChangeLightModeContext } from '../../../App';



function ToggleLightMode(){

  const lightMode = useContext(LightContext);
  console.log('LightMode set to: ' + lightMode);

  const setLightMode = useContext(ChangeLightModeContext);

  const handleToggle = () => {
    const toggleDot = document.querySelector('.toggleBar__dot');
    if(toggleDot.classList.contains('toggled')){
      toggleDot.classList.remove('toggled');
      toggleDot.classList.add('untoggled');
    } else {
      toggleDot.classList.remove('untoggled');
      toggleDot.classList.add('toggled');
    }    
    setLightMode(!lightMode);
  }


  return (
    <section className="toggleLightMode">
      <h4 className="toggleLightMode__text">Toggle lightmode</h4>
      <article className="toggleBar" onClick={ handleToggle }>
        <div className="toggleBar__dot"></div>
      </article>
    </section>
  )
}

export default ToggleLightMode;