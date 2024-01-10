import './App.sass';
import BlocText from '../src/Components/BlocText/BlocText';
// import Header from '../src/Components/Header/Header';
import Download from '../src/Components/Download/Download';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <section>
        <img src="src\assets\logo.svg" alt="logo-frontend-mentor-projet" />
        <BlocText
          level={1}
          title={'A history of everyting you copy'}
          paragraph={
            'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.'
          }
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
        />
      </section>
      <section className="row">
        <img src="src\assets\image-computer.png" alt="computer-mac-desktop" />
        <div>
          <BlocText
            level={3}
            title={'Quick Search'}
            paragraph={
              'Easily search your snippets by content, category, web address, application, and more.'
            }
            alignClassName={'left'}
          />
          <BlocText
            level={3}
            title={'iCloud Sync'}
            paragraph={
              'Instantly saves and syncs snippets across all your devices.'
            }
            alignClassName={'left'}
          />
          <BlocText
            level={3}
            title={'Complete History'}
            paragraph={
              'Retrieve any snippets from the first moment you started using the app.'
            }
            alignClassName={'left'}
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
        />
      </section>
      <img
        src="src\assets\image-devices.png"
        alt="devices"
        className="devices"
      />
      <section>
        <BlocText
          level={2}
          title={'Supercharge your workflow'}
          paragraph={"We've got the tools to boost your productivity."}
        />
        <div className="row">
          <BlocText
            level={3}
            icon={'src/assets/icon-blacklist.svg'}
            alt={'icon-blacklist'}
            title={'Create blacklists'}
            paragraph={
              'Ensure sensitive information never makes its way to your clipboard by excluding certain sources'
            }
          />
          <BlocText
            level={3}
            icon={'src/assets/icon-text.svg'}
            alt={'icon-text'}
            title={'Plain text snippets'}
            paragraph={
              'Remove unwanted formatting from copied text for a consistent look.'
            }
          />
          <BlocText
            level={3}
            icon={'src/assets/icon-preview.svg'}
            alt={'icon-preview'}
            title={'Sneak preview'}
            paragraph={
              'Quick preview of all snippets on your Clipboard for easy access.'
            }
          />
        </div>
      </section>
      <section className="row logos">
        <img src="src/assets/logo-google.png" alt="Logo Google" />
        <img src="src/assets/logo-ibm.png" alt="Logo IBM" />
        <img src="src/assets/logo-microsoft.png" alt="Logo Microsoft" />
        <img src="src/assets/logo-hp.png" alt="Logo HP" />
        <img
          src="src/assets/logo-vector-graphics.png"
          alt="Logo Vector Graphics"
        />
      </section>
      <section>
        <BlocText
          level={2}
          title={'Clipboard for iOS and Mac OS'}
          paragraph={
            "Available for free on the App Store. Download for Max or iOS, sync with iCloud and you're ready to start adding to your clipboard."
          }
        />
        <Download />
      </section>
      <Footer />
    </div>
  );
}

export default App;
