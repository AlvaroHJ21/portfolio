'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import { TbPhotoPlus } from 'react-icons/tb';
import Swal from 'sweetalert2';

import { Multiselect, Option } from '@/components/ui/input/multiselect';

import uploadImage from '@/helpers/uploadImage';
import { useCategories } from '@/hooks/useCategories';
import { useTecnologies } from '@/hooks/useTecnologies';
import { useProjects } from '@/hooks/useProjects';
import { Project } from '@/interfaces';

interface Image {
  id?: string;
  file?: File;
  image?: string | ArrayBuffer;
  url?: string;
}

interface Props {
  params?: {
    id: string;
  };
}

export default function ProjectFormPage({ params }: Props) {
  const router = useRouter();

  const { projects, isLoading, startAddProject } = useProjects();
  const { categories } = useCategories();
  const { tecnologies } = useTecnologies();

  //
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Option[]>([]);
  const [selectedTecnologies, setSelectedTecnologies] = useState<Option[]>([]);

  const inputImageRef = useRef<HTMLInputElement | null>(null);
  const [currentImage, setCurrentImage] = useState<Image | null>(null);
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);

  useEffect(() => {
    if (projects && params?.id) {
      const projectFound = projects.find((project) => project.id === Number(params.id));
      setValuesForm({
        name: projectFound?.name ?? '',
        description: projectFound?.description ?? '',
        selectedImages:
          projectFound?.images.map((url) => ({
            id: url,
            url: url,
          })) ?? [],
        selectedCategories:
          projectFound?.categories.map((category) => ({
            value: category.id,
            label: category.name,
          })) ?? [],
        selectedTecnologies:
          projectFound?.tecnologies.map((tecnology) => ({
            value: tecnology.id,
            label: tecnology.name,
          })) ?? [],
      });
      // console.log(projectFound);
    }
  }, [isLoading]);

  const categoryOptions: Option[] =
    categories?.map((category) => ({
      value: category.id,
      label: category.name,
    })) ?? [];
  const tecnologyOptions: Option[] =
    tecnologies?.map((tecnology) => ({
      value: tecnology.id,
      label: tecnology.name,
    })) ?? [];

  const setValuesForm = ({
    name,
    description,
    selectedImages,
    selectedCategories,
    selectedTecnologies,
  }: {
    name: string;
    description: string;
    selectedImages: Image[];
    selectedCategories: Option[];
    selectedTecnologies: Option[];
  }) => {
    setName(name);
    setDescription(description);
    setSelectedImages(selectedImages);
    setSelectedCategories(selectedCategories);
    setSelectedTecnologies(selectedTecnologies);
  };

  const onSelectImage = () => {
    inputImageRef.current?.click();
  };

  const onChangeInputImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //obtenemos el file seleccionado
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    //agregamos el files a nuestros currentFiles
    // setCurrentFile(file);
    // setCurrentFiles([...currentFiles, file]);

    //usamos un FileReader para convertir nuestro file -> image
    const fr = new FileReader();
    //sobreescribimos el metodo onload, cuando termine de leer el file
    //guardarlo en el arrglo de imagenes
    fr.onload = () => {
      // setCurrentImage(fr.result);
      if (fr.result) {
        // setCurrentImages([...currentImages, fr.result]);
        const id = `${Date.now()}`;
        setSelectedImages([...selectedImages, { id, file, image: fr.result }]);
      }
    };
    fr.readAsDataURL(file);
  };

  const onViewImage = (image: Image) => {
    setCurrentImage(image);
    const dialog = document.getElementById('image_modal') as HTMLDialogElement;
    dialog.showModal();
  };

  const onQuitImage = (id: string) => {
    console.log(id);
    setSelectedImages((prev) => prev.filter((image) => image.id != id));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (params?.id) {
      //TODO
      // update
      // subir las imagenes nuevas (las que tienen file)
    } else {
      //create

      const promises = selectedImages.map((image) => uploadImage(image.file));

      const images = await Promise.all(promises);

      if (images.includes(null)) return;

      const data: Project = {
        name: name,
        description: description,
        images: images as string[],
        categories: selectedCategories.map((selected) => ({
          id: selected.value,
          name: selected.label,
        })),
        tecnologies: selectedTecnologies.map((selected) => ({
          id: selected.value,
          name: selected.label,
          image: '',
        })),
      };

      Swal.fire({
        title: 'Espere',
        text: 'Guardando información',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });

      const resp = await startAddProject(data);

      Swal.close();
    }

    router.push('/dashboard/projects');
  };

  return (
    <section className="">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/projects">
          <FaArrowLeft />
        </Link>
        <h1 className="text-2xl">
          {params?.id ? `Editando el proyecto ${params?.id}` : 'Nuevo proyecto'}
        </h1>
      </div>
      <div className="shadow-xl card bg-base-100">
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-4 form-control">
              <label htmlFor="" className="label">
                Nombre
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="input input-bordered"
              />
            </div>
            <div className="mb-4 form-control">
              <label htmlFor="" className="label">
                Descripción
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered"
              ></textarea>
            </div>

            {/* Imagenes */}
            <div className="form-control">
              <div className="flex items-center justify-between">
                <label className="label">
                  <span className="label-text">Imagenes</span>
                </label>
              </div>
              <input
                ref={inputImageRef}
                onChange={onChangeInputImage}
                type="file"
                className="hidden w-full max-w-xs file-input file-input-bordered"
              />

              <div className="flex gap-4">
                {selectedImages.map((image) => (
                  <div key={image.id} className="relative w-28 h-28">
                    <img
                      src={(image.image as string) || (image.url as string)}
                      onClick={() => onViewImage(image)}
                      className="object-cover w-full h-full rounded-md cursor-pointer"
                      alt="entry"
                    />
                    <button
                      onClick={() => onQuitImage(image.id!)}
                      type="button"
                      className="absolute bottom-1 right-1 btn btn-sm btn-outline btn-error"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
                <div
                  onClick={onSelectImage}
                  className="flex items-center justify-center gap-2 rounded-md cursor-pointer w-28 h-28 bg-base-200"
                >
                  <TbPhotoPlus size={24} />
                </div>
              </div>
            </div>
            {/* End Imagenes */}

            <div className="mb-4 form-control">
              <label htmlFor="" className="label">
                Categorías
              </label>
              <Multiselect
                options={categoryOptions}
                selected={selectedCategories}
                setSelected={setSelectedCategories}
              />
            </div>
            <div className="mb-4 form-control">
              <label htmlFor="" className="label">
                Tecnologías
              </label>
              <Multiselect
                options={tecnologyOptions}
                selected={selectedTecnologies}
                setSelected={setSelectedTecnologies}
              />
            </div>
            <button className="btn btn-primary">Guardar</button>
          </form>
        </div>
      </div>

      {/* Modal Image */}
      <dialog id="image_modal" className="modal">
        <form method="dialog" className="max-w-4xl modal-box">
          {currentImage && (
            <img
              src={(currentImage.image as string) || currentImage.url}
              className="object-cover w-full h-full rounded-md cursor-pointer"
              alt="entry"
            />
          )}
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
}
