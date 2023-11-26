'use client'
import React, { useRef, useEffect } from 'react';

// function to scroll to target element
export const scroller = (targetElementRef) => {
    // scrollIntoView moves the page until the element is visible to the user (triggers if there is a value as it defaults to null which is falsy)
    if (targetElementRef.current) {
        // use 'scrollIntoView' interface method to move the user to the right part of the DOM
        targetElementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
};

// Define custom hook function
export const useScroller = () => {
    // create a ref to store the reference to the element to scroll to
    const targetElementRef = useRef(null);

    // Effect to scroll to the element when the target element changes
    useEffect(() => {
        scroller(targetElementRef);
    }, [targetElementRef]);

    // Return the target and the function to be used by the component calling this
    return {
        targetElementRef,
        scroller: () => scroller(targetElementRef), // You can keep this as a function if needed
    };
};
