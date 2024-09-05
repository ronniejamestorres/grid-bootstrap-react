import React from "react";

const HomePageFirstSection: React.FC = () => {
  return (
    <div>
      <h1>This is a Grid's world</h1>

      <div className="container-fluid p-4">
        <div className="row">
          {/* Adjust grid layout for different screen sizes */}
          <div className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="bg-primary text-white p-4">Item 1</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="bg-secondary text-white p-4">Item 2</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="bg-success text-white p-4">Item 3</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="bg-danger text-white p-4">Item 4</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="bg-warning text-white p-4">Item 5</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="bg-info text-white p-4">Item 6</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="bg-dark text-white p-4">Item 7</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="bg-light text-dark p-4">Item 8</div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="bg-secondary text-white p-4">Item 9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFirstSection;
