import "./Footer.css"
const Footer = () => {
  return (
    <div className="container-fluid px-0">
      <footer className="text-white bg-dark py-4">
        <div className="container-fluid px-4">
          <div className="row flex-nowrap mx-0">
            <div className="col">
              <h6 className="text-uppercase mb-4 font-weight-bold">Azienda</h6>
              <a href="#" className="text-white d-block mb-2">Chi siamo</a>
              <a href="#" className="text-white d-block mb-2">Opportunità di lavoro</a>
              <a href="#" className="text-white d-block mb-2">For the Record</a>
            </div>
            <div className="col">
              <h6 className="text-uppercase mb-4 font-weight-bold">Community</h6>
              <a href="#" className="text-white d-block mb-2">Per artisti</a>
              <a href="#" className="text-white d-block mb-2">Sviluppatori</a>
              <a href="#" className="text-white d-block mb-2">Pubblicità</a>
              <a href="#" className="text-white d-block mb-2">Investitori</a>
              <a href="#" className="text-white d-block mb-2">Venditori</a>
            </div>
            <div className="col">
              <h6 className="text-uppercase mb-4 font-weight-bold">Link utili</h6>
              <a href="#" className="text-white d-block mb-2">Assistenza</a>
              <a href="#" className="text-white d-block mb-2">App per cellulare gratuita</a>
              <a href="#" className="text-white d-block mb-2">Diritti del consumatore</a>
              <a href="#" className="text-white d-block mb-2">Popolare per Paese</a>
              <a href="#" className="text-white d-block mb-2">Import your music</a>
            </div>
            <div className="col">
              <h6 className="text-uppercase mb-4 font-weight-bold">Piani Spotify</h6>
              <a href="#" className="text-white d-block mb-2">Premium Individual</a>
              <a href="#" className="text-white d-block mb-2">Premium Duo</a>
              <a href="#" className="text-white d-block mb-2">Premium Family</a>
              <a href="#" className="text-white d-block mb-2">Premium Student</a>
              <a href="#" className="text-white d-block mb-2">Spotify Free</a>
            </div>
            <div className="col-auto d-flex justify-content-end align-items-center gap-2">
              <a
                className="btn btn-dark btn-floating m-0"
                href="#!"
                role="button"
                style={{ backgroundColor: "#222", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-dark btn-floating m-0"
                href="#!"
                role="button"
                style={{ backgroundColor: "#222", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-dark btn-floating m-0"
                href="#!"
                role="button"
                style={{ backgroundColor: "#222", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="separator">

        </div>
        <div className="d-flex justify-content-around">
            <div className="d-flex align-items-center gap-3">
                <a href="#" className="text-white">Informazioni legali</a>
                <a href="#" className="text-white">Sicurezza e Centro sulla pricavy</a>
                <a href="#" className="text-white">Informativa sulla Privacy</a>
                <a href="#" className="text-white">Impostazioni cookie</a>
                <a href="#" className="text-white">Info annunci</a>
                <a href="#" className="text-white">Accessibilità</a>
            </div>
            <div>
                <p>© 2025 Spotify AB</p>
            </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
