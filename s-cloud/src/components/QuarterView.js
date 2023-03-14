import { startOfQuarter } from "date-fns";
import { Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const QuarterView = ({ currentQuarter, changeQuarter }) => {
  const quarterStart = startOfQuarter(currentQuarter[0]);
  const quarter = Math.floor(quarterStart.getMonth() / 3) + 1;

  return (
    <Row className="justify-content-center p-5">
      <Col xs="auto">
        <Button variant="success" onClick={() => changeQuarter(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      </Col>
      <Col xs="auto" className="text-center">
        <h5>Quarter {quarter} </h5>
      </Col>
      <Col xs="auto">
        <Button variant="success" onClick={() => changeQuarter(1)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Col>
    </Row>
  );
};

export default QuarterView;
