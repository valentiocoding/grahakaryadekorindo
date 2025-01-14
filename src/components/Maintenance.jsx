import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Maintenance = () => {
  return (
    <div className="wrapper bg-[url(/bg.png)] h-screen bg-cover flex items-center justify-center p-5">
      <div className="font-poppins flex flex-col items-center justify-center text-center space-y-5">
        <motion.img
          src="/white-logo.png"
          alt="logo"
          className="w-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-white text-sm"
        >
          Interior Designer & Contractor | Furniture Manufacturer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="font-sifonn text-white text-lg mt-3 px-3"
        >
          OUR NEW WEBSITE WILL COMPLETELY BLOW YOUR MIND
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white text-sm w-full px-3 mt-3"
        >
          We will be live in
        </motion.p>

        <div className="flex flex-wrap gap-5 justify-center items-center mt-5">
          {/* Countdown Box */}
          {["17 DAYS", "16 HOURS", "12 MINUTES", "23 SECONDS"].map(
            (item, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="font-sifonn w-20 h-24 bg-[#174E26] border shadow-xl text-white rounded-lg flex flex-col justify-center items-center"
              >
                <p className="text-2xl">{item.split(" ")[0]}</p>
                <p className="text-xs">{item.split(" ")[1]}</p>
              </motion.div>
            )
          )}
        </div>

        {/* Social Media Links */}
        <div className="flex gap-10 mt-8">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 2 }}
            href="https://wa.me/6285886051338"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-5xl"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 2 }}
            href="https://instagram.com/gkdekorindo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-5xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 2 }}
            href="https://www.linkedin.com/company/gkdekorindo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-5xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>
        </div>
        <p className="font-sifonn text-white">CONTACT US</p>
      </div>
    </div>
  );
};

export default Maintenance;
