import './App.sass';
import BlocText from '../src/Components/BlocText/BlocText';
import Download from '../src/Components/Download/Download';
import Footer from './Components/Footer/Footer';
import Logo from '../src/assets/logo.svg';
import Mac from '../src/assets/image-computer.png';
import Devices from '../src/assets/image-devices.png';
import BlackListIcon from '../src/assets/icon-blacklist.svg';
import TextIcon from '../src/assets/icon-text.svg';
import PreviewIcon from '../src/assets/icon-preview.svg';
import LogoGoogle from '../src/assets/logo-google.png';
import LogoIBM from '../src/assets/logo-ibm.png';
import LogoMicrosoft from '../src/assets/logo-microsoft.png';
import LogoHP from '../src/assets/logo-hp.png';
import LogoVector from '../src/assets/logo-vector-graphics.png';

function App() {
  return (
    <>
      <section>
        <img src={Logo} alt="logo-frontend-mentor-projet" className="logo" />
        <BlocText
          level={1}
          title={'A history of everyting you copy'}
          paragraph={
            'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.'
          }
          levelClassName={'lv-1'}
        />
        <Download />
      </section>
      <section>
        <BlocText
          level={2}
          title={'Keep track of your snippets'}
          paragraph={
            'Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.'
          }
          levelClassName={'lv-2'}
        />
      </section>
      <section className="row devices-mac">
        <img src={Mac} alt="computer-mac-desktop" />
        <div>
          <BlocText
            level={3}
            title={'Quick Search'}
            paragraph={
              'Easily search your snippets by content, category, web address, application, and more.'
            }
            alignClassName={'al-left'}
            levelClassName={'lv-3'}
          />
          <BlocText
            level={3}
            title={'iCloud Sync'}
            paragraph={
              'Instantly saves and syncs snippets across all your devices.'
            }
            alignClassName={'al-left'}
            levelClassName={'lv-3'}
          />
          <BlocText
            level={3}
            title={'Complete History'}
            paragraph={
              'Retrieve any snippets from the first moment you started using the app.'
            }
            alignClassName={'al-left'}
            levelClassName={'lv-3'}
          />
        </div>
      </section>
      <section>
        <BlocText
          level={2}
          title={'Access Clipboard Anywhere'}
          paragraph={
            "Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
          }
          levelClassName={'lv-2'}
        />
      </section>
      <section className="devices-tablette">
        <img src={Devices} alt="devices" />
      </section>
      <section>
        <BlocText
          level={2}
          title={'Supercharge your workflow'}
          paragraph={"We've got the tools to boost your productivity."}
          levelClassName={'lv-2'}
        />
        <div className="row tools">
          <BlocText
            level={3}
            icon={BlackListIcon}
            alt={'icon-blacklist'}
            title={'Create blacklists'}
            paragraph={
              'Ensure sensitive information never makes its way to your clipboard by excluding certain sources'
            }
            levelClassName={'lv-3'}
          />
          <BlocText
            level={3}
            icon={TextIcon}
            alt={'icon-text'}
            title={'Plain text snippets'}
            paragraph={
              'Remove unwanted formatting from copied text for a consistent look.'
            }
            levelClassName={'lv-3'}
          />
          <BlocText
            level={3}
            icon={PreviewIcon}
            alt={'icon-preview'}
            title={'Sneak preview'}
            paragraph={
              'Quick preview of all snippets on your Clipboard for easy access.'
            }
            levelClassName={'lv-3'}
          />
        </div>
      </section>
      <section className="row logos">
        <img src={LogoGoogle} alt="Logo Google" />
        <img src={LogoIBM} alt="Logo IBM" />
        <img src={LogoMicrosoft} alt="Logo Microsoft" />
        <img src={LogoHP} alt="Logo HP" />
        <img src={LogoVector} alt="Logo Vector Graphics" />
      </section>
      <section>
        <BlocText
          level={2}
          title={'Clipboard for iOS and Mac OS'}
          paragraph={
            "Available for free on the App Store. Download for Max or iOS, sync with iCloud and you're ready to start adding to your clipboard."
          }
          levelClassName={'lv-2'}
        />
        <Download />
      </section>
      <Footer />
    </>
  );
}

export default App;
