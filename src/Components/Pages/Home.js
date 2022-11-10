const Home = () => {
  return (
    <>
      <section className="Hero-section">
        <div classNane=".container container-1">
          <div className="icons">
            <img src="./assets/about-us/Line 1.png" alt="line " />
            <p>
              <i className="fa-brands fa-facebook icon-first"></i>
            </p>
            <p>
              <i className="fa-brands fa-twitter icon-first"></i>
            </p>
            <p>
              <i className="fa-brands fa-instagram icon-first"></i>
            </p>
            <p>
              <i className="fa-brands fa-linkedin icon-first"></i>
            </p>
          </div>
          <div className="text-center">
            <div className="heroActive">
              <h1>Fast & Reliable Car Service</h1>
              <button
                type="button"
                className="btn btn-danger book-service mt-4 mb-4"
              >
                Book Service
              </button>
              <button type="button" class="btn btn-link text-white link2">
                learn more
              </button>
            </div>

            <div class="container rectangle-container1 mt-4">
              <p>Search Brand/ Car For Servicing</p>
              <div className="rect-heroActive">
                <div className="search d-flex">
                  <form className="d-flex" style="flex: 1">
                    <i className="fa-sharp fa-solid fa-magnifying-glass text-center"></i>
                    <input
                      className="search-field"
                      type="text"
                      placeholder="Search Name"
                      style="flex: 1"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
