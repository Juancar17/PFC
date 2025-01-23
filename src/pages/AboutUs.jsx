import React, { useEffect } from "react";

const AboutUs = () => {
  const stats = [
    { label: "Productos", value: "30+" },
    { label: "Clientes", value: "20K+" },
    { label: "Comentarios", value: "3K+" },
  ];

  const galleryImages = [
    "../public/4.png",
    "../public/3.png",
    "../public/6.jpg",
    "../public/5.png",
  ];

  const coffeeGallery = [
    "https://cdn.pixabay.com/photo/2017/07/26/02/55/coffe-2540278_640.jpg",
    "https://cdn.pixabay.com/photo/2017/04/28/13/07/coffee-2268307_640.jpg",
    "https://cdn.pixabay.com/photo/2019/05/14/14/33/coffe-4202577_640.jpg",
    "https://cdn.pixabay.com/photo/2016/04/26/16/58/coffe-1354786_640.jpg",
  ];

  const coffe = [
    "https://cdn.pixabay.com/photo/2020/02/01/15/28/coffe-shop-4810584_640.jpg",
    "https://cdn.pixabay.com/photo/2019/01/16/22/37/coffee-3936903_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/14/17/58/coffee-8388244_640.jpg",
    "https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_640.jpg",
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-black text-white py-16 px-8" id="nosotros">
      <div className="container mx-auto space-y-16 mt-24">
        {/* NOSOTROS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-6xl font-extrabold mb-6 text-[#4d79ff]">
              NOSOTROS
            </h2>
            <p className="text-lg mb-8 animate-fadeIn">
              En <span className="text-[#4d79ff]">Kafé con K</span>, ofrecemos
              el lugar perfecto para que tú y tus mascotas disfruten de momentos
              inolvidables. Nuestro espacio está diseñado para brindar
              comodidad, calidad y felicidad, tanto para ti como para tus amigos
              peludos.
            </p>
            <p className="text-lg mb-8 animate-fadeIn">
              Con una ubicación única, cientos de clientes satisfechos y un
              ambiente diseñado para que tanto tú como tus mascotas se sientan
              como en casa, nos enorgullece ser una de las cafeterías más
              acogedoras y especiales de la ciudad.
            </p>
            <div className="flex gap-8 mt-4 animate-fadeIn">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Galería */}
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="rounded-lg shadow-lg object-cover h-80 w-full"
              />
            ))}
          </div>
        </div>

        {/* NUESTRA VISIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12 animate-fadeIn">
          <div>
            <h2 className="text-6xl font-extrabold mb-6 text-[#4d79ff]">
              NUESTRA VISIÓN
            </h2>
            <p className="text-lg mb-8 animate-fadeIn">
              En <span className="text-[#4d79ff]">Kafé con K</span>, nos
              esforzamos por ser más que una cafetería. Queremos ser el lugar
              donde las personas y sus mascotas creen recuerdos imborrables,
              celebren momentos especiales y encuentren felicidad en los
              detalles.
            </p>
          </div>

          <img
            src="https://img.freepik.com/fotos-premium/concepto-cafeteria-amigable-mascotas-estilo-vida-concepto-mascotas-perros-cortados-entorno-urbano_330121-1202.jpg"
            alt="Nuestra visión"
            className="rounded-lg shadow-lg object-cover h-80 w-full"
          />
        </div>

        {/* FROM THE BEST COFFEE BEANS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-6xl font-extrabold mb-6 text-[#4d79ff]">
              DE LOS MEJORES GRANOS DE KAFÉ
            </h2>
            <p className="text-lg mb-8 text-gray-300 animate-fadeIn animate-fadeIn">
              Nuestros granos de café son seleccionados de las mejores
              plantaciones alrededor del mundo, garantizando un sabor único e
              inigualable en cada taza. Desde la recolección manual de las
              cerezas más maduras hasta un meticuloso proceso de tostado, cada
              etapa está cuidadosamente diseñada para ofrecer una experiencia
              excepcional que deleite tus sentidos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {coffeeGallery.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Coffee Gallery ${index + 1}`}
                className="rounded-lg shadow-lg object-cover h-80 w-full"
              />
            ))}
          </div>
        </div>

        {/* OUR MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fadeIn">
          <div>
            <h2 className="text-6xl font-extrabold mb-6 text-[#4d79ff]">
              NUESTRA MISION
            </h2>
            <p className="text-lg mb-8 text-gray-300 ">
              En <span className="text-[#4d79ff]">Kafé con K</span>, nuestra
              misión es ser un lugar donde las conexiones florecen, no solo
              entre personas, sino también con nuestras mascotas. Nos dedicamos
              a ofrecer productos de alta calidad, un servicio excepcional y un
              ambiente acogedor que inspire momentos de felicidad y
              tranquilidad. Queremos ser el punto de encuentro donde los
              recuerdos se crean y las sonrisas son una constante.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fadeIn">
            {coffe.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Coffee Gallery ${index + 1}`}
                className="rounded-lg shadow-lg object-cover h-80 w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
