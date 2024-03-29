import ImageBlur from '../atoms/image-blur';

interface Props {
  currentImages: string[];
}

export default function ImageModal(props: Props) {
  const { currentImages } = props;
  return (
    <dialog id="image_modal" className="!z-10 modal">
      <form method="dialog" className="max-w-5xl p-0 modal-box">
        {currentImages.map((image) => {
          if (image.length === 0) return null;
          return (
            <ImageBlur
              key={image}
              src={image}
              className="w-full h-full rounded-md cursor-pointer"
              width={1200}
              height={900}
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
}
