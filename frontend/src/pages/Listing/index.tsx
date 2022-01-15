import { useEffect, useState } from "react";
import api from "../../service/api";
import { MoviePage } from "../../types/movie";
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";

const INITIAL_VALUES_PAGE: MoviePage = {
  content: [],
  last: true,
  totalPages: 0,
  totalElements: 0,
  size: 12,
  number: 0,
  first: true,
  numberOfElements: 0,
  empty: true,
};

export default function Listing() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [page, setPage] = useState<MoviePage>(INITIAL_VALUES_PAGE);

  useEffect(() => {
    api.get(`/movies?size=12&page=${pageNumber}`).then((response) => {
      const data = response.data as MoviePage;
      setPage(data);
    });
  }, [pageNumber]);

  function handlePage(newPage: number) {
    setPageNumber(newPage);
  }

  return (
    <>
      <Pagination page={page} handlePage={handlePage} />
      <div className="container">
        <div className="row">
          {page.content.map((movie, index) => (
            <div key={index} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
