import type { Note } from '../types/Note';

type Props = {
  note: Note;
  onDelete: (id: string) => void;
  onSelected: (note: Note) => void;
};

const NoteItem: React.FC<Props> = ({ note, onDelete, onSelected }) => {
  return (
    <div
      onClick={() => onSelected(note)}
      className="break-inside-avoid w-38 sm:w-46 lg:w-56 bg-white flex flex-col rounded-lg px-3 py-3  mb-4 shadow"
    >
      <h1 className="text-md md:text-lg mb-1.5">{note?.title}</h1>
      <p className="text-xs md:text-sm font-sans text-gray-900 mb-2 whitespace-pre-wrap break-words">
        {note?.content}
      </p>
      <div className="flex justify-end">
        <span
          onClick={(event) => {
            event.stopPropagation();
            onDelete(note?.id);
          }}
          className="material-symbols-outlined text-blue-400 lg-18 cursor-pointer"
        >
          delete
        </span>
      </div>
    </div>
  );
};

export default NoteItem;
