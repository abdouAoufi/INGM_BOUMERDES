import React from "react";
import NavbarHome from "../../components/Navbar/NavbarHome";
import * as assets from "../../assets/assetes";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";


function Welcome(props) {
  window.document.title = "FSI";
  let features = [
    {
      title: "L'actualites",
      src: assets.landSVG.news,
      body: "Les admins partage tous qui est important pour leur collegues.",
    },
    {
      title: "Les cours et TD's",
      src: assets.landSVG.land_two,
      body: "On partage les cours avec nos collegues.",
    },
    {
      title: "Empoloi du temp",
      src: assets.landSVG.emploi,
      body: "On destribuer toujours la deniere mis a jour de l'emploi du temp.",
    },
    {
      title: "Affichage des examens",
      src: assets.landSVG.exams,
      body: "Les profs peuv donner les notes au niveau de site.",
    },
  ];

  const goToHome = () => {
    props.history.replace("/auth");
  }

  return (
    <div>
      {/* // ! NAVBAR-HOME  */}

      <NavbarHome />

      {/* Hero section */}
      <main>
        <div className="pt-12 bg-bgcolor lg:h-screen">
          <div className=" px-12  mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left">
              <p className=" tracking-loose w-full font-semibold">
                Êtes-vous fatigué de manquer de nouvelles sur l'université
                &#127758; ?
              </p>
              <h1 className="my-4 text-3xl py-2 lg:text-5xl font-bold leading-tight">
                Nous avons trouvé la{" "}
                <span className="text-primary"> solution </span> pour nos
                étudiants ! &#128640;
              </h1>
              <p className="leading-normal text-2xl mb-8">
                Un site Web simple pour vous tenir au courant de notre faculté
              </p>
              {/* // ! Button */}
              <button onClick={goToHome} className="mx-2 lg:mx-0  bg-primary text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out">
                S'inscrire
              </button>
            </div>

            <div className=" w-full md:w-3/5 py-6 text-center">
              <img className="w-full mx-auto md:w-4/5 z-50" src={assets.landSVG.bgWelcome} alt="bg" />
            </div>
          </div>
        </div>
      </main>

      {/* //! Features  */}

      <div className="pt-16 text-center ">
        <div className=" font-semibold uppercase text-primary py-2 px-4 bg-bgcolor border-0 inline-block rounded-xl">
          Services
        </div>
        <h1 className="mt-6 text-xl lg:text-3xl font-bold leading-tight">
          Prestations de services
        </h1>
        <p className=" mt-4 lg:text-lg mb-8 w-1/2  mx-auto">
          Nous avons couvert les fonctionnalités de base pour nos étudiants
          telles que:
        </p>
      </div>
      {/* Features */}
      <div className="md:flex px-12 mb-8 justify-around">
        {features.map((feature) => (
          <Card key={feature.title} title={feature.title} body={feature.body} src={feature.src} />
        ))}
      </div>

      {/* landing */}
      <div className="mt-24 mb-12  flex flex-col justify-center place-center flex-wrap px-16 mb-12">
        <div className="flex w-full justify-between items-center flex-col md:flex-row ">
          <div className="lg:w-1/3">
            <h1 className="my-4  text-xl md:text-2xl lg:text-4xl lg:w-5/6  font-bold leading-tight">
              Tout le monde{" "}
              <span className="font-bold text-primary">partage &#128074; </span>
              !
            </h1>

            <p className="leading-normal text-sm md:text-lg mb-8">
              Ce site Web est créé par des étudiants que tout le monde peut
              publier partager et contribuer à{" "}
              <span className="font-bold text-primary">developper</span> le
              siteweb .
            </p>
          </div>
          <div className=" lg:w-8/12 mb-12 ">
            <img src={assets.landSVG.land_one} alt="bg" className="w-3/5 mx-auto" />
          </div>
        </div>

        <div className="flex w-full justify-between items-center flex-col md:flex-row ">
          <div className="lg:w-1/3 md:order-2">
            <h1 className="my-4 text-xl md:text-2xl lg:text-4xl lg:w-5/6  font-bold leading-tight">
              Meme notre chers{" "}
              <span className="font-bold text-primary">professeurs</span> !
            </h1>

            <p className="leading-normal text-sm md:text-lg mb-8">
              Nos chers professeurs peuvent également partager leur travail et
              leur expérience!
            </p>
          </div>
          <div className=" lg:w-8/12 mb-12  md:order-1">
            <img src={assets.landSVG.teaching} alt="bg" className="w-3/5 mx-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
