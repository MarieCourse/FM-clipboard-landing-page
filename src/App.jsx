import './App.sass';
import BlocText from '../src/Components/BlocText/BlocText';
import Header from '../src/Components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <BlocText
        level={2}
        title={'Keep track of your snippets'}
        paragraph={
          'Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.'
        }
      />
      <div className="row">
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
      </div>
    </div>
  );
}

export default App;
