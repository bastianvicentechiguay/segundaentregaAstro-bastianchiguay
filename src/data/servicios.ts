
//img de las tarjetas
import imgServicioVelatorio from '../assets/img/blog-servicio-velatorios-300x300.jpg';
import imgCremacionTradicional from '../assets/img/blog-servicio-cremacion-300x300.png';
import imgTrasladosySepulturas from '../assets/img/blog-servicio-sepulturas-300x300.webp';
import imgPlacaAcrilica from '../assets/img/blog-servicio-placaacrilica.png';
import imgAvisoRadial from '../assets/img/blog-servicio-radiochiloe.png';
import imgArreglosFlorales from '../assets/img/blog-servicio-Arreglofloral-300x300.jpg';

//img detalles velatorios
import imgAcompañamiento from '../assets/img/acompañamientologistico.webp';
import imApoyoyContencion from '../assets/img/apoyoycontencion.jpg';

// img detalles cremación
import imgAsesoria from '../assets/img/asesoria legal.jpg';
import imgEntregaCenizas from '../assets/img/entregacenizas.jpg';

// img de detalles traslados y sepulturas
import imgTrasladoCadaver from '../assets/img/traslado de-cadaver.jpg';
import imgUltimoTraslado from '../assets/img/ultimo traslado.avif';

// img detalles placa acrilica
import imgFabricacionPlaca from '../assets/img/fabricacionplaca.jpg';
import imgDiseño from '../assets/img/asesoriaydiseño.webp';

// img detalles aviso radial
import imganuncioradio from '../assets/img/asesoriaanuncio.jpg';
import imgcostosradio from '../assets/img/radiocosto.jpg';

// img detalles arreglos florales
import imgFlores from '../assets/img/floresAsesoriayDiseño.jpg';
import imgCoronaFlores from '../assets/img/coronaAsesoriasyDiseño.jpg';
import imgCoronasFunebres from '../assets/img/coronas funebres.jpeg';

//  Imagen de banners de paginas para cada articulo
import imgBannerVelatorios from '../assets/img/velatorio imagen grande.jpg'; 
import imgBannerCremaciones from '../assets/img/cremaciones.jpg'; 
import imgBannerTraslados from '../assets/img/traslados.jpg'; 
import imgBannerPlaca from '../assets/img/placa acrilica.jpg'; 
import imgBannerAvisoRadial from '../assets/img/avisoderadio.png'; 
import imgBannerArreglosFlorales from '../assets/img/arreglos-florales.webp'; 

