import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Work from './components/Work';
import Card from './components/Card';
import Des from './components/Des';
import Features from './components/Features';
import FeaturesItem from './components/Features-item';
import Tabs from './components/Tabs';


function App() {

  const data = [
    {
      img: "./src/assets/WORK-1.png",
      title: 'Best Programming',
      des: "Quam rem vitae est autem mole-stias explicabo debitis sint.Vero aliquid quidem commodi.Repud -iandae amet nihil natus in distin-ctio suscipit id.Doloremque duc -imus ea sit non.",
    },
    {
      img: "./src/assets/WORK-2.png",
      title: 'Best Designing',
      des: "Quam rem vitae est autem mole-stias explicabo debitis sint.Vero aliquid quidem commodi.Repud -iandae amet nihil natus in distin-ctio suscipit id.Doloremque duc -imus ea sit non.",
    },
    {
      img: "./src/assets/WORK-1.png",
      title: 'Best Editing',
      des: "Quam rem vitae est autem mole-stias explicabo debitis sint.Vero aliquid quidem commodi.Repud -iandae amet nihil natus in distin-ctio suscipit id.Doloremque duc -imus ea sit non.",
    },
  ];

  const features = [
    {
      title: 'Web Designing',
    },
    {
      title: 'Best Designing',
    },
    {
      title: 'Best Editing',
    },
  ];

  const tabs = [
    {
      button: 'Digital Marketing',
      title: 'Digital Marketing',
      heading1: 'Repudiandae rerum velit modi et officia quasi facilis',
      firstDes: 'Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.',
      heading2: 'Incidunt non veritatis illum ea ut nisi',
      secDes: 'Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.',
    },
    {
      button: 'Web App',
      title: 'Web Applications',
      heading1: 'Repudiandae rerum velit modi et officia quasi facilis',
      firstDes: 'Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.',
      heading2: 'Incidunt non veritatis illum ea ut nisi',
      secDes: 'Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.',
    },
    {
      button: 'Design',
      title: 'UI/UX Design',
      heading1: 'Repudiandae rerum velit modi et officia quasi facilis',
      firstDes: 'Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.',
      heading2: 'Incidunt non veritatis illum ea ut nisi',
      secDes: 'Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et perferendis.',
    },
  ];

  return (
    <div className='w-full h-screen scroll-smooth'>
      <Nav />
      <Banner />
      <About />
      <div className="work-container w-full h-4/5 bg-[#E3E7FB] pt-10">
        <Work />
        <div className="card-container h-full flex justify-around items-center">
          {data.map((item, index) => (
            <Card data={item} />
          ))}
        </div>
      </div>
      <Des />
      <div className="features-container w-full h-5/6 pt-10">
        <Features />
        <div className="features h-5/6 flex items-center justify-center">
          <div className="main z-20" data-aos="zoom-in">
            <img src="./src/assets/FEATURES-IMG.png" alt="" width="400px" />
          </div>
          <div className="features-content block w-1/3 h-2/4 rounded-r-lg bg-[#E4E8FB] z-10 overflow-hidden" data-aos="fade-right" data-aos-delay="500">
            <marquee behavior="scroll" direction="up">
              {features.map((item, index) => (
                <FeaturesItem features={item} />
              ))}
            </marquee>
          </div>
        </div>
      </div>

      <div className='knowMore-sec'>
        <ul className='flex text-xl font-medium gap-5'>
          {tabs.map((item, index) => {
              <Tabs tabs={item} />
          })}
        </ul>
      </div>






    </div>
  );
}

export default App;