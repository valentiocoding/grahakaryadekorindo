import { motion } from 'framer-motion';
function App() {

  return (
    <>
      {/* Gunakan path yang benar */}
      <div className='bg-[url(/bg.png)] h-screen bg-cover'>
        {/* Konten lainnya */}
        <div className="font-poppins flex flex-col items-center justify-center">
          <motion.div
          initial={{ opacity: 0 , x: -100}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.5 }}
          className="text-6xl font-poppins font-extrabold text-white mt-10 bg-blue-  ">
            GKD
          </motion.div>

          <motion.div
          initial={{ opacity: 0 , x: -100}}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.75 }}
          className="text-xl font-poppins  text-white">
            Interior Designer & Contractor | Furniture Manufacturer
          </motion.div>
          <div className="justify-start w-screen pl-10 pt-20 pr-10">
            <motion.p
            initial={{ opacity: 0 , y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1 }}
            className="font-sifonn text-2xl text-white">
            OUR NEW WEBSITE WILL COMPLETLY BLOW YOUR MIND
            </motion.p>
            <motion.p
            initial={{ opacity: 0 , y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1.25 }}
            className="font-poppins text-2xl font-thin text-white">
            We will be live in
            </motion.p>
            <motion.div
            initial={{ opacity: 0 , y: 100, scale: 0}}
            animate={{ opacity: 1, y: 0, scale: 1}}
            transition={{ duration: 1.5 }}
            className="flex justify-center gap-x-20 items-center">
              <div className=" w-96 items-center justify-center flex text-white flex-col">
                <p className=" font-sifonn text-6xl">17</p>
                <p className=" font-sifonn text-6xl">DAYS</p>
              </div>
              <div className="w-1 h-96 bg-white">
              </div>

              <div className=" w-96 items-center justify-center flex text-white flex-col">
                <p className=" font-sifonn text-6xl">2</p>
                <p className=" font-sifonn text-6xl">HOURS</p>
              </div>
              <div className="w-1 h-96 bg-white">
              </div>
              <div className=" w-96 items-center justify-center flex text-white flex-col">
                <p className=" font-sifonn text-6xl text-center">13</p>
                <p className=" font-sifonn text-6xl">MINUTES</p>
              </div>
              <div className="w-1 h-96 bg-white">
              </div>
              <div className=" w-96 items-center justify-center flex text-white flex-col">
                <p className=" font-sifonn text-6xl">14</p>
                <p className=" font-sifonn text-6xl">SECONDS</p>
              </div>
            </motion.div>
            </div>

        </div>
      </div>
    </>
  )
}

export default App
