import { Download, SectionWrapper, Features } from "./components";
import assets from './assets';
import styles from "./styles/Global";


const App = () =>  {
  return (

    <>
   
      <SectionWrapper 
      title="Your Own Store Of Nifty NFTs. Start Selling & Growing"
      description="Buy, Store, Collect NFTs, exchange & Earn crypto. Join 25+ million People using ProNef MarketPlace."
      showBtn 
      mockupImg={assets.homeHero}
      banner="banner" 
      />
      <SectionWrapper 
      title="Smart User Interface MarketPlace"
      description="Experience A Buttery UI of ProNef NFT MarketPlace. Smooth Constant colors of a fluent UI Design."
      mockupImg={assets.homeCards}
      reverse
      />

      <Features />

      <SectionWrapper 
      title="Deployment"
      description="ProNef is built using Expo which runs natively on all users
       devices. You can easily get your app into people's hands"
      
      mockupImg={assets.feature}
      reverse 
      />
      <SectionWrapper 
      title="Creative way TO showcase the store"
      description="The App contains two screens, The 1st list all NFTs while the other shows the details of each NFTs"
      mockupImg={assets.mockup}
      banner="banner02"
      />

      <Download />

      <div className=" px-4 py-2 justify-center item-center bg-primary flex-col text-center banner04">
      <p className={` ${styles.pText}`}> Made with love by {" "}
      <span className="bold"> David, as instructed by JavaScript Mastery </span>
      </p>
      
      </div>


    </>
  );
}

export default App;
