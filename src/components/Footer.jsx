import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="bg-black w-full h-auto text-white font-raleway">
        <div className="flex flex-col space-y-4 justify-between px-10 py-4 text-sm">
          <div className="location">
            <h1>Location</h1>
            Jalan Maulana Hasanudin Gg. Swadaya No. 6 RT 003 / RW 03 Kel. Poris
            Gaga Kec. Batuceper. Tangerang 15122
          </div>

          <div className="flex justify-between items-start">
            <div className="location">
              <h1>Contact</h1>
              <p>Whatsapp</p>
              <p>+62 858-8605-1338</p>
              <div className="flex space-x-3">
                <a href="https://wa.me/6285886051338" target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                </a>
                <a href="https://instagram.com/gkdekorindo" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>
                <a
                  href="https://linkedin.com/company/gkdekorindo"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                </a>
                <a href="https://tiktok.com/@gkdekorindo" target="_blank">
                  <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
                </a>
              </div>
            </div>

            <div className="location text-right">
              <h1>Operational Hours</h1>
              <p>Monday - Friday</p>
              <p>08:30 - 17:30</p>
            </div>
          </div>

          <div className="text-center text-xs mt-6">
            <div className="flex items-center justify-center">&copy; 2025 Website by 
              <a href="https://instagram.com/solvean.id">
                <img src="/logo/solvean.png"  className=' w-20 ml-2' alt="" />
                </a>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
