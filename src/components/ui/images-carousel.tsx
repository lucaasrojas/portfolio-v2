import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
export function ImagesCarousel({
  items,
  subpath,
}: {
  items: string[];
  subpath?: string;
}) {
  return (
    <Carousel className="max-w-[400px] mx-auto">
      <CarouselContent>
        {items.map((filename) => (
          <CarouselItem key={filename}>
            <Image
              src={subpath ? `/assets/images/${subpath}/${filename}` : filename}
              alt="Imagen de la producción de moda"
              width={400}
              height={300}
              className="my-8 rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
