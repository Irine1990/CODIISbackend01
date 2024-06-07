import React from "react";

import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";

// import { useLocation } from "react-router-dom";
import TourCard from "./../shared/TourCard";

import Newsletter from "./../shared/Newsletter";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const SearchResultList = () => {
  // const loc = useLocation();

  // const [data] = useState(loc.state);
  // console.log(loc)
const { data, loading, error } = useFetch(`${BASE_URL}/tours/getAllTours`);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No tour found</h4>
            ) : (
              data?.map(tour => (
                <Col lg="3" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;
