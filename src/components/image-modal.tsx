import React from 'react';
import ImageBlur from './image-blur';

interface Props {
  currentImages: string[];
}

export const ImageModal = ({ currentImages }: Props) => {
  return (
    <dialog id="image_modal" className="modal">
      <form method="dialog" className="max-w-5xl p-0 modal-box">
        {currentImages.map((image, idx) => {
          if (image.length === 0) return null;
          return (
            <ImageBlur
              key={idx}
              src={image}
              className="w-full h-full rounded-md cursor-pointer"
              alt="entry"
            />
          );
        })}
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
