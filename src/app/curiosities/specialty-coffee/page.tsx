import { SectionPageWrapper } from '@/components/ui/section-page-wrapper';
import {
  Table,
  TableRow,
  TableHead,
  TableHeader,
  TableBody,
} from '@/components/ui/table';

export default function SpecialtyCoffeePage() {
  return (
    <SectionPageWrapper
      title="Specialty Coffee"
      description="Explorando el mundo del café de especialidad, desde su origen hasta la taza."
    >
      El barismo es la capacidad de preparar bebidas de calidad a base de cafe,
      conociendo los procesos de preparacion y los tipos que existen. Es una
      practica que nace a principios del siglo XX. El barista es el profesional
      que se encarga de preparar y servir el café, y debe tener conocimientos
      sobre la variedad de granos, los sabores, métodos de extracción, técnicas
      de latte art y la importancia de la frescura del café. El cafe nace de la
      cereza del arbusto cafeto que crece en zonas tropicales o subtropicales.
      En el interior de la fruta hay dos semillas verdes llamadas chias. Solo
      las mejores cerezas son elegidas para el tueste de donde se extraen los
      sabores dulcue, acido y amargo.
      <h2>Historia del Café de Especialidad</h2>
      Existe la creencia que en el siglo XIII los etiopes del actual pueblo
      Oromo fueron los primeros en descubrir y reconocer el efecto del cafe.
      <ul className="list-disc list-inside my-4">
        <li>
          <b>Siglo XIII:</b> Al inicio el cafe se consumia como cafe turco
          resultaba en una bebida intensa y con mucho cuerpo
        </li>
        <li>
          <b>Siglo XIV:</b> Aparecio el cafe de filtro, con cuerpo suave y
          delicado con los aromas como en un te
        </li>
        <li>
          <b>Siglo XVII:</b> En 1884 con la revolucion industrial se necesitaba
          cafe mas rapido por lo que nace la maquina espresso
        </li>
      </ul>
      <h3>Las 3 olas del cafe</h3>
      <h4>Primera ola</h4>
      Llegada del cafe de Medio Oriente a Europa. Antes de esto la unica forma
      de tomarlo era solo o el turco. Los italianos fueron los primeros en
      probar otras maneras de beberlo y se dieron combinaciones con leche. Las
      consecuencias de esto dieron lugar a “La cultura del cafe”, siglo XVII.
      Esta etapa fue cuando se dio a conocer al muendo y se convirtio en una
      bebida cotizada
      <h4>Segunda ola</h4>
      Empieza con la Revolucion Industrial cuando se industrializo el cafe.
      Evolucionaron los procesos de produccion, en el siglo XVIII llegaron las
      maquinas italiana con bares como medida de presion. La demanda no daba
      abasto por el largo tiempo que tomaba hacer. Por ello esta ola se da por
      la aparicion de las maquinas y cafeterias de indole industrial.
      <h4>Tercer ola</h4>
      Comienza en el siglo XXI gracias a los avances tecnologicos y la demanda
      mundial. Hubo un incremento en la calidad del cafe, comercio directo,
      mayor enfasis en la sustentabilidad y metodos de preparacion innovadores.
      Hay una caracteristica adicional que es el servicio al consumidor. En esta
      etapa nacen los baristas, al consumidor le llega la informacion
      directamente por distintos canales de comunicacion
      <h2>El cafe</h2>
      Los cafetos pueden llegar a los 9m de altura pero se los mantiene bajos
      para que conserven la energia y facilitar la cosecha. Lo mas chicos tienen
      mejor calidad y mejor rendimiento de cosecha. Depende de la variedad puede
      tardar entre 3 a 4 años en dar frutos.
      <h3>Composicion</h3>
      <ul className="list-disc list-inside my-4">
        <li>
          Cascara: La piel se llama exocarpio, es verde hasta que madura y se
          torna roja, amarilla, naranja o rosa segun la variedad
        </li>
        <li>
          Mucilago: Capa interna de la pulpa, tambien hay una capa de pectina
          debajo del mucilago. Ambas son ricas en azucares naturales.
        </li>
        <li>Semilla: Tecnicamente endospermo</li>
        <li>
          Pulpa: Debajo de la piel de la cereza hay una capa llamada mesocarpio,
          conocida como pulpa
        </li>
        <li>
          Capa Plateada: Grupo de celulas esclerenquimas adheridas a los granos,
          se forman para ayudar y proteger a la semilla y se despegan durante el
          tueste
        </li>
      </ul>
      <h3>Proceso / Beneficio</h3>
      <h4>Natural</h4>
      <ul className="list-disc list-inside my-4">
        <li>Recoleccion: Se recolectan las cerezas a mano</li>
        <li>
          Secado: Se extienden en camas elevadas y se secan al sol volteandolas
          regularmente para realizar un secado uniforme y prevenir moho. Puede
          llegar a tomar entre 2 a 4 semanas dependiendo el clima.
        </li>
        <li>
          Trillado: Se trituran las cerezas secas para romper la cascara seca y
          la pulpa separando asi los granos del interior. Esto se logra con
          maquinas que aplican presion y friccion para romper las capas externas
          sin danñar los granos
        </li>
        <li>
          {' '}
          Beneficios
          <ul className="list-disc list-inside pl-5">
            <li>
              Sabor: Sabor afrutado intenso, dulce y cuerpo pesado, terroso,
              chocolatoso, frutos secos y frutas maduras
            </li>
            <li>Aroma: Complejo y exotico</li>
            <li>
              Menor costo de procesamiento, requiere menos agua y maquinaria
            </li>
          </ul>
        </li>
      </ul>
      <h4>Lavado</h4>
      <ul className="list-disc list-inside my-4">
        <li>Recoleccion a mano</li>
        <li>Despulpado: Se remueve la pulpa exterior dejando el mucilago</li>
        <li>
          Fermentacion: Se colocan lso granos en tanques de fermentacion donde
          permanecen de 12 a 48hs para descomponer el mucilago. Esto es crucial
          para desarrollar la claridad y acidez del cafe
        </li>
        <li>
          Lavado: Los granos fermentados se lavan en agua para eliminar residuos
          de mucilago
        </li>
        <li>
          Secado: Se secan en camas elevadas al sol, patios o secadoras
          mecanicas hasta llegar entre 10 y 12% de humedad
        </li>
        <li>
          Beneficios
          <ul className="list-disc list-inside pl-5">
            <li>
              Sabor: Tiene sabor mas limpio con acidez pronunciada, citrico,
              floral, especiado
            </li>
            <li>Consistencia: Mayor uniformidad en la taza</li>
          </ul>
        </li>
      </ul>
      <h4>Honey</h4>
      <ul className="list-disc list-inside my-4">
        <li>Recoleccion a mano</li>
        <li>Despulpado: Se les deja una cantidad variable de mucilago</li>
        <li>
          Secado: Se secan al sol con el mucilago, dependiendo de la cantidad
          que tengan se definen en
          <ul className="list-disc list-inside pl-5">
            <li>Yellow Honey: poco mucilago</li>
            <li>Red Honey: moderado</li>
            <li>Black Honey: mucho</li>
          </ul>
        </li>
        <li>
          Beneficios
          <ul className="list-disc list-inside pl-5">
            <li>
              Sabor: Suelen tener equilibro entre la acidez del lavado y la
              dulzura del natural con cuerpo mas pronunciado
            </li>
            <li>
              Versatilidad: por la posibilidad de manejar distintos niveles de
              mucilago
            </li>
          </ul>
        </li>
      </ul>
      <h2>Tipos de granos</h2>
      <h3>Arabica - Coffea Arabica</h3>
      <ul className="list-disc list-inside my-4">
        <li>Alargada y corte curvo</li>
        <li>7.5% de azucares naturales</li>
        <li>Maximo de cafeina: 1.5 a 1.7%</li>
        <li>Clima tropical o subtropical</li>
        <li>900 - 2000 msnm</li>
        <li>Aromas complejos, suave y acida</li>
        <li>
          subespecies mas conocidas: Moka, Maragogype, Bourbon, Mondo Novo,
          Caturra, Tipycal
        </li>
        <li>De 1 a 3 años de desarrollo</li>
      </ul>
      <h3>Robusta - Coffea Canephora</h3>
      <ul className="list-disc list-inside my-4">
        <li>Ondeada y con extremos puntiagudos</li>
        <li>7.5% azucares</li>
        <li>Cafeina max 2 - 4%</li>
        <li>Tropical / subtropical</li>
        <li>100 - 900 msnm</li>
        <li>Aromas simples, fuerte y aspera, amarga y acidez punzante.</li>
        <li>Subespecies mas conocidas: Laurentil, Canephora Kouillou</li>
        <li>Se suele usar para el torrado</li>
      </ul>
      <h2>Acidez</h2>
      La acidez tiene varios niveles, puede ser floral, citrica
      <h2>Cremosidad</h2>
      El color de la crema tiene que ser marron. Se produce por la presion de la
      maquina.
      <ul className="list-disc list-inside my-4">
        <li>
          Cuerpo Medio: Cuando se baja a la mesa y se revuelve y la crema queda
          en el medio
        </li>
        <li>Completo: Se vuelve a formar</li>
        <li>Redondo: La cremosidad qued en el medio</li>
      </ul>
      <h2>Tueste</h2>
      Cada perfil de tueste tiene un impacto distinto en el sabor por las
      reacciones quimicas
      <h3>Secado</h3>
      Los granos se introducen en la tostadora precalentada haciendo que la
      temperatura baje para luego subir nuevamente, esta subida es el punto de
      inflexion, es la etapa de secado donde el agua se evapora e incrementa la
      presion interna de los granos haciendo que el grano pase de color verde a
      amarillo. Cambio de color.
      <h3>Reaccion de Maillard</h3>
      Cuando los granos toman color dorado ha iniciado la reaccion de Maillard
      que ocurre a los 150 grados aprox. En esta reaccion se liberan los gases
      como el dioxido de carbono, el vapor de agua y otros compuestos volatiles.
      La reaccion interna aumenta hasta romper las paredes celulares de los
      granos produciendo un pop. A esto se lo llama como el PRIMER CRACK.
      <h3>Desarrollo</h3>
      Luego del primer crack, el tueste pasa de un proceso endotermico, reciben
      el calor, a uno exotermico, emanan el calor, en esta etapa aumenta la
      porosidad, los aceites se desplazan a las paredes del grano lo que hace
      que cambie de color oscuro. CAMBIO DE TAMAÑO Y LIBERACION DE AROMAS
      <h2>Tipos de tueste</h2>
      <table>
        <thead>
          <tr>
            <th>Ligero</th>
            <th>Medio</th>
            <th>OScuro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul className="list-disc list-inside my-4">
                <li>Color marron claro</li>
                <li>
                  Mantiene el sabor original por no haber sido expuesto a tanto
                  calor
                </li>
                <li>Ideal para filtro</li>
                <li>Acido, floral y citrico</li>
              </ul>
            </td>
            <td>
              <ul className="list-disc list-inside my-4">
                <li>Un poco mas oscuro</li>
                <li>
                  Equilibrio entre acidez y nuevos sabores introducidos por la
                  caramelizacion
                </li>
                <li>Ideal filtro y espresso</li>
                <li>Notas dulces y de cacao</li>
              </ul>
            </td>
            <td>
              <ul className="list-disc list-inside my-4">
                <li>Color mas oscuro</li>
                <li>Baja acidez y aparecen sabores amargos</li>
                <li>Se reduce la cafeina</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Pasos para hacer un espresso</h2>
      <ul className="list-disc list-inside my-4">
        <li>Tarar la balanza con el portafiltro</li>
        <li>Moler el cafe</li>
        <li>Chequear la dosis del cafe</li>
        <li>Apoyar el portafiltro en la base de goma</li>
        <li>Distribuir</li>
        <li>Tampear</li>
        <li>Purgar la maquina con agua para limpiar</li>
        <li>Colocar el portafiltro</li>
        <li>Extraer</li>
      </ul>
      <h2>Puntos de extraccion</h2>
      <h3>Subextraido {'>'}20s - Acido</h3>
      La pastilla de cafe no tiene la suficiente resistencia al agua no dejando
      extraer los elementos necesarios. Se obtiene una bebida debi y aguada, con
      poca cremosidad o crema muy clara Posibles motivos:
      <ul className="list-disc list-inside my-4">
        <li>Mal prensado del cafe o no compactado</li>
        <li>Poco gramaje</li>
        <li>Molienda muy gruesa</li>
      </ul>
      <h3>Sobreextraido {'>'}30s - Amargo</h3>
      La pastilla tiene mucha resistencia al agua, extrayendo gran variedad de
      atributos no deseados. Se obtiene una bebida astringente, provoca sequedad
      en la boca y amarga. con mucha cremosidad o color marron oscuro Posibles
      motivos:
      <ul className="list-disc list-inside my-4">
        <li>Sobreprensado de cafe</li>
        <li>Excesivo gramaje</li>
        <li>Molienda muy fina</li>
      </ul>
      <h2>Tipos de bebidas</h2>
      Al usar el portafiltro doble se utiliza entre 17g y 20g
      <ul className="list-disc list-inside my-4">
        <li>
          El lungo tiene dos formas de hacerse, se estira la extraccion hastsa
          llegar a la cantidad o se carga la taza con agua caliente y se realiza
          la receta del espresso
        </li>
        <li>
          Doppio: 2 espressos, es un vaso mas grande para que haya lugar para
          poder revolver y olfatear
        </li>
        <li>
          Americano: Taza un poco mas grande, empezar llenando con agua caliente
          hasta 2/3 y terminar con 2 espressos
        </li>
        <li>
          Latte Macchiato: Leche caliente manchada (macchiato). Seria la
          lagrima. El cafe puede agregarse antes o despues de la leche
        </li>
        <li>Latte: 1/3 espresso y 2/3 de leche caliente</li>
        <li>
          Cappuccino: Espresso al que se le agrega leche cremada, debe tener
          como minimo un centimetro de crema
        </li>
        <li>
          Cafe Macchiato: Es cafe espresso con crema de leche encima, el cafe es
          manchado con la crema
        </li>
        <li>
          Flat White
          <ul className="list-disc list-inside pl-5">
            <li>
              Espresso: Base de 2 espressos, leche emulsionada y fina capa de
              crema
            </li>
            <li>
              Ristretto: 2 ristrettos, leche emulsionada y fina capa de crema
            </li>
          </ul>
        </li>
        <li>
          Magic: Pueden ser 2 espressos o 2 ristrettos en un vaso de 120ml mas
          leche y una fina capa de cremosidad
        </li>
        <li>Mocchachino: Base de chocolate, mas cafe y leche.</li>
      </ul>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tipo</TableHead>
            <TableHead>Dosis</TableHead>
            <TableHead>Tiempo</TableHead>
            <TableHead>Taza</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              name: 'Espresso',
              dose: '17g - 20g',
              time: '20s - 30s',
              cup: '30ml - 35ml',
            },
            { name: 'Ristretto', dose: '20g', time: '12s - 16s', cup: '15ml' },
            { name: 'Lungo', dose: '20g', time: '35s - 40s', cup: '45ml' },
            { name: 'Doppio', dose: '20g', time: '20s - 30s', cup: '30ml' },
            { name: 'Americano', dose: '20g', time: '20s - 30s', cup: '' },
            { name: 'Latte Macchiato', dose: '20g', time: '5s', cup: '' },
          ].map((coffee) => (
            <TableRow key={coffee.name}>
              <td>{coffee.name}</td>
              <td>{coffee.dose}</td>
              <td>{coffee.time}</td>
              <td>{coffee.cup}</td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SectionPageWrapper>
  );
}
