import { SectionPageWrapper } from '@/components/ui/section-page-wrapper';
import Image from 'next/image';
export default function ProduccionesPage() {
  return (
    <SectionPageWrapper title="Producciones" description="">
      <h2>Producción de nivelación</h2>
      <p>
        {`El propósito de esta producción era perderle el miedo al estudio y todo lo que conlleva. Saber como me desenvuelvo con la modelo, como comunico lo que que tengo en mi cabeza, como me manejo con la luz y la cámara, el tiempo y todas las ideas.`}
      </p>
      <p>
        {`
        El concepto que elegí fue un estilo urbano con una pizca de elegancia, no queria el pantalón deportivo sin más, quería que fuera unos niveles mas arriba. Mi idea fue mostrar una persona tranquila, cómoda, que tenga flexibilidad para moverse y que a su vez se sienta con clase, que pueda ir a un café o un evento. 
               `}
      </p>
      <p>
        {`
        Para esta producción tenía que usar ropa que tuviera disponible, en el último tiempo estuve comprando prendas que hasta ahora nunca use pero me gusta tenerlas y espero poder usarlas en algun momento. 
                `}
      </p>
      <p>
        {`
        Después de una breve investigación encontré que el estilo Sporty Chic o Tailored Sporty, se lo puede encontrar con varios nombres, se acercaba muchísimo a lo que queria mostrar, al ser un estilo que predomina lo oversize me dió la cintura que necesitaba para poder usar mi ropa.
        `}
      </p>
      <Image
        src={`/assets/images/curiosities/exploring-fashion-production/producciones/nivelacion/Moodboard.png`}
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
        style={{ objectFit: 'contain' }}
      />
      <p>
        {`
        En el moodboard queria mostrar la actitud urbana, despreocupada, flexible, activa, de la calle pero con la impronta de unas líneas que eleven el conjunto hacia lo que estaba buscando, esto lo logré con el blazer y el cuello de la camisa.
        Después de una charla creativa descubrí que tenía a disposición una maxi falda plisada y sentí que tenia que incluirla, todavia no tengo la ligereza necesaria con las palabras para definirlo pero sentí que era la pieza que marcaba la diferencia, era el intermedio entre ambos extremos y ayudaba a unificar, a darle cohesion al look.    
        `}
      </p>
      <Image
        src={`/assets/images/curiosities/exploring-fashion-production/producciones/nivelacion/Poses.jpg`}
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
        style={{ objectFit: 'contain' }}
      />
      <p>
        {`
        Al cambiar el pantalón por una falda las poses que había planificado no iban a funcionar tan bien por la falta de las mangas, para solucionar esto agregue el condimento tecnológico y acudi a mi amigo ChatGPT para que me inspirara.
        `}
      </p>
      <Image
        src={`/assets/images/curiosities/exploring-fashion-production/producciones/nivelacion/Poses_2.png`}
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
        style={{ objectFit: 'contain' }}
      />
      <Image
        src={`/assets/images/curiosities/exploring-fashion-production/producciones/nivelacion/Poses_3.png`}
        alt="Imagen de la producción de moda"
        width={600}
        height={600}
        className="my-8 rounded-lg mx-auto"
        style={{ objectFit: 'contain' }}
      />

      <p>
        {`
        Fui el último, mientras se llevaban a cabo las otras producciones repasaba en mi cabeza las poses que quería hacer, lo que quería mostrar y cómo, por suerte una compañera tenía el contacto de una chica que se puso la camiseta y nos ayudo a todos. 
        Cuando llegó mi momento empecé con algo sencillo para poder ir procesando de a poco la situación, me pareció que las luces estaban bien, que mi cámara estaba haciendo bien su trabajo y saqué un par, fue la forma de romper el hielo, en una fracción de segundo mi cabeza organizó las poses, no para un segundo de optimizar las cosas, para no tener que cambiar tanto de ángulo ni posición, eran muchas cosas a tener en cuenta.
        `}
      </p>
      <p>
        {`
        Fue una gran experiencia, llegué a casa y me puse a seleccionar y editar las fotos con la poca experiencia que tengo. Estoy orgulloso del resultado.
        `}
      </p>

      <p className="text-md font-semibold">Modelo: Sofia - @sofiii_dinardo</p>

      <div className={'columns-2 max-w-full mx-auto space-y-4 my-4'}>
        {[
          '/assets/images/curiosities/exploring-fashion-production/producciones/nivelacion/Modelo_1.jpeg',
          '/assets/images/curiosities/exploring-fashion-production/producciones/nivelacion/Modelo_2.jpeg',
          '/assets/images/curiosities/exploring-fashion-production/producciones/nivelacion/Modelo_3.jpeg',
          '/assets/images/curiosities/exploring-fashion-production/producciones/nivelacion/Modelo_4.jpeg',
          '/assets/images/curiosities/exploring-fashion-production/producciones/nivelacion/Modelo_5.jpeg',
        ].map((filename) => (
          <div key={filename} className="relative aspect-[3/4]">
            <Image
              key={filename}
              src={filename}
              alt="Imagen de la producción de moda"
              width={300}
              height={400}
              className="w-full h-auto rounded-lg object-cover "
            />
          </div>
        ))}
      </div>
    </SectionPageWrapper>
  );
}
