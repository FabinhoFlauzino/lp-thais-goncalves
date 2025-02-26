"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./styles.module.css";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { TestimonialsPersons } from "@/data/Testimonials";

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className={styles.testimonial} id="depoimentos">
        <div className={`container ${styles.testimonialContainer}`}>
          <header>
            <h4>Depoimentos</h4>
            <h2>O que os clientes dizem sobre Dra. Thaís Gonçalves</h2>
          </header>

          <Slider {...settings}>
            {
              TestimonialsPersons.map((person) => (
                <div className={styles.card} key={person.id}>
                  <div>
                    <BiSolidQuoteAltRight size={48} />
                    <p>{person.text}</p>
                    <h3>{person.name}</h3>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </section>
    </>
  )
}