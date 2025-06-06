import { FormError, type ErrorsData } from '../types/Error';
import cn from 'classnames';
import useForm from '../hooks/useForm';
import type { Note } from '../types/Note';

type Props = {
  selectedNote: Note | null;
  setSelectedNote: (note: Note | null) => void;
  onUpdate: (note: Omit<Note, 'createdAt'>) => void | Promise<void>;
  onAdd: (title: string, content: string) => void;
};

const NoteForm: React.FC<Props> = ({
  selectedNote,
  setSelectedNote,
  onAdd,
  onUpdate,
}) => {
  const {
    isExpanded,
    title,
    setContent,
    content,
    setTitle,
    handleNoteAdd,
    handleNoteUpdate,
    handleFormReset,
    errors,
    setErrors,
    handleFormExpand,
  } = useForm(selectedNote, setSelectedNote, onAdd, onUpdate);

  return (
    <form
      onSubmit={(event) =>
        selectedNote
          ? handleNoteUpdate(event, title, content, selectedNote.id)
          : handleNoteAdd(event)
      }
      className="w-xs sm:w-md lg:w-xl rounded-md mx-auto mt-5 bg-white p-2 shadow-md "
    >
      {isExpanded && (
        <div className="flex">
          <input
            autoFocus
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              if (errors.title) {
                setErrors((prevErrors) => ({ ...prevErrors, title: '' }));
              }
            }}
            className={cn(
              'w-full py-1 outline-none text-sm font-inherit resize-none',
              errors.title ? 'text-[#ED2100] font-medium' : 'border-none'
            )}
            type="text"
            name="title"
            placeholder={errors.title ? FormError.TITLE : 'Title'}
          />
          <span
            onClick={() => {
              handleFormReset();
            }}
            className="material-symbols-outlined text-gray-800 cursor-pointer"
          >
            close
          </span>
        </div>
      )}
      <textarea
        onClick={handleFormExpand}
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
          if (errors.content) {
            setErrors((prevErrors: ErrorsData) => ({
              ...prevErrors,
              content: '',
            }));
          }
        }}
        className={cn(
          'w-full align-middle border-none outline-none text-sm resize-none',
          errors.content
            ? 'text-[#ED2100] font-medium'
            : 'font-inherit text-gray-600'
        )}
        name="content"
        placeholder={
          content === '' && errors.content
            ? FormError.CONTENT
            : 'Take a note...'
        }
        rows={isExpanded ? 3 : 1}
      />

      {selectedNote ? (
        <div>
          {' '}
          <button
            type="submit"
            className="mr-2 px-3 py-1 text-sm rounded-lg bg-white text-blue-400 shadow-md cursor-pointer outline-none"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => handleFormReset()}
            className="mr-2 px-3 py-1 text-sm rounded-lg bg-white text-blue-400 shadow-md cursor-pointer outline-none"
          >
            Cancel
          </button>
        </div>
      ) : (
        isExpanded && (
          <button
            type="submit"
            className="mr-2 px-3 py-1 text-sm rounded-lg bg-white text-blue-400 shadow-md cursor-pointer outline-none"
          >
            Add
          </button>
        )
      )}
    </form>
  );
};

export default NoteForm;
