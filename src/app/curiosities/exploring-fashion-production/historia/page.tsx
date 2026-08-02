import { ImagesCarousel } from '@/components/ui/images-carousel';
import { SectionPageWrapper } from '@/components/ui/section-page-wrapper';
import Image from 'next/image';

export default function FashionHistoryPage() {
  return (
    <SectionPageWrapper
      title="Historia de la Moda"
      description="Pequeño paso por la historia de la moda."
    >
      <h2>Analisis del periodo Romantico</h2>
      El período romántico fue un período de transición del año 1820 en donde se
      deja atrás el estilo Imperio enfatizando la imaginación, emoción,
      individualismo marcando una diferenciación de la clase burguesa
      devolviendo la feminidad. Esta apertura a la imaginación da lugar a
      distintos estilos de prendas y telas creando un protocolo de vestir que
      debe respetarse de acuerdo a la ocasión.
      <Image
        src="/assets/images/curiosities/exploring-fashion-production/Picture1.png"
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
      />
      Por el lado femenino, comienza con faldas en corte tipo A, estas cosidas a
      la parte del busto. A mediados de 1825 se comenzó a utilizar tela de
      algodón con patrones y diseños incrementando el tamaño de las mangas en la
      sisa y estrechándose hacia el puño, el dobladillo fue tomando más
      protagonismo y las faldas empezaron a mostrar paneles en su confección. En
      la década de 1830 es donde el periodo romántico llega a su cúspide, la
      silueta toma mayor protagonismo reduciendo la cintura por el uso del corsé
      y ensanchando hombros y faldas como también dando lugar a sombreros de ala
      ancha y prominentes bucles. A comienzo del año 1840, comienza lo que se
      conoce como el romanticismo tardío en donde las mangas perdieron la
      voluminosidad en las sisas quedando en una manga que abraza al brazo, el
      cuello descendió a la altura de los hombros reduciendo la movilidad de
      estos y las faldas crecieron en tamaño gracias al uso de estructuras y
      relleno.
      <Image
        src="/assets/images/curiosities/exploring-fashion-production/Picture2.png"
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
      />
      Por el lado masculino, la moda fue acompañando la femenina y fueron
      retroalimentándose, parecía haber una especie de competencia al momento de
      presentar su cintura de avispa ya que en este guardarropa también podíamos
      encontrar un corsé, mangas estrechas en la muñeca y largas hasta los
      nudillos, solapas en punta, sombreros de copa y sobretodos. Los chalecos
      influenciaron los corsé y partes superiores de los vestidos en el último
      periodo. Los 60s fue una era de innovación y exploración, mientras la
      ciencia se aventuraba al espacio, la moda moldeaba un nuevo estilo con
      nuevos materiales y formas.
      <Image
        src="/assets/images/curiosities/exploring-fashion-production/Picture3.png"
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
      />
      <h2>Analisis del periodo Espacial</h2>
      André Courrèges, quien luego sería reconocido como el padre de la moda
      espacial, presentó la colección "Moon Girl” en 1964 donde mostraba
      minifaldas y vestidos con corte A, pantalones blancos y botas planas, las
      “go-go boots”, pero con la particularidad de que los materiales eran
      sintéticos mostrando así el plástico y vinilo.
      <Image
        src="/assets/images/curiosities/exploring-fashion-production/Picture4.png"
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
      />
      En la década de 1970 Pierre Cardin se une a la moda del futuro con diseños
      versátiles que abrazan el cuerpo a través de minifaldas y telas
      brillantes, vestidos con forma de túnica y el uso de materiales sintéticos
      como el PVC y vinilo y cascos haciendo referencia a formas espaciales.
    </SectionPageWrapper>
  );
}
