import './MountainRoutesList.css';

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { getAllMountainRoutes } from '../../services/API_proyect/mountainRoute.service';
import { sortMountainRoutesByAverageScore_descendingOrder } from '../../util/filters/mountainRoute.filter';
import CardMountainRoute2 from '../CardMountainRoute2/CardMountainRoute2';
import { Spinner } from '../Spinner/Spinner';

const MountainRouteList = ({ itemsPerPage }) => {
  const [dataMountainRoutesList, setDataMountainRoutesList] = useState([]);
  const [downloading, setDownloading] = useState(false);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [pageCount, setPageCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState([]);

  const getMountainRouteData = async () => {
    setDownloading(true);
    const dataMountainRouteDB = await getAllMountainRoutes();

    // Filter offers by average score
    const dataSortByAverageScore = sortMountainRoutesByAverageScore_descendingOrder(
      dataMountainRouteDB.data,
    );

    const dataFilteredZero = dataSortByAverageScore.slice(0, itemsPerPage);
    const numerberPage = Math.ceil(dataSortByAverageScore.length / itemsPerPage);

    setPageCount(numerberPage);
    setDataMountainRoutesList(dataSortByAverageScore);
    setItemPerPage(dataFilteredZero);
    setDownloading(false);
  };

  useEffect(() => {
    getMountainRouteData();
  }, []);

  const handlePageClick = (event) => {
    const end =
      event.selected * itemsPerPage + itemsPerPage == 0
        ? itemsPerPage
        : event.selected * itemsPerPage + itemsPerPage;
    const mountainRoutesListWithOffset = dataMountainRoutesList.slice(
      end - itemsPerPage,
      end,
    );
    setItemPerPage(mountainRoutesListWithOffset);
  };

  return (
    <div className="mountainRouteList-container">
      {downloading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            {/* <h2>Rutas de Montaña</h2> */}
            {itemPerPage.map((mountainRoute) => (
              <div key={mountainRoute._id}>
                <CardMountainRoute2 mountainRoute={mountainRoute} />
              </div>
            ))}
          </div>
          <div className="mountainRouteList-reactPaginate-container">
            <ReactPaginate
              className="mountainRouteList-paginate"
              activeClassName="mountainRouteList-paginate-active-element"
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MountainRouteList;
