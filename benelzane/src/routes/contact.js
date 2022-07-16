import "./contact.css";

export default function Contact(){
    return (
      <>
      <section className="contact-section bg-black mt-5" id="contact">
    <div className="container px-4 px-lg-5">
      <div className="contact-info">
        <h3 className="text-center text-white display-4">Contact Information</h3>
        <ol className="text-white">
          <li className="address">08 Klosser St, <br/> Parow, Cape Town, 7500</li>
          <li className="phone"><a href="tel://1234567920">+27 73 891 3093</a></li>
          <li className="email"><a href="mailto:benelzanekholane@gmail.com">benelzanekholane@gmail.com</a></li>
        </ol>
      </div>
        <div className="social d-flex justify-content-center">
            <a className="mx-2" href="https://za.linkedin.com/in/kholani-benelzane-66ab711a8"><i className="bi bi-linkedin"></i></a>
            <a className="mx-2" href="https://www.facebook.com/profile.php?id=100074140736669"><i className="bi bi-facebook"></i></a>
            <a className="mx-2" href="https://github.com/ColeColombia"><i className="bi bi-github"></i></a>
        </div>
    </div>
</section>
<footer className="footer bg-black small text-center text-white-50"><div className="container px-4 px-lg-5">Copyright &copy; Kholani Benelzane 2022 all rights reserved</div></footer>
      </>
    )
}