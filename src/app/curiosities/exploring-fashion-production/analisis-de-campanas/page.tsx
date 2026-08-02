import { ImagesCarousel } from '@/components/ui/images-carousel';
import { SectionPageWrapper } from '@/components/ui/section-page-wrapper';
import Image from 'next/image';

export default function ExploringFashionProductionPage() {
  return (
    <SectionPageWrapper
      title="Analisis de Campañas y Diseñadores"
      description="Analisis que realicé para el curso de Productor de Moda"
    >
      <h2>Todos somos únicos - Gucci</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XhROrqqJpuI?si=kxvStp1ty628J1BR"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="mx-auto rounded-lg my-8"
      ></iframe>
      La idea detras de esta produccion es mostrar que cada persona es unica,
      por mas que parezca una copia a otro, no son lo mismo, no sonparecidas,
      son dos personas totalmente opuestas con diferentes historias, existe una
      individualidad en las personas mas alla que se parezcan o sean identicas a
      otras, cada persona se expresa de formas distintas y exteriorizar esa
      individualidad se logra con la moda. En el transcurso de la pasarela se
      escuchan las siguientes palabras que refuerzan la idea: “I am not a clone,
      a duplicate, a copycat, a second scoop on an ice cream cone” “We look
      alike, but we are not alike.. Two totally opposite” Para lograr esto, se
      buscaron gemelos que para la sesion de fotos como el video promocional
      usaran el mismo atuendo y en posiciones similares pero opuestas, como si
      de un reflejo se tratara, dando a lugar a que la personalidad, gestos y
      formas de expresion destaquen demostrando asi lo unico de cada uno. A su
      vez, el escenario consta de una residencia clasica europea en una pequeña
      ciudad que junto a acciones rutinarias, como dormir, prepararse ante el
      espejo, cepillarse los dientes, generan un ambiente de hogar y sensacion
      de lo conocido, del pasado con el presente, de la historia de uno. En
      cuanto a los recursos, se trata de una reconocida marca la cual pretende
      mostrar su nueva coleccion, para esto se necesita de un casting con el
      arduo trabajo de buscar modelos que sean gemelos, la locacion que seria la
      casa europea con los permisos necesarios, equipos de iluminacion y video,
      peinadores, maquilladores, estilistas con las prendas ya seleccionadas
      para la produccion como tambien un director para la grabacion del video y
      un equipo de post produccion para la edicion y adaptacion del video a los
      medios y redes.
      <h2>Valentino por Alessandro Michele</h2>
      <h4>
        Pavillon des Folies SS 2025 - Le Meta Theatre Des Intimites FW 25/26 -
        Specula mundi SS 2026
      </h4>
      Despues de analizar las tres colecciones de Alessandro Michele pude
      reconocer una influencia de la moda victoriana representada por grandes
      cuellos con velos, hombros y faldas voluptuosas con una medida de
      contemporaneidad reflejando prendas y estilos de mediados de los 70s como
      los jeans, chaquetas, remeras basicas, trajes de sastre, tapados con piel,
      calzado y lentes de sol del año dos mil. Tambien se puede ver el uso de
      transparencias para generar una sensacion de intimidad y la superposicion
      de capas y texturas que le otorgan lo eclectico a los conjuntos sumado al
      uso de grandes prendas ya sea en largo como en su totalidad. Las tres
      presentaciones generan un gran impacto visual como sensorial incrementando
      el dramatismo y el sentido teatral tal como se puede apreciar en el arte
      barroco, que tambien parece haber influenciado al diseñador. En la
      presentacion de Specula Mundi, siendo esta una presentacion hauge couture,
      hay varios conjuntos que se puede sentir que se esta haciendo referencia a
      una clase alta, burguesa por el uso de telas, tocados, tamaños de prendas,
      el estilismo que ellas generan como tambien en los materiales que hacen al
      detalle como el dorado y piedras preciosas. Un detalle que no me parece
      menor en la presentacion de Le Meta Theatre Des Intimites es el uso de
      vendas y tiradores faciales en la cabeza, como tambien las paradas frente
      el espejo de algunos de los modelos, me dio a entender que lo externo es
      mas importante por lo que genera una necesidad de modificarnos fisicamente
      para poder encajar.
      <ImagesCarousel
        items={[
          'Picture2.png',
          'Picture3.png',
          'Picture4.png',
          'Picture5.png',
          'Picture6.png',
        ]}
        subpath="curiosities/exploring-fashion-production/alessandro-michele"
      />
      <h2> Dior por Jonathan Anderson</h2>
      <h4>Spring-Summer 2026 - Autumn Winter 2026-2027 - Winter 2026-2027</h4>
      Por el otro lado tenemos a Jonathan Anderson con un vision mas simple y
      flexible, comparado con Michele, en cual estuvo a cargo de tres
      colecciones para Dior que dan una frescura y un poco de nostalgia por el
      uso de cuellos grandes en camisas con grandes moños, faldas cortas pero
      extensas hacia los costados con volados, pantalones babucha al estilo
      McHammer, pantalones anchos pero sin dejar de lado lo actual, lo moderno
      en los jeans, en las mini faldas y bolsos. Permite que la personalidad se
      haga lucir sin limites ya que podemos ver conjuntos de sastre al lado de
      conjuntos perfecto para la noche como de dia, la versatilidad de la vision
      de Jonathan hace que estas prendas tengan varios fines. Existe una
      conexion con MIchele en el uso de prendas oversize, con exageraciones en
      accesorios como los moños super grandes con cintas hasta la cintura,
      pantalones anchos y tapados que le dan el dramatismo y la impronta a estas
      colecciones.
      <ImagesCarousel
        items={['Picture7.png', 'Picture8.png', 'Picture9.png']}
        subpath="curiosities/exploring-fashion-production/jonathan-anderson"
      />
      <h2>Jil Sander</h2>
      <h4>Spring –– Summer 2025 - Summer 2024 – Fall 2025</h4>
      Habiendo visto los dos extremos, Jil Sander viene a unirlos en una mezcla
      de lo eclectico bajado a tierra. En estas colecciones se ven colores
      tornasolados, prendas oversize exagerando hombros y el uso pieles en
      formato de abrigo o en detalles en hombros o puños, tambien se ve el uso
      de fleco que recuerda a los vestidos de los años 20 dando un sentido de
      nostalgia escondida. Por el otro lado vemos una estructura en el uso de
      trajes de sastre o prendas rigidas cuadradas que dejan que la atencion se
      dirija al resto del conjunto, generando asi un equilibrio entre ambos
      extremos pero sin perder una armonia y personalidad digna de usarse en las
      calles.
      <ImagesCarousel
        items={['Picture10.png', 'Picture11.png', 'Picture12.png']}
        subpath="curiosities/exploring-fashion-production/jil-sander"
      />
      <h2>Moodboard inspirado por Michele, Anderson y Sander</h2>
      <Image
        src={`/assets/images/curiosities/exploring-fashion-production/moodboards/michele-anderson-sander.png`}
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
        style={{ objectFit: 'contain' }}
      />
      <h2>Clara Pinto - @laclarapinto</h2>
      Estudió en el país pero decidió continuar con su carrera en Londres, tiene
      inspiración en lo natural y orgánico, la fluidez y acompañar al cuerpo.
      Uso de colores cálidos y desaturados que genera una sensación de calma y
      bienestar junto al uso de telas transparentes y suaves.
      <h3>Moodboard inspirado en su trabajo</h3>
      <Image
        src={`/assets/images/curiosities/exploring-fashion-production/moodboards/laclarapinto.png`}
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
        style={{ objectFit: 'contain' }}
      />
      <h2>Ay Not Dead – FW26</h2>
      <a
        href=" https://aynotdead.com/pages/campana-otono-invierno-2026"
        target="_blank"
        rel="noopener noreferrer"
      >
        Campaña Otoño Invierno 2026
      </a>
      En esta campaña se puede ver la predominancia del negro, verde, azul y
      marron con distintas combinaciones de contraste e iluminacion. Mas alla de
      la edicion de las imagenes que transmiten nostalgia junto al estilo de las
      prendas que hacen un guiño al guardarropa de nuestros padres, se puede
      observar una armonia del estilo tetradrico siendo el cuarto color el rosa
      que se usa en uno de los conjuntos. Estos tonos generan la sensacion de
      calma, seguridad con una leve sofisticacion pero con autoestima.
      <ImagesCarousel
        items={['Picture1.png', 'Picture2.png', 'Picture3.png']}
        subpath="curiosities/exploring-fashion-production/ay-not-dead-fw26"
      />
      <h2>Hermes SS 2026</h2>
      <a
        href="https://www.showstudio.com/collections/spring--summer-2026/herm%C3%A8s-ss-26-womenswear/catwalk-imagery?gallery=1&look=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hermes SS 2026
      </a>
      El escenario en este desfile hace referencia a un mundo desertico por la
      arena en el piso y el uso de colores marrones y beiges, estos colores se
      ven tambien en los atuendos que intensifican esta sensacion desertica y
      estilo Dune con el uso del cuero y superposicion de prendas. El uso de
      algo tan simple comp un pañuelo de colores crea el contraste necesario
      para poder apreciar las distintas prendas rompiendo la monotonia. El uso
      de arneses, prendas superpuestas, prendas similares a ropa interior marcan
      una tendencia para la temporada.
      <ImagesCarousel
        items={['Picture2.jpg', 'Picture3.jpg']}
        subpath="curiosities/exploring-fashion-production/hermes-ss-2026"
      />
    </SectionPageWrapper>
  );
}
