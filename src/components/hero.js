import Carousel from "react-bootstrap/Carousel";
var heroData = [
  {
    id: 1,
    image: require("../assets/images/img-hero1.jpg"),
    title: "The perfect design for your website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/images/img-hero2.jpg"),
    title: "Start Your Future Financial Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/images/img-hero3.jpg"),
    title: "Enjoy the Difference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.twitter.com",
  },
];
export default function Hero() {
  return (
    <section id="home" className="hero-block">
      <Carousel data-bs-theme="light">
        {heroData.map((h) => {
          return (
            <Carousel.Item key={h.id}>
              <img className={h.id} src={h.image} alt={"Slide" + h.id} />
              <Carousel.Caption>
                <h5>{h.title}</h5>
                <p>{h.description}</p>
                <a className="btn btn-primary" href={h.link}>
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
