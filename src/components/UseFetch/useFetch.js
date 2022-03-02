// import { useState, useEffect } from "react";

// export const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch(url)
//         .then((res) => {
//           if (!res.ok) {
//             throw Error("Could not get the data");
//           }
//           return res.json();
//         })
//         .then((data) => {
//           setData(data);
//           setIsLoading(false);
//           setError(null);
//         })
//         .catch((err) => {
//           setIsLoading(false);
//           setError(err.message);
//         });
//     });
//   }, [url]);

//   return { data, isLoading, error };
// };

// export default useFetch;

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setData(data);
          setError(null);
        })
        .catch((err) => {
          // auto catches network / connection error
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
