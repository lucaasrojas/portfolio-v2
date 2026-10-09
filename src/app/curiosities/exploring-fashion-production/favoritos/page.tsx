import { SectionPageWrapper } from '@/components/ui/section-page-wrapper';
import favoriteList from './favorite-list';
import { DesignerSection } from '@/components/ui/designer-section';

export default function FashionHistoryPage() {
  return (
    <SectionPageWrapper title="Mis favoritos" description="">
      {favoriteList.map((favorite) => (
        <DesignerSection
          key={favorite.designer + favorite.season}
          designer={favorite}
        />
      ))}
    </SectionPageWrapper>
  );
}
