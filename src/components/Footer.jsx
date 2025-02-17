import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import solvean from "../assets/logo/solvean.webp";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-raleway flex flex-col w-full text-sm items-center px-5">
      <div className="mt-5 w-full items-center flex flex-col ">
        <div className="Location text-center max-w-[400px] md:hidden">
          <h1 className="font-semibold">Location</h1>
          <p>
            Jalan Maulana Hasanudin Gg. Swadaya No. 6 RT 003 / RW 03 Kel. Poris
            Gaga Kec. Batuceper. Tangerang 15122
          </p>
        </div>
        <div className="flex justify-between mt-5 items-center text-center w-[75%]">
          <div className="social">
            <h1 className="font-semibold">Contact</h1>
            <div className="flex gap-2 text-xl items-center text-center justify-center">
              <a href="https://wa.me/6285886051338"
                  aria-label="Whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.tiktok.com/@gkdekorindo"
                  aria-label="Tiktok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://www.instagram.com/gkdekorindo"
                  aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/company/gkdekorindo"
                className=""
                aria-label="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="hidden md:block Location text-center max-w-[400px] px-5">
            <h1 className="font-semibold">Location</h1>
            <p>
              Jalan Maulana Hasanudin Gg. Swadaya No. 6 RT 003 / RW 03 Kel.
              Poris Gaga Kec. Batuceper. Tangerang 15122
            </p>
          </div>
          <div className="opening">
            <h1 className="font-semibold">Operation Hours</h1>
            <h1>Monday - Friday</h1>
            <h1>08:30 - 17:30</h1>
          </div>
        </div>
      </div>

      <div className="text-center text-xs">
        <div className="flex items-center justify-center">
          &copy; 2025 Website by
          <a href="https://instagram.com/solvean.id"
            aria-label="Instagram">
            <img src={solvean} className=" w-20 ml-2" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
