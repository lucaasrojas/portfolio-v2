import { SectionPageWrapper } from '@/components/ui/section-page-wrapper';
import { TopicCard } from '@/components/ui/topic-card';
import Image from 'next/image';
export default function PropuestasPage() {
  return (
    <SectionPageWrapper
      title="Propuestas"
      description="Propuestas de producciones de moda, con moodboards, desfiles y recursos para llevarlas a cabo."
    >
      <h2>Board para Marca de Ropa</h2>
      <b>Publico Objetivo: mujer de clase media de 25 a 45 años</b>
      <br />
      <b>Concepto: mujer romántica sin prejuicios</b>
      <br />
      Para el estilo decidi ir por el camino de algo floral, romantico witchy
      rompiendo con el estereotipo o el fundamento de “mujer que solo es mujer"
      para darle mas protagonismo a la actitud e impronta, lo pense en un estilo
      CEO o business apuntando al exito al tope de la jerarquia con un detalle
      de cuero y cadenas BSDM para cortar con lo tipico y condimentarlo con
      atrevimiento, con romper las reglas del juego e ir mas alla. Me cuesta
      pensar una locación ya que no conozco mucho y no dejo de pensar en el
      presupuesto, teniendo en cuenta que el publico objetivo son las mujeres de
      clase media optaria por un palacio en las afueras que une el lado burgues
      de alto status de CEO al que la mayoria apunta y el lado suave,
      nostalgico, femenino del marmol o piedra tallada, con mucho detalle
      saliendo así también de lo monotono y minimalista de nuestro dia a dia
      despertando las emociones de lo hecho a mano como en el Palacio Sans Souci
      que tuve el placer de conocer por dentro y creo que se ajusta con el
      parque y el interior. Como plan B podria ser una fabrica abandonada con
      ambientacion romantica teniendo asi ambas facetas del moodboard en la
      escenario.
      <Image
        src={`/assets/images/curiosities/exploring-fashion-production/moodboards/marca-moda.jpg`}
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
        style={{ objectFit: 'contain' }}
      />
      <h3>Desfile, recursos y paso a paso</h3>
      De poder elegir me gustaria que las piezas cuenten la historia de
      crecimiento de la protagonista desde sus comienzos hasta que llega a la
      cumbre de su camino acompañada de las prendas como armaduras contra las
      adversidades. El formato de la pasarela seria una S alargada o una linea
      no tan recta con fluidez que comienza del lado mas externo del parque y
      culmina en las escaleras del palacio, empezando por las prendas mas
      “jovenes" y terminando en las pienzas del exito creando el efecto de linea
      de tiempo, de crecimiento y a lo ultimo que cada modelo se posicione de
      forma respetando esta linea de tiempo para hacer mas evidente este
      crecimiento Con respecto a modelos, me gustaria personas reales, curvy,
      delgadas, altas, medianas, haciendo enfasis en aquellas mujeres que viajan
      horas a su trabajo a sus clases y soportan mucho mas que otras con otras
      facilidades, todas pueden llegar al exito, estamos dando la armadura para
      que puedan enfocarse en crecer y no defenderse. La actitud en la pasarela
      la imagino al principio mas retraida, como sin confianza, cansada pero a
      medida que van pasando la postura se endereza, hay mas actitud, mas
      empoderamiento, se va soltando no le interesa lo que digan, su pisada es
      firme y hace temblar el suelo. Para la musica siento que Dua Lipa le da la
      sensacion de firmeza y poder que estoy imaginando, mas que nada el album
      Future Nostalgia, lo ideal seria por la tarde al aire libre, en caso de
      mal dia podria ser un estilo de tunel plástico que cubra la pasarela y al
      público e iluminación calida desde los costados y en la pasarela,
      iluminando las prendas indirectamente para no saturar y no hacer brillar.
      No se si es conveniente o esta permitido, pero me gustaria que en algun
      momento las modelos puedan hacerse selfies como guiño a festejar ese
      momento de exito compartiendolo en las redes y ese material que sea parte
      del producto final. Esto daria el toque contemporáneo. Maquillaje muy
      simple delineado un poco de sombra tenue y tinta de labios que impacte,
      los labios representan el habla y lo que se dice genera un gran impacto.
      Como peinado un rodete, al principio todo desarmado desprolijo demostrando
      el esfuerzo que se esta haciendo la lucha, a lo ultimo sigue estando algo
      desprolijo pero mejor, sigue habiendo esfuerzo pero no conlleva tanto como
      antes ya se crearon las bases del exito. Me falta la campaña de marketing,
      aca es donde pierdo, no quiero ir por el clasico uso de influencers, me
      gustaria mas clasico como carteles en la calle en esos lugares donde las
      trabajadoras y estudiantes pasan y donde aspiran estar, acompañado de un
      buen copy e imagen visual generaria que el publico compartiera en sus
      redes creando asi una publicidad organica.
    </SectionPageWrapper>
  );
}
