import axios from "axios";
import React, { useEffect, useState } from "react";

const Detail = (props) => {
  const ImageURL = "https://api.thecatapi.com/v1/images/";

  const [image, setImage] = useState([]);

  async function getImageData() {
    if (props.data.reference_image_id) {
      const result = await axios.get(ImageURL + props.data.reference_image_id);

      setImage(result.data);
      // console.log(result.data);
      return result;
    } else {
      setImage([]);
    }
  }

  useEffect(() => {
    getImageData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image.url ? image.url : "http://www.placehold.co/600x600.png"}
            style={{ width: 600, padding: 10 }}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="row">
              <p className="card-text">{props.data.description}</p>
              <div className="col-md-6">
                <h5>Overview :</h5>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th>Origin</th>
                      <td>{props.data.origin}</td>
                    </tr>
                    <tr>
                      <th>Country Code </th>
                      <td>{props.data.country_code}</td>
                    </tr>
                    <tr>
                      <th>Life Span</th>
                      <td>{props.data.life_span} Years</td>
                    </tr>
                    <tr>
                      <th>Temperament </th>
                      <td>{props.data.temperament}</td>
                    </tr>
                    <tr>
                      <th>Weight</th>
                      <td>{props.data.weight.metric} KG</td>
                    </tr>
                  </tbody>
                </table>
                <div></div>
              </div>
              <div className="col-md-6">
                <h5>Characteristic :</h5>
                <div className="ms-3">
                  <div className="mt-2">
                    <h6>Adaptability</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${props.data.adaptability * 20}%` }}
                        aria-valuenow={props.data.adaptability * 20}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h6>Grooming</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${props.data.grooming * 20}%` }}
                        aria-valuenow={props.data.grooming * 20}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h6>Health Issues</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${props.data.health_issues * 20}%` }}
                        aria-valuenow={props.data.health_issues * 20}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h6>Intelligence</h6>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${props.data.intelligence * 20}%` }}
                        aria-valuenow={props.data.intelligence * 20}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <h5>More Info :</h5>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <a
                  href={props.data.vcahospitals_url}
                  type="button"
                  className="btn btn-primary"
                >
                  VCA Hospitals
                </a>
                <a
                  href={props.data.vetstreet_url}
                  type="button"
                  className="btn btn-success"
                >
                  VetStreet
                </a>
                <a
                  href={props.data.wikipedia_url}
                  type="button"
                  className="btn btn-warning"
                >
                  Wikipedia
                </a>
                <a
                  href={props.data.cfa_url}
                  type="button"
                  className="btn btn-danger"
                >
                  CFA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
