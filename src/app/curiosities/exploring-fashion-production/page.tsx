import { SectionPageWrapper } from '@/components/ui/section-page-wrapper';
import { TopicCard } from '@/components/ui/topic-card';

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
        <TopicCard slug="analisis-de-campanas">
          <TopicCard.Title>Analisis de Campañas y Diseñadores</TopicCard.Title>
          <TopicCard.Description>
            Análisis de campañas elaboaradas durante el curso.
          </TopicCard.Description>
          <TopicCard.Link href="/curiosities/exploring-fashion-production/analisis-de-campanas">
            {'Abrir ->'}
          </TopicCard.Link>
        </TopicCard>
        <TopicCard slug="historia">
          <TopicCard.Title>Historia de la Moda</TopicCard.Title>
          <TopicCard.Description>
            La historia de la moda, desde sus orígenes analizando su evolución e
            impacto.
          </TopicCard.Description>
          <TopicCard.Link href="/curiosities/exploring-fashion-production/historia">
            {'Abrir ->'}
          </TopicCard.Link>
        </TopicCard>
        <TopicCard slug="propuestas">
          <TopicCard.Title>Propuestas de Producción</TopicCard.Title>
          <TopicCard.Description>
            Propuestas de producción de moda realizadas durante el curso.
          </TopicCard.Description>
          <TopicCard.Link href="/curiosities/exploring-fashion-production/propuestas">
            {'Abrir ->'}
          </TopicCard.Link>
        </TopicCard>
        <TopicCard slug="favoritos">
          <TopicCard.Title>Favoritos</TopicCard.Title>
          <TopicCard.Description>Los que me gustaron</TopicCard.Description>
          <TopicCard.Link href="/curiosities/exploring-fashion-production/favoritos">
            {'Abrir ->'}
          </TopicCard.Link>
        </TopicCard>
      </div>
    </SectionPageWrapper>
  );
}
