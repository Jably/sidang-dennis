import React from 'react';
import '../styles.css'; // Import your CSS styles
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import denImage from './img/den1.jpg'; // Import the image
import images from '../utils/importAllImages'; // Pastikan path ini benar
import musicFile from '../components/song/HindiaKitakeSana.mp3'; // Import the music file

const Home = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const mulai = () => {
    // Create a selector string for cardBox1 to cardBox30
    let selector = Array.from({ length: 31 }, (_, index) => `.cardBox${index + 1}`).join(', ');
    const button = document.querySelector('.main');
    const cards = document.querySelectorAll(selector);
    const line = document.querySelector('.loader');
    const audio = document.querySelector('#bg-music'); // Select the audio element
    const shadow__btn = document.querySelector('.shadow__btn');

    // Apply fadeOutAnimation to the button
    button.style.animation = 'fadeOutAnimation 3s ease 1 forwards';

    // Add an event listener for animation end on the button
    button.addEventListener('animationend', () => {
      // Hide the button after the animation ends
      button.style.display = 'none';
      shadow__btn.style.display ='grid';

      // Show card and line elements after fadeOutAnimation ends
      cards.forEach(card => {
        card.style.display = 'grid';
      });
      line.style.display = 'grid';

      // Play the background music
      audio.play();
    });

    // Redirect after all animations (total duration = 6000ms)
    setTimeout(() => {
      // navigate('/home'); // Uncomment this line to enable navigation
    }, 6000);

    
    
};

