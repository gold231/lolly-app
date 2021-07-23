
function Error404() {
  return (
    <div>
      <div className="pt-5">
        <div className="flex-grow">
          <div className="mx-auto text-white">
            <div className="align-items-center d-flex flex-row">                 
              <div className="col-lg-6 error-page-divider text-lg-left pl-lg-4">
                <h2>SORRY!</h2>
                <h3 className="font-weight-dark" style={{ color: "black" }}>
                  The page you’re looking for was not found.
                </h3>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
