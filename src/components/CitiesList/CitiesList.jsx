import './CitiesList.css';

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { city_getAll } from '../../services/API_proyect/city.service';
import { sortCitiesByAverageScore_descendingOrder } from '../../util/filters/city.filter';
import CardCity from '../CardCity/CardCity';
import { Spinner } from '../Spinner/Spinner';

const CitiesList = ({ itemsPerPage }) => {
  const [dataCitiesList, setDataCitiesList] = useState([]);
  const [downloading, setDownloading] = useState(false);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [pageCount, setPageCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState([]);

  const getCitiesData = async () => {
    setDownloading(true);
    const dataCityDB = await city_getAll();
    console.log('dataCityDB', dataCityDB);
    // Filter to show only freelances
    // const dataCities = dataCityDB?.data.filter((city) => city.rol === 'freelance');

    // Filter developers by average score
    const dataSortByAverageScore = sortCitiesByAverageScore_descendingOrder(
      dataCityDB.data,
    );

    // const dataSortByAverageScore =
    //   sortUsersByAverageScore_ascendingOrder(dataDevelopers);

    const dataFilterZero = dataSortByAverageScore.slice(0, itemsPerPage);
    const numerberPage = Math.ceil(dataSortByAverageScore.length / itemsPerPage);

    setPageCount(numerberPage);
    setDataCitiesList(dataSortByAverageScore);
    setItemPerPage(dataFilterZero);
    setDownloading(false);
  };

  useEffect(() => {
    getCitiesData();
  }, []);

  const handlePageClick = (event) => {
    console.log(event); /// selected empieza por 0
    const end =
      event.selected * itemsPerPage + itemsPerPage == 0
        ? itemsPerPage
        : event.selected * itemsPerPage + itemsPerPage;
    const citiesListWithOffset = dataCitiesList.slice(end - itemsPerPage, end);
    setItemPerPage(citiesListWithOffset);
  };

  return (
    <div className="cityList-container">
      {downloading ? (
        <Spinner />
      ) : (
        <div className="city_List-Container-maps-y-react-paginate2">
          <div className="citys_List-container">
            {itemPerPage.map((city) => (
              <div key={city._id}>
                <CardCity city={city} />
              </div>
            ))}
          </div>
          <div className="cityList-reactPaginate-container">
            <ReactPaginate
              className="cityList-paginate"
              activeClassName="cityList-paginate-active-element"
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

export default CitiesList;
