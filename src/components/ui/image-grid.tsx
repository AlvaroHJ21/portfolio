'use client';

import { useState } from 'react';
import Image from 'next/image';

import { ImageModal, useCursor } from '.';

interface Props {
  firstImage: string;
  secondImage: string;
  thirdImage: string;
}

export const ImageGrid = ({ firstImage, secondImage, thirdImage }: Props) => {
  const [currentImage, setCurrentImage] = useState<string>('');

  const { setMouseConfig } = useCursor();

  const onSelectImage = (image: string) => {
    setCurrentImage(image);

    //open dialog
    const dialog = document.getElementById('image_modal') as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-4 md:grid-cols-3">
        <picture
          onMouseEnter={() =>
            setMouseConfig({
              variant: 'focus-content',
              content: 'Ver',
            })
          }
          onMouseLeave={() => setMouseConfig({ variant: 'default' })}
          onClick={() => onSelectImage(firstImage)}
          className="col-span-2 row-span-2 overflow-hidden rounded-lg"
        >
          <Image
            src={firstImage!}
            className="object-cover w-full h-full transition-transform cursor-pointer hover:scale-110"
            alt="Primera imagen del proyecto"
            width={800}
            height={600}
          />
        </picture>
        <picture
          onMouseEnter={() =>
            setMouseConfig({
              variant: 'focus-content',
              content: 'Ver',
            })
          }
          onMouseLeave={() => setMouseConfig({ variant: 'default' })}
          onClick={() => onSelectImage(secondImage)}
          className="col-span-1 overflow-hidden rounded-lg"
        >
          <Image
            src={secondImage!}
            className="object-cover w-full h-full transition-transform cursor-pointer hover:scale-110"
            alt="Segunda imagen del proyecto"
            width={400}
            height={300}
          />
        </picture>
        <picture
          onMouseEnter={() =>
            setMouseConfig({
              variant: 'focus-content',
              content: 'Ver',
            })
          }
          onMouseLeave={() => setMouseConfig({ variant: 'default' })}
          onClick={() => onSelectImage(thirdImage)}
          className="col-span-1 overflow-hidden rounded-lg"
        >
          <Image
            src={thirdImage!}
            className="object-cover w-full h-full transition-transform cursor-pointer hover:scale-110"
            alt="Tercera imagen del proyecto"
            width={400}
            height={300}
          />
        </picture>
      </div>

      <ImageModal currentImages={[currentImage]} />
    </>
  );
};
