import { BsDownload } from 'react-icons/bs';

export default function ButtonDownloadCv() {
  return (
    <a
      href="/pdf/cv-alvaro-huaysara-jauregui.pdf"
      target="_blank"
      download="cv-alvaro-huaysara-jauregui.pdf"
      className={
        'flex items-center justify-center gap-2 px-4 py-2 font-bold rounded-full border-2 my-btn border-main bg-transparent text-main dark:text-white'
      }
    >
      <BsDownload size={24} />
      Descarga mi CV
    </a>
  );
}
