import dayjs from 'dayjs';
import { useState } from 'react';
import cn from 'classnames';

type Props = {
  query: string;
  onDateChange: (date: string) => void;
  onFilterChange: (value: boolean) => void;
  selectedDay: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};
const Header: React.FC<Props> = ({
  query,
  setQuery,
  onDateChange,
  selectedDay,
  onFilterChange,
}) => {
  const [isInputShown, setIsInputShown] = useState(false);
  const today = dayjs().format('YYYY-MM-DD');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(event.target.value);
    onFilterChange(true);
  };

  return (
    <header className="bg-blue-400 px-8 py-4 shadow-md flex justify-between">
      <h1 className="text-white text-3xl md:font-bold ">Notes</h1>
      <div className="flex place-items-center gap-2">
        <div className="flex place-items-center">
          <input
            onChange={handleDateChange}
            type="date"
            name="date"
            defaultValue={selectedDay ? selectedDay : today}
            className={cn(
              'text-white cursor-pointer p-1 bg-transparent border border-white rounded',
              isInputShown ? 'hidden' : 'block'
            )}
          />
        </div>
        {isInputShown && (
          <input
            autoFocus
            className="border border-gray-500 rounded p-0.5 sm:w-[300px] pr-[30px] bg-white text-sm outline-1 outline-blue-300"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search by note title..."
          />
        )}
        {isInputShown ? (
          <span
            onClick={() => {
              if (query) {
                setQuery('');
              } else {
                setIsInputShown(false);
              }
            }}
            className="material-symbols-outlined lg-18 flex items-center bg-transparent rounded -ml-[30px] cursor-pointer"
          >
            close
          </span>
        ) : (
          <span
            onClick={() => setIsInputShown(true)}
            className="material-symbols-outlined text-white p-1 cursor-pointer"
          >
            search
          </span>
        )}
        {selectedDay && (
          <span
            onClick={() => {
              onDateChange('');
              setIsInputShown(false);
              setQuery('');
            }}
            className={cn(
              'material-symbols-outlined text-white bg-transparent rounded cursor-pointer',
              isInputShown ? 'hidden' : 'block'
            )}
          >
            cancel
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