export const serviciosData = [

// --- Datos de todos los servicios ---

 // --- SERVICIO 1 velatorios ---
     {
    slug: "velatorios",
    titulo: "Velatorios", 
    descripcion: "Salas de velación equipadas para despedidas dignas y respetuosas.",
    imagenUrl: imgServicioVelatorio.src, 
        // --- Pagina de Detalles ---
    tituloPagina: "Servicio velatorio", 
    imagenBanner: imgBannerVelatorios.src, 
    textoIntro: `
      En Funeraria Pluma comprendemos la importancia de despedir a un ser querido en un ambiente digno,
       sereno y respetuoso. Por ello, ponemos a disposición de las familias nuestros servicios velatorios,
        pensados para brindar un espacio acogedor y tranquilo donde los deudos y amigos puedan reunirse
       a rendir homenaje y compartir el recuerdo de quien parte.
    `,
    detalleSecciones: [
      {
        titulo: "Acompañamiento Logistico",
        imagen: imgAcompañamiento.src,
        puntos: [
          "<strong>Gestion del cuerpo:</strong> realizamos el Traslado del cuerpo desde el lugar del fallecimiento hasta las instalaciones de la funeraria, Preparación estética del cuerpo (tanatopraxia o embalsamamiento",
          "<strong>Coordinación de la ceremonia:</strong> Reserva de espacios para el velorio (capillas o tanatorios), Organización de la ceremonia civil o religiosa, incluyendo la gestión de flores, música y otros detalles personalizados.",
          "<strong>Gestión administrativa y burocrática:</strong>Asesoramiento y gestión de trámites legales y administrativos necesarios para el entierro o cremación."
        ]
      },
      {
        titulo: "Asesoría integral y gestión de trámites",
        imagen: imgAsesoria.src,
        puntos: [
          "<strong>Asesoramiento y planificación:</strong> Orientación en la elección de servicios funerarios según las necesidades y deseos de la familia.",
          "<strong>Asesoría emocional y contención:</strong> Acompañamiento para ayudar a la familia a tomar decisiones y afrontar el dolor de la pérdida.",
          "<strong>Tramitación CMD y inscripción de la defunción:</strong> Lramitación de documentos como el Certificado Médico de Defunción (CMD) y la inscripción de la defunción en el Registro Civil."
        ]
      },
      {
        titulo: "Servicios de Apoyo y Contención Familiar",
        imagen: imApoyoyContencion.src,
        puntos: [
         "<strong>Acompañamiento en el duelo:</strong> Un equipo de profesionales está disponible para ofrecer apoyo emocional y psicológico a los familiares durante y después del servicio.",
          "<strong>Preparación de ceremonias personalizadas:</strong>  planificamos un homenaje que refleje la vida y los gustos del ser querido, incluye selección de música, poemas, o cualquier elemento que rinda tributo a su memoria.",
          "<strong>Recordatorios y obituarios:</strong> ecordatorio personalizado y gestion de la publicación de obituarios en medios digitales o impresos, para que la comunidad pueda enterarse."
        ]
      }
    ]
  },
  
  // --- SERVICIO 2: cremación ---
  {
    slug: "cremacion",
    titulo: "Cremaciones", 
    descripcion: "Opciones de cremación con distintos paquetes adaptados a tus necesidades.",
    imagenUrl: imgCremacionTradicional.src, 
        // --- Pagina de Detalles ---
    tituloPagina: "Servicio de cremación", 
    imagenBanner: imgBannerCremaciones.src, 
    textoIntro: `
      En Funeraria Pluma, entendemos la importancia de despedir a un ser querido de una manera digna y respetuosa. 
     Por eso, si la cremación es la opción elegida, ofrecemos un espacio sereno para las familias. 
      Nuestros servicios de cremación están pensados para brindar un ambiente acogedor y tranquilo, 
      donde los familiares y amigos pueden reunirse para rendir homenaje, compartir recuerdos y 
      encontrar consuelo en este momento de despedida.
    `,
    detalleSecciones: [
      {
        titulo: "Asesoría integral y gestion de tramites",
        imagen: imgAsesoria.src,
        puntos: [
          "<strong>Asesoramiento y planificación:</strong> Orientación en la elección de servicios funerarios según las necesidades y deseos de la familia.",
          "<strong>Asesoría emocional y contención:</strong> Acompañamiento para ayudar a la familia a tomar decisiones y afrontar el dolor de la pérdida.",
          "<strong>Tramitación CMD y inscripción de la defunción :</strong>Tramitación de documentos como el Certificado Médico de Defunción (CMD) y la inscripción de la defunción en el Registro Civil."
        ]
      },
      {
        titulo: "Proceso de cremación tradicional",
        imagen: imgCremacionTradicional.src,
        puntos: [
          "<strong>Traslado del cuerpo:</strong> La funeraria traslada al ser querido desde el lugar del deceso a sus instalaciones.",
          "<strong>Preparación del cuerpo:</strong> Se prepara al fallecido de manera digna y respetuosa. Se retiran objetos como marcapasos, prótesis, o joyas, que pueden causar problemas o contaminación durante la cremación.",
          "<strong>Proceso de cremación:</strong> La cremación se realiza en un crematorio mediante altas temperaturas para reducir el cuerpo a cenizas."
       ]
      },
      {
        titulo: "Entrega de cenizas",
        imagen: imgEntregaCenizas.src,
        puntos: [
          "<strong>Recuperación y procesamiento de las cenizas:</strong> Una vez finalizada la cremación, los restos óseos son retirados y procesados para que queden en forma de cenizas homogéneas. Cualquier resto metálico se retira.",
          "<strong>Entrega a la familia:</strong> La funeraria se pone en contacto con la familia para coordinar la entrega de la urna, a menudo junto con un certificado de cremación.",
          "<strong>Colocación en la urna:</strong> Las cenizas son depositadas en la urna elegida por la familia."
        ]
      }
    ]
  },
// --- SERVICIO 3: traslados y sepulturas ---
  {
    slug: "Traslados y sepulturas",
    titulo: "Traslados y sepulturas", 
    descripcion: "Servicio completo de traslado y sepultura en cementerios autorizados.",
    imagenUrl: imgTrasladosySepulturas.src, 
        // --- Pagina de Detalles ---
    tituloPagina: "Servicio de traslado y sepultura", 
    imagenBanner: imgBannerTraslados.src, 
    textoIntro: `
      la despedida final de un ser querido es un momento de profunda emotividad.
     Por ello, ofrecemos nuestro servicio de traslado y sepultura para acompañarlos en este proceso con el mayor respeto y profesionalismo.
Nos encargamos de cada detalle, desde la preparación del ser querido hasta la coordinación del entierro,
  para que la familia pueda dedicarse por completo a honrar la memoria de quien ha partido.
    `,
    detalleSecciones: [
      {
       
        titulo: "Traslado",
        imagen: imgTrasladoCadaver.src,
        puntos: [
          "<strong>Traslado del cuerpo:</strong> El servicio incluye el traslado del fallecido desde el lugar del deceso (casa, hospital, etc.) hasta la funeraria o el lugar del velatorio.",
          "<strong>Preparación del cuerpo:</strong> Se realiza la preparación física del cuerpo (tanatopraxia y tanatoestética) para su presentación en el velatorio. Esto incluye la higienización, vestimenta y arreglo estético para que los familiares puedan despedirse dignamente.",
          "<strong>Ataud y urna cineraria:</strong> Se ofrece una variedad de modelos de ataúdes para la sepultura. Si optas por el entierro de una urna con cenizas (en caso de cremación previa), también se selecciona una urna adecuada."
       ]
      },
      {
        titulo: "Sepultura",
        imagen: imgUltimoTraslado.src,
        puntos: [
          "<strong>Ultimo traslado:</strong> Una vez finalizado el velatorio, se traslada el ataúd al cementerio o mausoleo.",
        "<strong>Ceremonia de sepultura:</strong> La funeraria se encarga de coordinar la ceremonia de sepultura, incluyendo la apertura y cierre de la tumba o nicho, y la disposición del féretro.",
       ]
      }
    ]
  },
  
// --- SERVICIO 4: placa acrilica ---
  {
    slug: "Placa acrilica",
    titulo: "Placa acrilica", 
    descripcion: "Suministro de placas conmemorativas personalizadas para honrar la memoria del ser querido",
    imagenUrl: imgPlacaAcrilica.src, 
        // --- Pagina de Detalles ---
    tituloPagina: "Servicio de instalación de placa acrilica", 
    imagenBanner: imgBannerPlaca.src, 
    textoIntro: `
      sabemos que los detalles marcan la diferencia. Por eso,
       para honrar la memoria de un ser querido de forma duradera,
        ponemos a su disposición nuestro servicio de placas fúnebres. 
        Cada placa es un tributo personalizado y una expresión de cariño, 
        diseñada para perdurar en el tiempo y servir como un hermoso recordatorio de la vida y
         el legado de quien ha partido.
    `,
    detalleSecciones: [
      {
     
        titulo: "Diseño",
        imagen: imgDiseño.src,
        puntos:  [
          "<strong>Personalización:</strong> Se elige el diseño de la placa, que puede ser rectangular, ovalada, o con forma de libro. También se personaliza con el nombre, las fechas de nacimiento y fallecimiento, y una frase o epitafio.",
          "<strong>Coordinación de la ceremonia:</strong> Reserva de espacios para el velorio (capillas o tanatorios), Organización de la ceremonia civil o religiosa, incluyendo la gestión de flores, música y otros detalles personalizados.",
          "<strong>Inclusion de imagenes</strong> Se puede añadir una foto en cerámica o grabada directamente en la placa. También es común incorporar símbolos religiosos o laicos (como cruces, flores, etc.)."
        ]
      },
      {
        titulo: "Fabricación",
        imagen: imgFabricacionPlaca.src,
        puntos: [
          "<strong>Selección del material:</strong> Aunque pides específicamente por placas acrílicas, existen otros materiales comunes, como el mármol, el granito, el bronce o el aluminio, cada uno con distintas características de durabilidad y apariencia.",
          "<strong>Proceso de grabado:</strong> Una vez que se aprueba el diseño, se procede a grabar la información. Dependiendo del material, se puede usar grabado láser, chorro de arena o impresión UV para los detalles a color.",
          "<strong>Acabado:</strong> Se le aplica un tratamiento para asegurar que la placa sea resistente a las condiciones climáticas. Esto incluye el pulido y, en algunos casos, el llenado de las letras grabadas con pintura especial para que resalten."
        ]
      }
    ]
  },
// --- SERVICIO 5: aviso radial ---
{
    slug: "Aviso radial",
    titulo: "Aviso radial", 
    descripcion: "Difusión de anuncios en medios locales para informar sobre el fallecimiento y los servicios asociados.",
    imagenUrl: imgAvisoRadial.src, 
        // --- Pagina de Detalles ---
    tituloPagina: "Servicio de aviso radial", 
    imagenBanner: imgBannerAvisoRadial.src, 
    textoIntro: `
      En Funeraria Pluma, entendemos la importancia de despedir a un ser querido de una manera digna y respetuosa. 
      Por eso, si la cremación es la opción elegida, ofrecemos un espacio sereno para las familias. 
      Nuestros servicios de cremación están pensados para brindar un ambiente acogedor y tranquilo, 
      donde los familiares y amigos pueden reunirse para rendir homenaje, compartir recuerdos y 
      encontrar consuelo en este momento de despedida.
    `,

    detalleSecciones: [
      {
        titulo: "Asesoría para el anuncio",
        imagen: imganuncioradio.src,
        puntos: [
          "<strong>Personal de la funeraria ayuda a redactar el aviso:</strong>  asegurándose de que contenga toda la información necesaria: el nombre completo del fallecido, la fecha de su deceso y la edad.",
          "<strong>Detalles del Servicio Funerario:</strong> Se incluyen los detalles del velatorio, ceremonia religiosa o laica, y los horarios y lugares de la sepultura o cremación.",
          "<strong>Coordinación con la Radio:</strong>La funeraria se encarga de gestionar la publicación del aviso con las estaciones de radio locales. Esto incluye contactar a la emisora, asegurar los horarios de transmisión y confirmar que el mensaje sea emitido de manera clara."
        ]
      },
      {
        titulo: "Costos",
        imagen: imgcostosradio.src,
        puntos: [
          "<strong>Gestion de costos::</strong> Se te informa sobre el costo del servicio radial, que puede variar según la emisora, la duración del anuncio y la cantidad de veces que se transmitirá.",
          
        ]
      },
     
    ]
  },
  // --- SERVICIO 6: arreglos florales ---
  {
    slug: "Arreglos florales",
    titulo: "Arreglos florales", 
    descripcion: "Provisión de arreglos florales para embellecer el entorno y rendir homenaje al difunto.",
    imagenUrl: imgArreglosFlorales.src, 
    // --- Pagina de Detalles ---
    tituloPagina: "Servicio de arreglos florales", 
    imagenBanner: imgBannerArreglosFlorales.src, 
    textoIntro: `
      En Funeraria Pluma, comprendemos la importancia de honrar a un ser querido en un ambiente digno,
       sereno y respetuoso. Por ello, ponemos a disposición de las familias una cuidadosa selección de arreglos florales,
        pensados para brindar un tributo natural y emotivo. Nuestras composiciones florales, desde coronas hasta ramos y arreglos de pedestal,
         están diseñadas para acompañar y embellecer el espacio del último adiós, permitiendo a los deudos y amigos expresar sus condolencias y compartir el recuerdo de quien parte.


    `,
    detalleSecciones: [
      {
        titulo: "Asesoría y Diseño Personalizado",
        imagen: imgFlores.src,
        puntos: [
          "<strong>Consulta y Selección:</strong> Se te asesora en la selección del tipo de arreglo floral, considerando el espacio del velatorio, la ceremonia o el cementerio. Las opciones más comunes incluyen coronas, cruces florales, palmas, y arreglos de pedestal.",
          "<strong>Personalización:</strong>podemos adaptar los arreglos para que reflejen la personalidad o los gustos del fallecido, como su color favorito, el tipo de flores que le gustaban o la forma de su hobby.",

         ]
      },
      {
        titulo: "Creacion del arreglo",
        imagen: imgCoronaFlores.src,
        puntos: [
          "<strong>Selección de Flores :</strong> Se utilizan flores frescas y de alta calidad para garantizar que el arreglo se mantenga en óptimas condiciones durante el servicio.",
          "<strong>Confeccion profesional:</strong> Los arreglos son diseñados por floristas profesionales con experiencia en arreglos fúnebres, asegurando que el diseño sea apropiado y respetuoso.",
        ]
      },
      {
        titulo: "Entrega y logística",
        imagen: imgCoronasFunebres.src,
        puntos: [
          "<strong>Envio:</strong> El arreglo es entregado directamente en la sala de velación, iglesia o en el lugar del servicio, asegurando que llegue a tiempo.",
          "<strong>Instalación:</strong> El personal se encarga de colocar el arreglo en el lugar correcto, ya sea sobre el ataúd, en un pedestal o en la entrada de la sala.   ",
        ]
      }
    ]
  },


  
];