import { useEffect } from "react";
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";

import {MoviePage} from '../../types/movie';
import api from "../../service/api";
import { loadavg } from "os";

export default function Listing() {
  useEffect(() => {
    load();
  }, []);

  async function load() {
      const {data:MoviePage} = await api.get('/movies?size=12');

      debugger
    }

  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  )
}