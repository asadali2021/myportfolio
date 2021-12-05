import pic from './pic.png.png'
import pica from './b2.PNG'
import picb from './b3.PNG'
import pic2 from './b1.PNG'
import pic3 from './a3.PNG'
import pic4 from './a4.PNG'
import pic5 from './a5.PNG'
import pic6 from './a6.PNG'
import pic7 from './a7.PNG'

import './App.css';
import Typical from 'react-typical';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={pic} className="App-logo" alt="logo" />
        
         <h3>Hey, I am Syed Asad Ali</h3>
         <p>I'm a {' '}
         <Typical 
          loop={Infinity}
          wrapper = 'b'
          steps={[
            'Front-End Developer',
            1000,
            'Back-End Developer',
            1000,
            'MERN Stack Developer',
            1000,
            'JavaScript Developer',
            1000,
            'Python Developer',
            1000,
            'Hacker (Ethical)',
            1000,
            'Linux Enthusiast',
            1000,
            'Cybersecurity Expert (wannabe)',
            1000,
            'Data Scientist',
            1000,
            'Polyglot (English, Urdu & Italian)',
            1000
          ]}
         />
         </p>
         <div className="an"></div>
         <div className="an1"></div>
         <div className="an2"></div>
         <div className="Details">
        <ul className="read">
          <li>github: github.com/asadali2021</li>
          <li>contact: fluttergit01@gmail.com</li>
          <li><h5 className="top">I also know:</h5></li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Firebase(Authentication, Database, Storage, Hosting)</li>
          <li>React</li>
          <li>React Bootstrap</li>
          <li>Material UI</li>
          <li>Flask</li>
          <li>Django</li>
          <li>Numpy</li>
          <li>Pandas</li>
          <li>PyTorch</li>
          <li>FontAwesome</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Media Query</li>
          <li>Redux</li>
          <li>Flutter</li>
          <li>React-Native</li>
        </ul>
      </div>
      </header>
      <div>
      <img src={pic2} className="pic2" alt="" width="1515px" />
      </div>
      <div>
      <img src={pica} className="pic3" alt="" width="1515px" />
      </div>
      <div>
      <img src={picb} className="pic4" alt="" width="1515px" />
      </div>
      <div><img src={pic3} className="pic5" alt=""  width="1515px" /></div>
      <div><img src={pic4} className="pic6" alt=""  width="1515px" /></div>
      <div><img src={pic5} className="pic7" alt=""  width="1515px" /></div>
      <div><img src={pic6} className="pic8" alt=""  width="1515px" /></div>
      <div><img src={pic7} className="pic9" alt=""  width="1515px" /></div>
      <div>
        <footer className="footer">
          <div className="A">Software Developer</div>
          <div className="B">&copy; Copyrights 2020.Syed Asad Ali. All Rights Reserved.</div>
          <div className="C">Contact Me: fluttergit01@gmail.com</div>
          </footer>
          </div>
    </div>
  );
}

export default App;
