import { SectionPageWrapper } from '@/components/ui/section-page-wrapper';
import { TopicCard } from '@/components/ui/topic-card';
const BASE_SLUG = '/curiosities/exploring-fashion-production';

const SECTIONS = [
  {
    slug: 'producciones',
    title: 'Producciones',
    description: 'Las producciones que realice',
    href: `${BASE_SLUG}/producciones`,
  },
  {
    slug: 'analisis-de-campanas',
    title: 'Análisis de Campañas',
    description: 'Análisis de campañas elaboradas durante el curso.',
    href: `${BASE_SLUG}/analisis-de-campanas`,
  },
  {
    slug: 'historia',
    title: 'Historia de la Moda',
    description:
      'La historia de la moda, desde sus orígenes analizando su evolución e impacto.',
    href: `${BASE_SLUG}/historia`,
  },
  {
    slug: 'propuestas',
    title: 'Propuestas de Producción',
    description:
      'Propuestas de producción de moda realizadas durante el curso.',
    href: `${BASE_SLUG}/propuestas`,
  },
  {
    slug: 'favoritos',
    title: 'Favoritos',
    description: 'Los que me gustaron',
    href: `${BASE_SLUG}/favoritos`,
  },
];

export default function ExploringFashionProductionPage() {
  return (
    <SectionPageWrapper title="Explorando la Producción de Moda" description="">
      <h2>Que es la producción de moda?</h2>
      La produccion es el proceso en el cual se transforma, se da vida, a una
      idea ya sea en formato de imagen, video, eventos, desfiles y/o campañas
      que ees llevado a cabo por el producto de moda. El productor es aquel
      profesional encargado de interpretar las tendencias y leer el mercado para
      poder comunicar la moda de forma creativa, sencilla y facil de interpretar
      a un publico determinado como tambien coordinar los distintos equipos y
      profesionales para llevarlo a cabo.
      <h2>Como se lleva a cabo una producción de moda?</h2>
      Se deben tener en cuenta tres elementos:
      <ul className="list-disc list-inside my-4">
        <li>Saber que es lo que se quiere mostrar o promocionar</li>
        <li>
          Como se va a mostrar y promocionar para lograr el impacto deseado
        </li>
        <li>
          Como se va a materializar la idea, saber los profesionales que se
          deben disponer, locacion, permisos, recursos, imvestigar sobre el
          cliente
        </li>
      </ul>
      <div className="flex flex-col gap-4 my-4">
        {SECTIONS.map((section) => (
          <TopicCard slug={section.slug} key={section.slug}>
            <TopicCard.Title>{section.title}</TopicCard.Title>
            <TopicCard.Description>{section.description}</TopicCard.Description>
            <TopicCard.Link href={section.href}>{'Abrir ->'}</TopicCard.Link>
          </TopicCard>
        ))}
      </div>
    </SectionPageWrapper>
  );
}
