import React from "react";

const HomePageSecondSection: React.FC = () => {
  return (
    <div>
      <h1>This is a Grid's world 2</h1>

      <div className="container-fluid p-3">
        <div className="row">
          {/* Full width on sm, half width on md, and 1/3 width on lg */}
          <div className="col-sm-12 col-md-6 col-lg-4 bg-primary text-white p-3 mb-3">
            Column 1
          </div>
          {/* Half width on sm and md, 1/4 width on lg */}
          <div className="col-sm-6 col-md-6 col-lg-3 bg-secondary text-white p-3 mb-3">
            Column 2
          </div>
          {/* Full width on sm, half width on md, 1/4 width on lg */}
          <div className="col-sm-12 col-md-6 col-lg-3 bg-success text-white p-3 mb-3">
            Column 3
          </div>
          {/* Full width on sm, 1/2 width on md and 1/3 width on lg */}
          <div className="col-sm-12 col-md-6 col-lg-4 bg-danger text-white p-3 mb-3">
            Column 4
          </div>
          {/* Full width on sm, full width on md, 1/6 width on lg */}
          <div className="col-sm-12 col-md-12 col-lg-2 bg-warning text-dark p-3 mb-3">
            Column 5
          </div>
          {/* Full width on sm, full width on md, 1/6 width on lg */}
          <div className="col-sm-12 col-md-12 col-lg-2 bg-info text-white p-3 mb-3">
            Column 6
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSecondSection;
