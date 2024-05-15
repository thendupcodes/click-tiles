import { createRef, useRef } from 'react';

const useRefsFromArray = <T extends string>(array: T[]) => {
	// Create a single useRef to hold the array of refs
	const refs = useRef<React.MutableRefObject<HTMLDivElement | null>[]>([]);

	// Populate the array of refs using createRef
	if (refs.current.length !== array.length) {
		refs.current = Array.from({ length: array.length }, () =>
			createRef<HTMLDivElement | null>()
		);
	}

	return refs;
};

export default useRefsFromArray;
