import { useEffect } from "react";

const useOutsideAlerter = (ref, callback) => {
    useEffect(() => {
        function handleClickOutside(event){
            if (ref.current && !ref.current.contains(event.target)){
                callback();
            }

        }
        document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside)

        
    }, [ref])
}

export default useOutsideAlerter;
