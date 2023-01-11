import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import pampers from '../src/assets/pampers.jpg'
import rice from  '../src/assets/rice.jpg'
import soap from '../src/assets/soap.jpg'
import maizeFloor from '../src/assets/maizeFloor.jpg'
import oil from '../src/assets/oil.jpg'
import tissues from '../src/assets/tissues.jpg'
import Footer from './components/Footer';


function App() {
  const desc = {
    rice : "Sunrise Basmati Rice has a fine texture and aroma and cooks perfectly every time. Sunrise Rice does not break.",
    cookingOil: "Its light, delicate flavour enhances the taste of food, while allowing you to retain your vitality and alertness.",
    maizeFloor: "Unga Hostess Sifted Maize Meal Flour is made and processed from the best to deliver a truly delightful culinary experience every time. ",
    diapers: "Your baby will love the 5-Star Skin Care of Pampers Baby Dry Diapers. Baby Dry Diapers are gentle and hypoallergenic to help maintain baby's skin.",
    bathingSoap: "Escape the ordinary and start your day glorious with Imperial Leather's fantastical shower gels, bar soap, bath creams and foamburst body wash range.",
    tissues: "Strength and softness come together in our Hanan Premium Tissue."
  }

  return (
    <div className="App">
     <Navbar title="Shop_254"/>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Products src={maizeFloor}   desc= {desc.maizeFloor} title="Maize Floor" btn="Add to Cart"/>
          </div>

          <div className='col'>
            <Products src={rice} desc={desc.rice} title="Sunrise Basmati Rice" btn="Add to Cart"/>
          </div>

          <div className='col'>
            <Products src={oil} desc={desc.cookingOil} title='Cooking Oil' btn="Add to Cart"/>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Products src={pampers}   desc= {desc.diapers} title="Pampers Dry" btn="Add to Cart"/>
          </div>

          <div className='col'>
            <Products src={soap} desc={desc.bathingSoap} title="Imperial Leather" btn="Add to Cart"/>
          </div>

          <div className='col'>
            <Products src={tissues} desc={desc.tissues} title='Hanan Tissues' btn="Add to Cart"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
