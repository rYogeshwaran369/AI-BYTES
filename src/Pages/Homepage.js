import React, { useState, useEffect, useRef } from 'react';
import BackgroundVideo from '../Components/BackgroundVideo';
import videoSrc from '../aiback.MP4';
import { Link } from 'react-router-dom';



export default function Homepage() {


  const [isTextVisible, setTextVisible] = useState(false);
  const [isDesVisible, setDesVisible] = useState(false);
  const [isImageVisible1, setImageVisible1] = useState(false);
  const [isImageVisible2, setImageVisible2] = useState(false);
  const [isDes, setDes] = useState(false);

  const desRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  const handleScroll = () => {
    const desPosition = desRef.current?.getBoundingClientRect();
    const image1Position = image1Ref.current?.getBoundingClientRect();
    const image2Position = image2Ref.current?.getBoundingClientRect();

    if (desPosition && desPosition.left < window.innerWidth) {
      setDesVisible(true);
    }

    if (image1Position && image1Position.left < window.innerWidth) {
      setImageVisible1(true);
    }

    if (image2Position && image2Position.left < window.innerWidth) {
      setImageVisible2(true);
    }
  };

  useEffect(() => {
    const timeoutId1 = setTimeout(() => {
      setDes(true);
    }, 1400);

    const timeoutId2 = setTimeout(() => {
      setTextVisible(true);
    }, 1000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column' }}>
      <BackgroundVideo videoSrc={videoSrc} />

      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', width: '100%', textAlign: 'center' }}>
      <div style={{  padding: '10px 0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
  <h3 style={{ marginLeft: '2%', fontWeight: 'bold', fontSize: '1.7em', fontFamily: 'monospace', color: 'white' }}>HOME</h3>

  <div style={{ display: 'flex', flexDirection: 'row', width: '45%', justifyContent: 'space-between', marginRight: '2%', textDecoration: 'none' }}>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/magazine'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>MAGAZINES</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/events'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>EVENTS</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/academic'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>ACADEMIC_BREAKTHROUGHS</h3></Link>
    <Link style={{ textDecoration: 'none', color: 'white' }} to={'/faculty'}><h3 style={{ fontWeight: 'bold', fontSize: '1.4em', fontFamily: 'monospace' }}>FACULTIES</h3></Link>
  </div>
</div>

         <div style={{ marginTop: '7.6%', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
           <h1 style={{
             fontSize: '2em',
             textAlign: 'center',
             opacity: isTextVisible ? 1 : 0,
             transition: 'opacity 1s ease-in-out',
             marginBottom: 0,
             letterSpacing:2
           }}>
             ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
           </h1>
           <span style={{
             opacity: isDes ? 1 : 0,
             transition: 'opacity 1s ease-in-out',
             fontSize:'1.3em',
             fontWeight:'bold'
           }}>"Dreams Coded, Realities Forged: AI's Path"</span>
         </div>
       </div>

      {/* Magazines Section */}
      <div style={{ marginTop: '-2%', height: '90vh', color: 'white', backgroundColor: 'black', width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div ref={desRef} style={{ width: '50%', marginLeft: isDesVisible ? '8%' : '53%', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: isDesVisible ? 1 : 0, transform: isDesVisible ? 'translateX(0)' : 'translateX(-100%)', transition: 'opacity 1s ease-in-out, transform 1s ease-in-out' }}>
          <h2 style={{ fontSize: '7em' }}>MAGAZINES</h2>
          <p style={{wordSpacing:2}}>
          Immerse yourself in the dynamic world of AI and Data Science with our magazine, "AI Bytes." As the official publication of the Department of Artificial Intelligence and Data Science, AI Bytes is your gateway to exploring the remarkable achievements and groundbreaking events that shape the future of technology and helps in keeping the students intact with the department and department events.
             </p>

             <button style={{width:'10em',height:'2em'}}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/magazine'}>EXPLORE</Link></button>
        </div>
        <div ref={image1Ref} style={{ opacity: isImageVisible1 ? 1 : 0, transform: isImageVisible1 ? 'translateX(0)' : 'translateX(100%)', transition: 'opacity 1s ease-in-out, transform 1s ease-in-out' }}>
          <img src="https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691520813/image-removebg-preview_8_fyuutw.png" alt="Magazine" />
        </div>
      </div>

      {/* Academic Page */}
      <div style={{ marginTop: '-2%', height: '90vh', color: 'white', backgroundColor: 'black', width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div ref={image2Ref} style={{ opacity: isImageVisible2 ? 1 : 0, transform: isImageVisible2 ? 'translateX(0)' : 'translateX(100%)', transition: 'opacity 5s ease-in-out, transform 5s ease-in-out' }}>
          <img src="https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691527868/image-removebg-preview_9_g4doo6.png" alt="Magazine" />
        </div>
        <div style={{ width: '50%', marginRight: isDesVisible ? '4%' : '52%', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: isDesVisible ? 1 : 0, transform: isDesVisible ? 'translateX(0)' : 'translateX(100%)', transition: 'opacity 1s ease-in-out, transform 1s ease-in-out' }}>
          <h2 style={{ fontSize: '5em',textAlign:'center', }}>Academic Breakthroughs</h2>
          <p style={{wordSpacing:2}}>
          From creating predictive models that revolutionize decision-making to crafting sophisticated machine learning algorithms that enhance data analysis, our students are driving innovation forward. Each article in this collection offers a glimpse into their exceptional contributions across various domains spanning natural language processing computer vision neural networks and more.
            </p>
            <button style={{width:'10em',height:'2em'}}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/academic'}>EXPLORE</Link></button>
        </div>

        
      </div>
        {/* EVENTS Page */}
        <div style={{ marginTop: '-2%', height: '85vh', color: 'white', backgroundColor: 'black', width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ width: '50%', marginLeft: isDesVisible ? '2%' : '52%', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: isDesVisible ? 1 : 0, transform: isDesVisible ? 'translateX(0)' : 'translateX(100%)', transition: 'opacity 1s ease-in-out, transform 1s ease-in-out' }}>
          <h2 style={{ fontSize: '6em' }}>EVENTS</h2>
          <p style={{wordSpacing:2}}>
          In "Events" we recount the electrifying experiences of past events, where students engaged in hands-on learning, collaborative problem-solving, and knowledge exchange. Participants harnessed their skills to unravel real-world challenges, gaining insights that extend beyond the classroom and into the realm of practical application.
             </p>
             <button style={{width:'10em',height:'2em'}}><Link  to={'/events'}>EXPLORE </Link></button>
        </div>
        <div ref={image2Ref} style={{ opacity: isImageVisible2 ? 1 : 0, transform: isImageVisible2 ? 'translateX(0)' : 'translateX(100%)', transition: 'opacity 6s ease-in-out, transform 6s ease-in-out' }}>
          <img src="https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691547052/image-removebg-preview__11_-u7JPEUye8-transformed_gdfotw.png" alt="Magazine" />
        </div>
      </div>


       {/*Faculties Page */}
      <div style={{ marginTop: '-2%', height: '90vh', color: 'white', backgroundColor: 'black', width: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div ref={image2Ref} style={{ opacity: isImageVisible2 ? 1 : 0, transform: isImageVisible2 ? 'translateX(0)' : 'translateX(100%)', transition: 'opacity 6s ease-in-out, transform 6s ease-in-out' }}>
          <img src="https://res.cloudinary.com/dxhmtgtpg/image/upload/v1691555726/image-removebg-preview_14_cidwon.png" alt="Magazine" />
        </div>
        <div style={{ width: '50%', marginRight: isDesVisible ? '4%' : '52%', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: isDesVisible ? 1 : 0, transform: isDesVisible ? 'translateX(0)' : 'translateX(100%)', transition: 'opacity 1s ease-in-out, transform 1s ease-in-out' }}>
          <h2 style={{ fontSize: '5em',textAlign:'center', }}>Our Faculties</h2>
          <p style={{wordSpacing:2}}>
          "Guiding Visionaries" is a tribute to the dedication, expertise, and unwavering commitment of our faculty. Join us in celebrating their invaluable contributions to academia, research, and the continuous pursuit of knowledge. Whether you're a student embarking on a transformative educational journey or a fellow academic seeking inspiration, we invite you to explore the profound impact of our exceptional faculty members.
            </p>
            <button style={{width:'10em',height:'2em'}}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/faculty'}>EXPLORE</Link></button>
        </div>

        
      </div>

      <div style={{height:'1.5em',width:'100%',backgroundColor:'white'}}>

      </div>

    </div>
  );
}
