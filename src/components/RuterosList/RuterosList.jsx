import './RuterosList.css';

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { developer_getAll } from '../../services/API_proyect/developer.service';
import { sortUsersByAverageScore_descendingOrder } from '../../util/filters/developer.filter';
import CardRuteros from '../CardRuteros/CardRuteros';
import { Spinner } from '../Spinner/Spinner';

const RuterosList = ({ itemsPerPage }) => {
  const [dataDevelopersList, setDataDevelopersList] = useState([]);
  const [downloading, setDownloading] = useState(false);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [pageCount, setPageCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState([]);

  const getDevelopersData = async () => {
    setDownloading(true);
    const dataDeveloperDB = await developer_getAll();
    // Filter to show only freelances
    const dataDevelopers = dataDeveloperDB?.data.filter(
      (developer) => developer.rol === 'freelance',
    );

    // Filter developers by average score
    const dataSortByAverageScore =
      sortUsersByAverageScore_descendingOrder(dataDevelopers);

    // const dataSortByAverageScore =
    //   sortUsersByAverageScore_ascendingOrder(dataDevelopers);

    const dataFilterZero = dataSortByAverageScore.slice(0, itemsPerPage);
    const numerberPage = Math.ceil(dataSortByAverageScore.length / itemsPerPage);

    setPageCount(numerberPage);
    setDataDevelopersList(dataSortByAverageScore);
    setItemPerPage(dataFilterZero);
    setDownloading(false);
  };

  useEffect(() => {
    getDevelopersData();
  }, []);

  const handlePageClick = (event) => {
    console.log(event); /// selected empieza por 0
    const end =
      event.selected * itemsPerPage + itemsPerPage == 0
        ? itemsPerPage
        : event.selected * itemsPerPage + itemsPerPage;
    const developersListWithOffset = dataDevelopersList.slice(end - itemsPerPage, end);
    setItemPerPage(developersListWithOffset);
  };

  return (
    <div className="developers-container">
      {downloading ? (
        <Spinner />
      ) : (
        <div className="developerList-paginate-and-devs-list-container">
          <div className="developersList-developers-container">
            {itemPerPage.map((rutero) => (
              <div key={rutero._id}>
                <CardRuteros rutero={rutero} />
              </div>
            ))}
          </div>
          <ReactPaginate
            className="developerList-paginate"
            activeClassName="developerList-paginate-active-element"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
};

export default RuterosList;