const wow = () => {
      navigate('/'); 
  };


  return (
    <div className={`home ${isMobile ? 'mobile' : ''}`}>
      <h1 class="heading">Ini Den Hadiah Nya</h1>
      <div class="loader"></div>
      <audio id="bg-music" src={musicFile} preload="auto" loop></audio>
      <div class="cardBox1">
        <div class="card">
            <img class="" src={denImage} alt="den" />
            <div class="content">
                <p>Ini Lu masih Bocil Den</p>
            </div>
        </div>
     </div>
     <div class="cardBox2">
        <div class="card">
            <img class="img2" src={images['den2.jpg']} alt="den 2" />
            <div class="content">
                <p>Al-Fajar AF</p>
            </div>
        </div>
     </div>
     <div class="cardBox3">
        <div class="card">
            <img class="img2" src={images['den3.jpg']} alt="den 2" />
            <div class="content">
                <p>Ya Nama Gua Dennis</p>
            </div>
        </div>
     </div>
     <div class="cardBox4">
        <div class="card">
            <img class="img2" src={images['den4.jpg']} alt="den 2" />
            <div class="content">
                <p>Kelas 10 Irmas?</p>
            </div>
        </div>
     </div>
     <div class="cardBox5">
        <div class="card">
            <img class="img2" src={images['den5.jpg']} alt="den 2" />
            <div class="content">
                <p>Koocheng nya Takut</p>
            </div>
        </div>
     </div>
     <div class="cardBox6">
        <div class="card">
            <img class="img2" src={images['den6.jpg']} alt="den 2" />
            <div class="content">
                <p>Cengos Untuk Jul Ngerizz</p>
            </div>
        </div>
     </div>
     <div class="cardBox7">
        <div class="card">
            <img class="img2" src={images['den7.jpg']} alt="den 2" />
            <div class="content">
                <p>Galeri Gua Isinya Ini Semua</p>
            </div>
        </div>
     </div>
     <div class="cardBox8">
        <div class="card">
            <img class="img2" src={images['den8.jpg']} alt="den 2" />
            <div class="content">
                <p>Nyeker Botak Bareng Ngadon</p>
            </div>
        </div>
     </div>
     <div class="cardBox9">
        <div class="card">
            <img class="img2" src={images['den9.jpg']} alt="den 2" />
            <div class="content">
                <p>Keren Bertiga Chuy</p>
            </div>
        </div>
     </div>
     <div class="cardBox10">
        <div class="card">
            <img class="img2" src={images['den10.jpg']} alt="den 2" />
            <div class="content">
                <p>Budhe Rill</p>
            </div>
        </div>
     </div>
     <div class="cardBox11">
        <div class="card">
            <img class="img2" src={images['den11.jpg']} alt="den 2" />
            <div class="content">
                <p>Beruntung Yang Namanya Monica Sampe Harus Ke Gunung</p>
            </div>
        </div>
     </div>
     <div class="cardBox12">
        <div class="card">
            <img class="img2" src={images['den12.jpg']} alt="den 2" />
            <div class="content">
                <p>Ciee Vidcall</p>
            </div>
        </div>
     </div>
     <div class="cardBox13">
        <div class="card">
            <img class="img2" src={images['den13.jpg']} alt="den 2" />
            <div class="content">
                <p>Budhe Lagi Ada Gua Join</p>
            </div>
        </div>
     </div>
     <div class="cardBox14">
        <div class="card">
            <img class="img2" src={images['den14.jpg']} alt="den 2" />
            <div class="content">
                <p>Pj Otw Ngabdub?</p>
            </div>
        </div>
     </div>
     <div class="cardBox15">
        <div class="card">
            <img class="img2" src={images['den15.jpg']} alt="den 2" />
            <div class="content">
                <p>Ngondangin Kita</p>
            </div>
        </div>
     </div>
     <div class="cardBox16">
        <div class="card">
            <img class="img2" src={images['den16.jpg']} alt="den 2" />
            <div class="content">
                <p>Asik Juga Nyewa Vila Ya</p>
            </div>
        </div>
     </div>
     <div class="cardBox17">
        <div class="card">
            <img class="img2" src={images['den17.jpg']} alt="den 2" />
            <div class="content">
                <p>Kaki Putus??!</p>
            </div>
        </div>
     </div>
     <div class="cardBox18">
        <div class="card">
            <img class="img2" src={images['den18.jpg']} alt="den 2" />
            <div class="content">
                <p>Joana</p>
            </div>
        </div>
     </div>
     <div class="cardBox19">
        <div class="card">
            <img class="img2" src={images['den19.jpg']} alt="den 2" />
            <div class="content">
                <p>Ngaa Don</p>
            </div>
        </div>
     </div>
     <div class="cardBox20">
        <div class="card">
            <img class="img2" src={images['den20.jpg']} alt="den 2" />
            <div class="content">
                <p>Bersama Pasangan Masing-Masing</p>
            </div>
        </div>
     </div>
     <div class="cardBox21">
        <div class="card">
            <img class="img2" src={images['den21.jpg']} alt="den 2" />
            <div class="content">
                <p>Hahaha Botak, Halo Mah</p>
            </div>
        </div>
     </div>
     <div class="cardBox22">
        <div class="card">
            <img class="img2" src={images['den22.jpg']} alt="den 2" />
            <div class="content">
                <p>Racing Theory</p>
            </div>
        </div>
     </div>
     <div class="cardBox23">
        <div class="card">
            <img class="img2" src={images['den23.jpg']} alt="den 2" />
            <div class="content">
                <p>Retro</p>
            </div>
        </div>
     </div>
     <div class="cardBox24">
        <div class="card">
            <img class="img2" src={images['den24.jpg']} alt="den 2" />
            <div class="content">
                <p>Nyantuy Qualitas Jelek</p>
            </div>
        </div>
     </div>
     <div class="cardBox25">
        <div class="card">
            <img class="img2" src={images['den25.jpg']} alt="den 2" />
            <div class="content">
                <p>Kita Ke Sana</p>
            </div>
        </div>
     </div>
     <div class="cardBox26">
        <div class="card">
            <img class="img2" src={images['den26.jpg']} alt="den 2" />
            <div class="content">
                <p>Selagi Masih Bisa Bersama</p>
            </div>
        </div>
     </div>
     <div class="cardBox27">
        <div class="card">
            <img class="img2" src={images['den27.jpg']} alt="den 2" />
            <div class="content">
                <p>Penembakan</p>
            </div>
        </div>
     </div>
     <div class="cardBox28">
        <div class="card">
            <img class="img2" src={images['den28.jpg']} alt="den 2" />
            <div class="content">
                <p>Sutradara dan Apoy</p>
            </div>
        </div>
     </div>
     <div class="cardBox29">
        <div class="card">
            <img class="img2" src={images['den29.jpg']} alt="den 2" />
            <div class="content">
                <p>Their Love Is Unbeatable</p>
            </div>
        </div>
     </div>
     <div class="cardBox30">
        <div class="card">
            <img class="img2" src={images['den30.jpg']} alt="den 2" />
            <div class="content">
                <p>Menamatkan Kuliah</p>
            </div>
        </div>
     </div>
     <div class="cardBox31">
        <div class="card">
            <div class="content">
                <p>Sekian Den... Ya masih belum terlalu keren lah karena jangka waktunya sebentar, untuk saat ini hadiahnya
                    virtual yah, harapan buat orang kaya lu den, orang kaya lu, udah ah sukses terus, sama jadi temen gua terus ya den.
                </p>
                <button class="shadow__btn" onClick={wow} >Cabut?</button>
            </div>
        </div>
     </div>
     <div class="main">
        <div class="button_pair">
            <div class="btn">
                <button class="button4">
                    <span class="button_text" onClick={mulai}>PLAY</span>
                </button>
            </div>
        </div>
        
    </div>
    
    
</div>
  );
};

export default Home;
