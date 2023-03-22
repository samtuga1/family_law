import { useState } from "react";
import AboutUs from "./components/AboutUs";
import Areas from "./components/Areas";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { FaTimes } from 'react-icons/fa';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div>
      <div className="fixed right-0 bottom-6 z-50">
        {showChatbot ? (
          <div className="relative w-full" >
            <div onClick={() => setShowChatbot(false)} className="absolute right-0 cursor-pointer hover:animate-pulse" >
              <FaTimes className="h-6 w-6 m-2" color="#fff" />
            </div>
            <iframe
              title="family law"
              width="350"
              height="430"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/22bea526-bcb1-4460-a55a-5eef16252d85"></iframe>
          </div>
        ) : (
          <div onClick={() => setShowChatbot(true)} className="h-[6rem] w-[6rem] mr-6 cursor-pointer" >

            <img
              className=""
              alt="chatbot"
              src="https://developer.android.com/static/guide/practices/ui_guidelines/images/article_icon_adaptive.gif"
            />
          </div>
        )}
      </div>
      <Banner />
      <AboutUs />
      <Areas />
      <Footer />
    </div>
  );
}

export default App;
