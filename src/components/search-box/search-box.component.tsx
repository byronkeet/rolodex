import { ChangeEventHandler, ChangeEvent } from 'react';

import './seach-box.styles.css';

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	// onChangeHandler: ChangeEventHandler<HTMLInputElement>;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
	<input
		className={`search-box ${className}`}
		type='search'
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);

export default SearchBox;
