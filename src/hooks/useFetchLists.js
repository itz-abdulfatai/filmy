import { useEffect } from "react";

const useFetchLists = (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmU3ZmQ0YmFmMzYxNjA4MTA5ZTgxYjAzODRhMDlmMiIsIm5iZiI6MTcyNjY4MDkxMy4zODc5OTcsInN1YiI6IjY2NmE1ZWYxOTg2NjI3YmM1ZjA3ZjNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IB_DSwACwudGAzh3r0Jv6RkrpZXH1wlL53SauTQPHUQ'
        }
      };

      const url = "https://api.themoviedb.org/3"

      useEffect(() => {
        async function fetchList() {
           try {
            const response =  await fetch((url+endpoint), options)
            const data = await response.json()
            console.log(data)
           } catch (error) {
            alert(error.message)
            console.log(error)
            
           }
            
        }

        fetchList()

      }, [])





    return {}
}

export default useFetchLists











// {
//     "page": 1,
//     "results": [
//         {
//             "adult": false,
//             "backdrop_path": "/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg",
//             "genre_ids": [
//                 28,
//                 35,
//                 878
//             ],
//             "id": 533535,
//             "original_language": "en",
//             "original_title": "Deadpool & Wolverine",
//             "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
//             "popularity": 2395.156,
//             "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
//             "release_date": "2024-07-24",
//             "title": "Deadpool & Wolverine",
//             "video": false,
//             "vote_average": 7.701,
//             "vote_count": 2912
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/mKOBdgaEFguADkJhfFslY7TYxIh.jpg",
//             "genre_ids": [
//                 28,
//                 878,
//                 35,
//                 12,
//                 53
//             ],
//             "id": 365177,
//             "original_language": "en",
//             "original_title": "Borderlands",
//             "overview": "Returning to her home planet, an infamous bounty hunter forms an unexpected alliance with a team of unlikely heroes. Together, they battle monsters and dangerous bandits to protect a young girl who holds the key to unimaginable power.",
//             "popularity": 1584.1,
//             "poster_path": "/865DntZzOdX6rLMd405R0nFkLmL.jpg",
//             "release_date": "2024-08-07",
//             "title": "Borderlands",
//             "video": false,
//             "vote_average": 5.822,
//             "vote_count": 519
//         }

//     ],
//     "total_pages": 46085,
//     "total_results": 921696
// }