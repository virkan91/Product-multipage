import React from "react";

import scr from "../../assets/scr.png";

import im1 from "../../assets/im1.png";
import l1 from "../../assets/l1.png";
import l2 from "../../assets/I2.png";
import l3 from "../../assets/l3.png";
import I4 from "../../assets/I4.png";
import I5 from "../../assets/I5.png";
import inst from "../../assets/inst.png";
import fc from "../../assets/fc.png";
import twit from "../../assets/twit.png";
import map from "../../assets/map.png";

const Resources = () => {
  return (
    <div>
      <section className=" bg-[#1F2E35] text-[#FFF] py-[110px] dark:bg-[#FFFFFF] dark:text-[#22343D] ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="grid md:grid-cols-2 justify-between grid-cols-1">
            <div className="md:w-[87%] sm:w-full">
              <h1 className="text-[36px] font-semibold leading-[45px]">
                Great Business made with Product.
              </h1>
              <p className="text-[18px] mt-[20px]">
                Build better customer relationships easily messaging that
                provides a more personal experience for you and your customers.
              </p>
              <div className="border rounded-[100px] p-[7px] mt-[30px]">
                <div className="flex items-center justify-between">
                  <p>Enter your email adress</p>
                  <button className="bg-[#02897A] text-[#FFF] p-[8px_10px] rounded-[100px]">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[40px] md:mt-auto">
              <img src={scr} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#1F2E35] text-[#FFF]  dark:bg-[#FFFFFF] dark:text-[#22343D] ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="text-center">
            <h2 className="text-[32px] font-bold">Latest Stories</h2>
            <p className="text-[16px] font-medium">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-3  gap-6 py-[35px] grid-cols-1">
            <div className="rounded-xl drop-shadow-xl">
              <img src={im1} alt="" className="w-[100%]" />
              <div className="bg-[#FFF] p-[20px] rounded-b-[8px]">
                <p className="text-[#22343D]">
                  By <span className="font-bold">Wahid Ari |</span> 03 March
                  2019
                </p>
                <h2 className="text-[#22343D] font-bold not-italic text-[24px] mt-[16px]">
                  Increasing Prosperity With Positive Thinking
                </h2>
              </div>
            </div>
            <div className="rounded-xl drop-shadow-xl">
              <img src={l1} alt="" className="w-[100%] rounded-t-[8px]" />
              <div className="bg-[#FFF] p-[20px] rounded-b-[8px]">
                <p className="text-[#22343D]">
                  By <span className="font-bold">Wahid Ari |</span> 03 March
                  2019
                </p>
                <h2 className="text-[#22343D] font-bold not-italic text-[24px] mt-[16px]">
                  Motivation Is The First Step To Success
                </h2>
              </div>
            </div>
            <div className="drop-shadow-xl">
              <img src={l2} alt="" className="w-[100%] rounded-t-[8px]" />
              <div className="bg-[#FFF] p-[20px] rounded-b-[8px]">
                <p className="text-[#22343D]">
                  By <span className="font-bold">Wahid Ari |</span> 03 March
                  2019
                </p>
                <h2 className="text-[#22343D] font-bold not-italic text-[24px] mt-[16px]">
                  Success Steps For Your Personal Or Business
                </h2>
              </div>
            </div>
            <div className="drop-shadow-xl">
              <img src={l3} alt="" className="w-[100%]" />
              <div className="bg-[#FFF] p-[20px] rounded-b-[8px]">
                <p className="text-[#22343D]">
                  By <span className="font-bold">Wahid Ari |</span> 03 March
                  2019
                </p>
                <h2 className="text-[#22343D] font-bold not-italic text-[24px] mt-[16px]">
                  Increasing Prosperity With Positive Thinking
                </h2>
              </div>
            </div>
            <div className="drop-shadow-xl">
              <img src={I4} alt="" className="w-[100%]" />
              <div className="bg-[#FFF] p-[20px] rounded-b-[8px]">
                <p className="text-[#22343D]">
                  By <span className="font-bold">Wahid Ari |</span> 03 March
                  2019
                </p>
                <h2 className="text-[#22343D] font-bold not-italic text-[24px] mt-[16px]">
                  Increasing Prosperity With Positive Thinking
                </h2>
              </div>
            </div>
            <div className="drop-shadow-xl">
              <img src={I5} alt="" className="w-[100%]" />
              <div className="bg-[#FFF] p-[20px] rounded-b-[8px]">
                <p className="text-[#22343D]">
                  By <span className="font-bold">Wahid Ari |</span> 03 March
                  2019
                </p>
                <h2 className="text-[#22343D] font-bold not-italic text-[24px] mt-[16px]">
                  Increasing Prosperity With Positive Thinking
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#1F2E35] text-[#FFF] py-[110px] dark:bg-[#FFFFFF] dark:text-[#22343D]">
        <div className="container max-w-[900px] mx-auto py-[10px] sm:px-[20px]">
          <div className=" text-center w-[28%] m-auto">
            <h2 className="text-[32px] font-bold">Contact Us</h2>
            <p className="text-[16px] font-medium mt-[30px]">
              Need more detailed information? Get in touch with us.
            </p>
            <div className="flex  gap-4 justify-center mt-[50px]">
              <img src={inst} alt="" />
              <img src={fc} alt="" />
              <img src={twit} alt="" />
            </div>
          </div>
          <div className="py-[70px]">
            <img src={map} alt="" />
          </div>
          <form action="" className="">
            <h2 className="text-[22px] font-bold text-center dark:text-[#FFF] mb-4">
              Send a message
            </h2>
            <input
              type="text"
              placeholder="You Name"
              className="block text-[#000]"
            />

            <input
              type="text"
              placeholder="You Name"
              className="block text-[#000]"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your Message"
              className="block text-[#000]"
            ></textarea>
            <button className="bg-[#02897A] p-[8px_30px] rounded-[36px] mt-[40px]">
              {" "}
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Resources;
