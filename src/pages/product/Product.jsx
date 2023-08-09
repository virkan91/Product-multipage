import React from "react";

import amico from "../../assets/amico.png";
import ic1 from "../../assets/ic1.png";
import ic2 from "../../assets/ic2.png";
import ic3 from "../../assets/ic3.png";
import ic4 from "../../assets/ic4.png";
import amico2 from "../../assets/amic2.png";
import amico3 from "../../assets/amico3.png";
import amico4 from "../../assets/amico4.png";
import icyellow from "../../assets/icyellow.png";
import icred from "../../assets/icred.png";
import icblue from "../../assets/icblue.png";
import av1 from "../../assets/av1.png";
import av2 from "../../assets/av2.png";
import av3 from "../../assets/av3.png";
import av4 from "../../assets/av4.png";
import im1 from "../../assets/im1.png";
import im2 from "../../assets/im2.png";
import im3 from "../../assets/im3.png";
import El1 from "../../assets/El1.png";
import El2 from "../../assets/El2.png";
import El3 from "../../assets/El3.png";
import sc from "../../assets/sc.png";

const Product = () => {
  return (
    <div>
      <div className="section1 bg-[#1F2E35] dark:bg-[#FFFFFF] text-[#FFF] dark:text-[#22343D] ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="flex items-center justify-between flex-wrap">
            <div className="md:w-[40%] sm:w-full sm:mt-[20px]">
              <h1 className="font-bold text-[45px] leading-[50px] ">
                Work at the speed of thought
              </h1>
              <p className=" mt-[20px]">
                Tools, tutorials, design and innovation experts, all in one
                place! The most intuitive way to imagine your next user
                experience.
              </p>
              <div className="flex items-center gap-8 mt-[30px]">
                <button className="bg-[#02897A] text-[#FFF] p-[6px] px-6 rounded-[4px]">
                  Get started
                </button>

                <p className="flex gap-2 items-center text-[#02897A] text-[16px] font-semibold not-italic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="19"
                    viewBox="0 0 17 19"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.8516 8.53032C16.591 8.96531 16.591 10.0347 15.8516 10.4697L2.1954 18.5027C1.44543 18.9439 0.5 18.4031 0.5 17.533V1.46697C0.5 0.596876 1.44543 0.0561381 2.1954 0.497293L15.8516 8.53032Z"
                      fill="#02897A"
                    />
                  </svg>
                  Watch the Video
                </p>
              </div>
            </div>
            <div className="sm:mt-[80px] md:mt-auto">
              <img src={amico} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="section2 bg-[#1F2E35] text-[#FFF] py-[110px] dark:bg-[#FFFFFF] dark:text-[#22343D]  ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="md:w-[46%] m-auto text-center sm:w-full">
            <h2 className="text-[32px] font-bold ">
              Product was Built Specifically for You
            </h2>
          </div>

          <div className="icons grid md:grid-cols-4 py-[60px] gap-[50px] sm:grid-cols-1">
            <div className="">
              <img src={ic1} alt="" className="" />
              <h2>First click tests</h2>
              <p>While most people enjoy casino gambling,</p>
            </div>
            <div className="">
              <img src={ic2} alt="" />
              <h2>Design surveys</h2>
              <p>Sports betting, lottery and bingo playing for the fun</p>
            </div>
            <div className="">
              <img src={ic3} alt="" />
              <h2>Preference tests</h2>
              <p>The Myspace page defines the individual.</p>
            </div>
            <div className="">
              <img src={ic4} alt="" />
              <h2>Five second tests</h2>
              <p className="w-[80%]">
                Personal choices and the overall personality of the person.{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#02897A] p-[10px] rounded-[4px] font-bold dark:text-[#FFFFFF]">
              SIGN UP NOW
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#1F2E35] text-[#FFF] py-[110px] dark:bg-[#FFFFFF] dark:text-[#22343D] ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="flex items-center justify-between flex-wrap">
            <div className="md:w-[40%] sm:w-full sm:text-center md:text-start">
              <p>Effortless Validation for</p>
              <h1 className=" font-bold text-[45px] leading-[50px] mt-[20px]">
                Management
              </h1>
              <p className="mt-[30px]">
                The Myspace page defines the individual, his or her
                characteristics, traits, personal choices and the overall
                personality of the person.
              </p>
              <h3 className="mt-[20px] text-[18px] font-semibold">
                Accessory makers
              </h3>
              <p className="mt-[16px]">
                While most people enjoy casino gambling, sports betting, lottery
                and bingo playing for the fun
              </p>
              <h3 className="mt-[20px] text-[18px] font-semibold">
                Alterationists
              </h3>
              <p className="mt-[16px]">
                If you are looking for a new way to promote your business that
                won’t cost you more money,{" "}
              </p>
            </div>
            <div className="sm:mt-[80px] md:mt-auto">
              <img src={amico2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1F2E35] text-[#FFF]  dark:bg-[#FFFFFF] dark:text-[#22343D]  ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="sm:flex sm:flex-col md:flex md:flex-row items-center justify-between">
            <div>
              <img src={amico3} alt="" />
            </div>
            <div className="md:w-[40%] sm:w-full sm:mt-[70px] md:mt-auto sm:text-center md:text-start">
              <p>Easier decision making for</p>
              <h1 className=" font-bold text-[45px] leading-[50px] mt-[20px]">
                Customer Support{" "}
              </h1>
              <p className=" mt-[20px]">
                The Myspace page defines the individual, his or her
                characteristics, traits, personal choices and the overall
                personality of the person.
              </p>
              <div className="flex items-center gap-6 mt-[30px] ">
                <img src={icyellow} alt="" />
                <p>Never worry about overpaying for your energy again. </p>
              </div>
              <div className="flex gap-6 items-center mt-[20px] sm:text-start">
                <img src={icred} alt="" />
                <p>
                  We will only switch you to energy companies that we trust and
                  will treat you right
                </p>
              </div>
              <div className="flex gap-6 items-center mt-[20px] sm:text-start ">
                <img src={icblue} alt="" />
                <p>
                  We track the markets daily and know where the savings are.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1F2E35] text-[#FFF] py-[110px] dark:bg-[#FFFFFF] dark:text-[#22343D]  ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="flex items-center justify-between flex-wrap">
            <div className="md:w-[40%] sm:w-full sm:text-center md:text-start">
              <p>Optimisation for</p>
              <h1 className=" font-bold text-[45px] leading-[50px] mt-[20px]">
                Collaborative
              </h1>
              <p className=" mt-[20px]">
                TFew would argue that, despite the advancements of feminism over
                the past three decades, women still face a double standard when
                it comes to their behavior.
              </p>
              <h3 className="mt-[20px] text-[18px] font-semibold">
                Accessory makers
              </h3>
              <p className="mt-[16px]">
                While most people enjoy casino gambling, sports betting, lottery
                and bingo playing for the fun
              </p>
              <h3 className="mt-[20px] text-[18px] font-semibold">
                Alterationists
              </h3>
              <p className="mt-[16px]">
                If you are looking for a new way to promote your business that
                won’t cost you more money,{" "}
              </p>
            </div>
            <div className="sm:mt-[80px] md:mt-auto">
              <img src={amico4} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section6 bg-[#1F2E35] text-[#FFF] py-[160px] dark:bg-[#FFFFFF]  ">
        <div className="container max-w-[900px] mx-auto py-[10px] sm:px-[20px]">
          <div className="md:w-[54%] m-auto  text-center sm:w-full">
            <h2 className="text-[32px] font-bold not-italic">
              Quick & Easy Process
            </h2>
            <p>
              Do you require some help for your project: Conception workshop,
              prototyping, marketing strategy, landing page, Ux/UI?
            </p>
          </div>
          <div className="flex md:justify-between py-[30px] flex-wrap sm:justify-center">
            <div className="span flex items-center gap-4">
              <img src={av1} alt="" />
              <div>
                <span className="block">I can take care of your pitch</span>
              </div>
            </div>
            <div className="span flex items-center gap-4">
              <div>
                <span className="block">I can take care of your pitch</span>
              </div>
              <img src={av2} alt="" />
            </div>
          </div>
          <div className="flex md:justify-between sm:justify-center flex-wrap">
            <div className="span flex items-center gap-4">
              <div>
                <span className="block">I can take care of your pitch</span>
              </div>
              <img src={av3} alt="" />
            </div>
            <div className="span flex items-center gap-4">
              <img src={av4} alt="" />
              <div>
                <span className="block">I can take care of your pitch</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center  py-[50px]">
            <button className="bg-[#02897A] p-[10px] rounded-[4px] font-bold">
              Contact our expert
            </button>
          </div>
        </div>
      </section>

      <section className=" bg-[#1F2E35] text-[#FFF] dark:bg-[#FFFFFF] dark:text-[#22343D]  ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="sm:text-center md:text-start">
            <h1 className="text-[34px] font-bold not-italic">
              Contents Strategies
            </h1>
            <p className="text-[16px] mt-[10px]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
          </div>
          <div className="grid md:grid-cols-3  gap-6 py-[35px] sm:grid-cols-1">
            <div className="rounded-xl">
              <img src={im1} alt="" className="w-[100%]" />
              <div className="bg-[#FFF] p-[20px] rounded-b-[8px]">
                <p className="text-[#22343D]">
                  By <span className="font-bold">Wahid Ari |</span> 03 March
                  2019
                </p>
                <h2 className="text-[#22343D] font-bold not-italic text-[26px] mt-[16px]">
                  Increasing Prosperity With Positive Thinking
                </h2>
              </div>
            </div>
            <div className="">
              <img src={im2} alt="" className="w-[100%] rounded-t-[8px]" />
              <div className="bg-[#FFF] p-[20px] rounded-b-[8px] ">
                <p className="text-[#22343D]">
                  By <span className="font-bold">Wahid Ari |</span> 03 March
                  2019
                </p>
                <h2 className="text-[#02897A] font-bold not-italic text-[26px] mt-[16px]">
                  Motivation Is The First Step To Success
                </h2>
              </div>
            </div>
            <div className="rounded-xl">
              <img src={im3} alt="" className="w-[100%] rounded-t-[8px]" />
              <div className="bg-[#FFF] p-[20px] rounded-b-[8px]">
                <p className="text-[#22343D]">
                  By <span className="font-bold">Wahid Ari |</span> 03 March
                  2019
                </p>
                <h2 className="text-[#22343D] font-bold not-italic text-[26px] mt-[16px]">
                  Success Steps For Your Personal Or Business{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="text-center mt-[40px]">
            <h2 className="text-[34px] font-bold">Price Table</h2>
            <p className="mt-[8px]">We offer competitive price</p>
          </div>
        </div>
      </section>

      <section className=" bg-[#1F2E35] text-[#FFF] py-[110px] dark:bg-[#FFFFFF] ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="grid md:grid-cols-3 gap-[60px] sm:grid-cols-1">
            <div className="bg-[#FFFFFF] drop-shadow-lg rounded-[8px] text-center p-[20px]">
              <h2 className="text-[24px] font-bold not-italic text-[#22343D]">
                Free
              </h2>
              <p className="text-[#22343D] mt-[16px]">
                Brief price description
              </p>
              <div className="flex items-center gap-3 justify-center">
                <h3 className="text-[70px] text-[#02897A] font-bold not-italic tracking-tighter-[0.2px]">
                  0
                </h3>
                <div className="leading-5 mt-4">
                  <span className="text-[#02897A] text-[24px] font-bold not-italic text-start flex justify-start">
                    $
                  </span>
                  <p className="text-[#AFAFAF]">Per / month</p>
                </div>
              </div>
              <div className="leading-10 ">
                <p className="text-[#22343D]">Only 2 Operators</p>
                <p className="text-[#22343D]">Notifications</p>
                <p className="text-[#22343D]">Landing Pages</p>
              </div>
              <button className="bg-[#02897A] p-[6px_16px] rounded-[8px] mt-[20px] font-semibold ">
                Order Now
              </button>
            </div>
            <div className="bg-[#02897A] drop-shadow-lg rounded-[8px] text-center p-[20px]">
              <h2 className="text-[24px] font-bold not-italic text-[##FFFFFF]">
                Free
              </h2>
              <p className="text-[#FFFFFF] mt-[16px]">
                Brief price description
              </p>
              <div className="flex items-center gap-3 justify-center">
                <h3 className="text-[70px] text-[#FFFFFF] font-bold not-italic tracking-tighter-[0.2px]">
                  5
                </h3>
                <div className="leading-5 mt-4">
                  <span className="text-[#FFFFFF] text-[24px] font-bold not-italic text-start flex justify-start">
                    $
                  </span>
                  <p className="text-[#FFFFFF]">Per / month</p>
                </div>
              </div>
              <div className="leading-10 ">
                <p className="text-[#FFFFFF]">5+ Operators</p>
                <p className="text-[#FFFFFF]">Notifications</p>
                <p className="text-[#FFFFFF]">Landing Pages</p>
              </div>
              <button className="bg-[#FFFFFF] p-[6px_16px] rounded-[8px] mt-[20px] text-[#02897A] font-semibold ">
                Order Now
              </button>
            </div>
            <div className="bg-[#FFFFFF] drop-shadow-lg rounded-[8px] text-center p-[20px]">
              <h2 className="text-[24px] font-bold not-italic text-[#22343D]">
                Free
              </h2>
              <p className="text-[#22343D] mt-[16px]">
                Brief price description
              </p>
              <div className="flex items-center gap-3 justify-center">
                <h3 className="text-[70px] text-[#02897A] font-bold not-italic tracking-tighter-[0.2px]">
                  10
                </h3>
                <div className="leading-5 mt-4">
                  <span className="text-[#02897A] text-[24px] font-bold not-italic text-start flex justify-start">
                    $
                  </span>
                  <p className="text-[#AFAFAF]">Per / month</p>
                </div>
              </div>
              <div className="leading-10 ">
                <p className="text-[#22343D]">10+ Operators</p>
                <p className="text-[#22343D]">Notifications</p>
                <p className="text-[#22343D]">Landing Pages</p>
              </div>
              <button className="bg-[#02897A] p-[6px_16px] rounded-[8px] mt-[20px] ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#1F2E35] text-[#FFF]  dark:bg-[#FFFFFF] dark:text-[#22343D] ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="md:w-[45%] m-auto text-center sm:w-full">
            <h2 className="text-[28px] font-bold not-italic">
              What Clients Say
            </h2>
            <p className="mt-[10px]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-[60px] py-[60px] grid-cols-1">
            <div className="bg-[#FFFFFF] rounded-[5px] border-slate-200	p-[34px_40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="107"
                height="19"
                viewBox="0 0 107 19"
                fill="none"
              >
                <path
                  d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M40.3103 6.58663C40.2526 6.41682 40.1465 6.26761 40.005 6.15742C39.8635 6.04723 39.6929 5.98089 39.5141 5.96658L34.2849 5.55107L32.0221 0.542056C31.9501 0.380725 31.8328 0.243699 31.6846 0.147514C31.5364 0.0513295 31.3635 9.71158e-05 31.1868 1.37932e-07C31.0101 -9.684e-05 30.8372 0.0509458 30.6889 0.146968C30.5405 0.24299 30.4232 0.379887 30.3509 0.541138L28.0881 5.55107L22.859 5.96658C22.6833 5.9805 22.5153 6.04474 22.3752 6.15161C22.235 6.25849 22.1286 6.40348 22.0688 6.56923C22.0089 6.73498 21.998 6.91448 22.0374 7.08625C22.0769 7.25802 22.165 7.41479 22.2912 7.5378L26.1555 11.3049L24.7888 17.2229C24.7473 17.402 24.7606 17.5895 24.827 17.761C24.8934 17.9324 25.0097 18.08 25.161 18.1845C25.3123 18.2891 25.4915 18.3457 25.6754 18.3471C25.8593 18.3485 26.0393 18.2946 26.1922 18.1924L31.1865 14.8628L36.1809 18.1924C36.3371 18.2961 36.5214 18.3495 36.7089 18.3454C36.8963 18.3413 37.0781 18.2799 37.2296 18.1694C37.3812 18.0589 37.4952 17.9047 37.5565 17.7274C37.6178 17.5502 37.6233 17.3584 37.5723 17.1779L35.8947 11.3076L40.0553 7.56348C40.3277 7.31766 40.4277 6.93426 40.3103 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M62.321 6.58663C62.2633 6.41682 62.1572 6.26761 62.0157 6.15742C61.8743 6.04723 61.7036 5.98089 61.5248 5.96658L56.2957 5.55107L54.0329 0.542056C53.9608 0.380725 53.8436 0.243699 53.6954 0.147514C53.5471 0.0513295 53.3743 9.71158e-05 53.1976 1.37932e-07C53.0209 -9.684e-05 52.8479 0.0509458 52.6996 0.146968C52.5513 0.24299 52.4339 0.379887 52.3617 0.541138L50.0989 5.55107L44.8697 5.96658C44.694 5.9805 44.526 6.04474 44.3859 6.15161C44.2458 6.25849 44.1394 6.40348 44.0795 6.56923C44.0196 6.73498 44.0087 6.91448 44.0482 7.08625C44.0876 7.25802 44.1757 7.41479 44.3019 7.5378L48.1662 11.3049L46.7996 17.2229C46.7581 17.402 46.7714 17.5895 46.8377 17.761C46.9041 17.9324 47.0205 18.08 47.1718 18.1845C47.3231 18.2891 47.5023 18.3457 47.6861 18.3471C47.87 18.3485 48.0501 18.2946 48.2029 18.1924L53.1973 14.8628L58.1916 18.1924C58.3478 18.2961 58.5321 18.3495 58.7196 18.3454C58.9071 18.3413 59.0888 18.2799 59.2404 18.1694C59.3919 18.0589 59.506 17.9047 59.5672 17.7274C59.6285 17.5502 59.634 17.3584 59.5831 17.1779L57.9054 11.3076L62.066 7.56348C62.3384 7.31766 62.4384 6.93426 62.321 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M84.3371 6.58663C84.2795 6.41682 84.1733 6.26761 84.0319 6.15742C83.8904 6.04723 83.7197 5.98089 83.541 5.96658L78.3118 5.55107L76.049 0.542056C75.9769 0.380725 75.8597 0.243699 75.7115 0.147514C75.5633 0.0513295 75.3904 9.71158e-05 75.2137 1.37932e-07C75.037 -9.684e-05 74.864 0.0509458 74.7157 0.146968C74.5674 0.24299 74.45 0.379887 74.3778 0.541138L72.115 5.55107L66.8858 5.96658C66.7101 5.9805 66.5422 6.04474 66.402 6.15161C66.2619 6.25849 66.1555 6.40348 66.0956 6.56923C66.0357 6.73498 66.0248 6.91448 66.0643 7.08625C66.1037 7.25802 66.1918 7.41479 66.318 7.5378L70.1824 11.3049L68.8157 17.2229C68.7742 17.402 68.7875 17.5895 68.8538 17.761C68.9202 17.9324 69.0366 18.08 69.1879 18.1845C69.3392 18.2891 69.5184 18.3457 69.7023 18.3471C69.8861 18.3485 70.0662 18.2946 70.219 18.1924L75.2134 14.8628L80.2077 18.1924C80.364 18.2961 80.5482 18.3495 80.7357 18.3454C80.9232 18.3413 81.1049 18.2799 81.2565 18.1694C81.408 18.0589 81.5221 17.9047 81.5834 17.7274C81.6446 17.5502 81.6501 17.3584 81.5992 17.1779L79.9215 11.3076L84.0821 7.56348C84.3545 7.31766 84.4545 6.93426 84.3371 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M92.1977 11.3049L90.831 17.2229C90.7887 17.4021 90.8014 17.5899 90.8674 17.7618C90.9335 17.9336 91.0499 18.0816 91.2013 18.1863C91.3528 18.291 91.5323 18.3476 91.7164 18.3487C91.9006 18.3498 92.0808 18.2953 92.2334 18.1924L97.2278 14.8629L102.222 18.1924C102.378 18.2962 102.563 18.3496 102.75 18.3454C102.938 18.3413 103.119 18.2799 103.271 18.1694C103.422 18.0589 103.536 17.9047 103.598 17.7274C103.659 17.5502 103.665 17.3584 103.614 17.178L101.936 11.3077L106.097 7.56351C106.23 7.44353 106.325 7.28712 106.37 7.11362C106.416 6.94012 106.409 6.75715 106.351 6.58734C106.294 6.41752 106.188 6.26831 106.046 6.15815C105.905 6.04799 105.734 5.98172 105.555 5.96752L100.326 5.5511L98.0634 0.542085C97.9912 0.380794 97.8739 0.243833 97.7257 0.147729C97.5774 0.0516259 97.4045 0.000488281 97.2278 0.000488281C97.0511 0.000488281 96.8782 0.0516259 96.7299 0.147729C96.5816 0.243833 96.4643 0.380794 96.3922 0.542085L94.1294 5.5511L88.9002 5.96661C88.7245 5.98053 88.5566 6.04477 88.4164 6.15164C88.2763 6.25852 88.1699 6.40351 88.11 6.56926C88.0501 6.73501 88.0392 6.91451 88.0787 7.08628C88.1181 7.25805 88.2062 7.41482 88.3324 7.53783L92.1977 11.3049ZM94.8145 7.33696C94.9783 7.32406 95.1355 7.26735 95.2698 7.17278C95.404 7.07821 95.5104 6.94927 95.5777 6.79946L97.2278 3.14795L98.8779 6.79946C98.9452 6.94927 99.0515 7.07821 99.1858 7.17278C99.3201 7.26735 99.4773 7.32406 99.641 7.33696L103.284 7.62588L100.284 10.3262C100.024 10.561 99.9199 10.9224 100.015 11.26L101.165 15.282L97.7378 12.9972C97.5874 12.8963 97.4103 12.8423 97.2292 12.8423C97.048 12.8423 96.871 12.8963 96.7206 12.9972L93.1397 15.3848L94.1028 11.215C94.1381 11.0617 94.1333 10.9018 94.089 10.7508C94.0447 10.5998 93.9622 10.4627 93.8496 10.3528L91.0631 7.63597L94.8145 7.33696Z"
                  fill="#F3CD03"
                />
              </svg>
              <p className="text-[#737373] mt-[16px] text-[18px]">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <div className="flex gap-4 items-center py-[20px]">
                <img src={El1} alt="" />
                <div className="leading-5">
                  <h4 className="text-[#02897A] font-semibold text-[16px] not-italic">
                    Wahid Ari
                  </h4>
                  <span className="text-[#252B42] font-medium	">Designer</span>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] rounded-[5px] border-slate-200	p-[34px_40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="107"
                height="19"
                viewBox="0 0 107 19"
                fill="none"
              >
                <path
                  d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M40.3103 6.58663C40.2526 6.41682 40.1465 6.26761 40.005 6.15742C39.8635 6.04723 39.6929 5.98089 39.5141 5.96658L34.2849 5.55107L32.0221 0.542056C31.9501 0.380725 31.8328 0.243699 31.6846 0.147514C31.5364 0.0513295 31.3635 9.71158e-05 31.1868 1.37932e-07C31.0101 -9.684e-05 30.8372 0.0509458 30.6889 0.146968C30.5405 0.24299 30.4232 0.379887 30.3509 0.541138L28.0881 5.55107L22.859 5.96658C22.6833 5.9805 22.5153 6.04474 22.3752 6.15161C22.235 6.25849 22.1286 6.40348 22.0688 6.56923C22.0089 6.73498 21.998 6.91448 22.0374 7.08625C22.0769 7.25802 22.165 7.41479 22.2912 7.5378L26.1555 11.3049L24.7888 17.2229C24.7473 17.402 24.7606 17.5895 24.827 17.761C24.8934 17.9324 25.0097 18.08 25.161 18.1845C25.3123 18.2891 25.4915 18.3457 25.6754 18.3471C25.8593 18.3485 26.0393 18.2946 26.1922 18.1924L31.1865 14.8628L36.1809 18.1924C36.3371 18.2961 36.5214 18.3495 36.7089 18.3454C36.8963 18.3413 37.0781 18.2799 37.2296 18.1694C37.3812 18.0589 37.4952 17.9047 37.5565 17.7274C37.6178 17.5502 37.6233 17.3584 37.5723 17.1779L35.8947 11.3076L40.0553 7.56348C40.3277 7.31766 40.4277 6.93426 40.3103 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M62.321 6.58663C62.2633 6.41682 62.1572 6.26761 62.0157 6.15742C61.8743 6.04723 61.7036 5.98089 61.5248 5.96658L56.2957 5.55107L54.0329 0.542056C53.9608 0.380725 53.8436 0.243699 53.6954 0.147514C53.5471 0.0513295 53.3743 9.71158e-05 53.1976 1.37932e-07C53.0209 -9.684e-05 52.8479 0.0509458 52.6996 0.146968C52.5513 0.24299 52.4339 0.379887 52.3617 0.541138L50.0989 5.55107L44.8697 5.96658C44.694 5.9805 44.526 6.04474 44.3859 6.15161C44.2458 6.25849 44.1394 6.40348 44.0795 6.56923C44.0196 6.73498 44.0087 6.91448 44.0482 7.08625C44.0876 7.25802 44.1757 7.41479 44.3019 7.5378L48.1662 11.3049L46.7996 17.2229C46.7581 17.402 46.7714 17.5895 46.8377 17.761C46.9041 17.9324 47.0205 18.08 47.1718 18.1845C47.3231 18.2891 47.5023 18.3457 47.6861 18.3471C47.87 18.3485 48.0501 18.2946 48.2029 18.1924L53.1973 14.8628L58.1916 18.1924C58.3478 18.2961 58.5321 18.3495 58.7196 18.3454C58.9071 18.3413 59.0888 18.2799 59.2404 18.1694C59.3919 18.0589 59.506 17.9047 59.5672 17.7274C59.6285 17.5502 59.634 17.3584 59.5831 17.1779L57.9054 11.3076L62.066 7.56348C62.3384 7.31766 62.4384 6.93426 62.321 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M84.3371 6.58663C84.2795 6.41682 84.1733 6.26761 84.0319 6.15742C83.8904 6.04723 83.7197 5.98089 83.541 5.96658L78.3118 5.55107L76.049 0.542056C75.9769 0.380725 75.8597 0.243699 75.7115 0.147514C75.5633 0.0513295 75.3904 9.71158e-05 75.2137 1.37932e-07C75.037 -9.684e-05 74.864 0.0509458 74.7157 0.146968C74.5674 0.24299 74.45 0.379887 74.3778 0.541138L72.115 5.55107L66.8858 5.96658C66.7101 5.9805 66.5422 6.04474 66.402 6.15161C66.2619 6.25849 66.1555 6.40348 66.0956 6.56923C66.0357 6.73498 66.0248 6.91448 66.0643 7.08625C66.1037 7.25802 66.1918 7.41479 66.318 7.5378L70.1824 11.3049L68.8157 17.2229C68.7742 17.402 68.7875 17.5895 68.8538 17.761C68.9202 17.9324 69.0366 18.08 69.1879 18.1845C69.3392 18.2891 69.5184 18.3457 69.7023 18.3471C69.8861 18.3485 70.0662 18.2946 70.219 18.1924L75.2134 14.8628L80.2077 18.1924C80.364 18.2961 80.5482 18.3495 80.7357 18.3454C80.9232 18.3413 81.1049 18.2799 81.2565 18.1694C81.408 18.0589 81.5221 17.9047 81.5834 17.7274C81.6446 17.5502 81.6501 17.3584 81.5992 17.1779L79.9215 11.3076L84.0821 7.56348C84.3545 7.31766 84.4545 6.93426 84.3371 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M92.1977 11.3049L90.831 17.2229C90.7887 17.4021 90.8014 17.5899 90.8674 17.7618C90.9335 17.9336 91.0499 18.0816 91.2013 18.1863C91.3528 18.291 91.5323 18.3476 91.7164 18.3487C91.9006 18.3498 92.0808 18.2953 92.2334 18.1924L97.2278 14.8629L102.222 18.1924C102.378 18.2962 102.563 18.3496 102.75 18.3454C102.938 18.3413 103.119 18.2799 103.271 18.1694C103.422 18.0589 103.536 17.9047 103.598 17.7274C103.659 17.5502 103.665 17.3584 103.614 17.178L101.936 11.3077L106.097 7.56351C106.23 7.44353 106.325 7.28712 106.37 7.11362C106.416 6.94012 106.409 6.75715 106.351 6.58734C106.294 6.41752 106.188 6.26831 106.046 6.15815C105.905 6.04799 105.734 5.98172 105.555 5.96752L100.326 5.5511L98.0634 0.542085C97.9912 0.380794 97.8739 0.243833 97.7257 0.147729C97.5774 0.0516259 97.4045 0.000488281 97.2278 0.000488281C97.0511 0.000488281 96.8782 0.0516259 96.7299 0.147729C96.5816 0.243833 96.4643 0.380794 96.3922 0.542085L94.1294 5.5511L88.9002 5.96661C88.7245 5.98053 88.5566 6.04477 88.4164 6.15164C88.2763 6.25852 88.1699 6.40351 88.11 6.56926C88.0501 6.73501 88.0392 6.91451 88.0787 7.08628C88.1181 7.25805 88.2062 7.41482 88.3324 7.53783L92.1977 11.3049ZM94.8145 7.33696C94.9783 7.32406 95.1355 7.26735 95.2698 7.17278C95.404 7.07821 95.5104 6.94927 95.5777 6.79946L97.2278 3.14795L98.8779 6.79946C98.9452 6.94927 99.0515 7.07821 99.1858 7.17278C99.3201 7.26735 99.4773 7.32406 99.641 7.33696L103.284 7.62588L100.284 10.3262C100.024 10.561 99.9199 10.9224 100.015 11.26L101.165 15.282L97.7378 12.9972C97.5874 12.8963 97.4103 12.8423 97.2292 12.8423C97.048 12.8423 96.871 12.8963 96.7206 12.9972L93.1397 15.3848L94.1028 11.215C94.1381 11.0617 94.1333 10.9018 94.089 10.7508C94.0447 10.5998 93.9622 10.4627 93.8496 10.3528L91.0631 7.63597L94.8145 7.33696Z"
                  fill="#F3CD03"
                />
              </svg>
              <p className="text-[#737373] mt-[16px] text-[18px]">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <div className="flex gap-4 items-center py-[20px]">
                <img src={El2} alt="" />
                <div className="leading-5">
                  <h4 className="text-[#02897A] font-semibold text-[16px] not-italic">
                    Wahid Ari
                  </h4>
                  <span className="text-[#252B42] font-medium	">Designer</span>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] rounded-[5px] border-slate-200	p-[34px_40px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="107"
                height="19"
                viewBox="0 0 107 19"
                fill="none"
              >
                <path
                  d="M18.2961 6.58663C18.2384 6.41682 18.1323 6.26761 17.9908 6.15742C17.8493 6.04723 17.6787 5.98089 17.4999 5.96658L12.2708 5.55107L10.008 0.542056C9.9359 0.380725 9.81869 0.243699 9.67047 0.147514C9.52225 0.0513295 9.34936 9.71158e-05 9.17266 1.37932e-07C8.99597 -9.684e-05 8.82302 0.0509458 8.6747 0.146968C8.52637 0.24299 8.40901 0.379887 8.33677 0.541138L6.07395 5.55107L0.844797 5.96658C0.669105 5.9805 0.501144 6.04474 0.361006 6.15161C0.220868 6.25849 0.114488 6.40348 0.0545932 6.56923C-0.00530196 6.73498 -0.0161763 6.91448 0.0232713 7.08625C0.062719 7.25802 0.150818 7.41479 0.277029 7.5378L4.14134 11.3049L2.77466 17.2229C2.73316 17.402 2.74646 17.5895 2.81283 17.761C2.8792 17.9324 2.99559 18.08 3.14687 18.1845C3.29816 18.2891 3.47737 18.3457 3.66124 18.3471C3.84511 18.3485 4.02516 18.2946 4.17803 18.1924L9.17237 14.8628L14.1667 18.1924C14.3229 18.2961 14.5072 18.3495 14.6947 18.3454C14.8822 18.3413 15.0639 18.2799 15.2155 18.1694C15.367 18.0589 15.4811 17.9047 15.5423 17.7274C15.6036 17.5502 15.6091 17.3584 15.5581 17.1779L13.8805 11.3076L18.0411 7.56348C18.3135 7.31766 18.4135 6.93426 18.2961 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M40.3103 6.58663C40.2526 6.41682 40.1465 6.26761 40.005 6.15742C39.8635 6.04723 39.6929 5.98089 39.5141 5.96658L34.2849 5.55107L32.0221 0.542056C31.9501 0.380725 31.8328 0.243699 31.6846 0.147514C31.5364 0.0513295 31.3635 9.71158e-05 31.1868 1.37932e-07C31.0101 -9.684e-05 30.8372 0.0509458 30.6889 0.146968C30.5405 0.24299 30.4232 0.379887 30.3509 0.541138L28.0881 5.55107L22.859 5.96658C22.6833 5.9805 22.5153 6.04474 22.3752 6.15161C22.235 6.25849 22.1286 6.40348 22.0688 6.56923C22.0089 6.73498 21.998 6.91448 22.0374 7.08625C22.0769 7.25802 22.165 7.41479 22.2912 7.5378L26.1555 11.3049L24.7888 17.2229C24.7473 17.402 24.7606 17.5895 24.827 17.761C24.8934 17.9324 25.0097 18.08 25.161 18.1845C25.3123 18.2891 25.4915 18.3457 25.6754 18.3471C25.8593 18.3485 26.0393 18.2946 26.1922 18.1924L31.1865 14.8628L36.1809 18.1924C36.3371 18.2961 36.5214 18.3495 36.7089 18.3454C36.8963 18.3413 37.0781 18.2799 37.2296 18.1694C37.3812 18.0589 37.4952 17.9047 37.5565 17.7274C37.6178 17.5502 37.6233 17.3584 37.5723 17.1779L35.8947 11.3076L40.0553 7.56348C40.3277 7.31766 40.4277 6.93426 40.3103 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M62.321 6.58663C62.2633 6.41682 62.1572 6.26761 62.0157 6.15742C61.8743 6.04723 61.7036 5.98089 61.5248 5.96658L56.2957 5.55107L54.0329 0.542056C53.9608 0.380725 53.8436 0.243699 53.6954 0.147514C53.5471 0.0513295 53.3743 9.71158e-05 53.1976 1.37932e-07C53.0209 -9.684e-05 52.8479 0.0509458 52.6996 0.146968C52.5513 0.24299 52.4339 0.379887 52.3617 0.541138L50.0989 5.55107L44.8697 5.96658C44.694 5.9805 44.526 6.04474 44.3859 6.15161C44.2458 6.25849 44.1394 6.40348 44.0795 6.56923C44.0196 6.73498 44.0087 6.91448 44.0482 7.08625C44.0876 7.25802 44.1757 7.41479 44.3019 7.5378L48.1662 11.3049L46.7996 17.2229C46.7581 17.402 46.7714 17.5895 46.8377 17.761C46.9041 17.9324 47.0205 18.08 47.1718 18.1845C47.3231 18.2891 47.5023 18.3457 47.6861 18.3471C47.87 18.3485 48.0501 18.2946 48.2029 18.1924L53.1973 14.8628L58.1916 18.1924C58.3478 18.2961 58.5321 18.3495 58.7196 18.3454C58.9071 18.3413 59.0888 18.2799 59.2404 18.1694C59.3919 18.0589 59.506 17.9047 59.5672 17.7274C59.6285 17.5502 59.634 17.3584 59.5831 17.1779L57.9054 11.3076L62.066 7.56348C62.3384 7.31766 62.4384 6.93426 62.321 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M84.3371 6.58663C84.2795 6.41682 84.1733 6.26761 84.0319 6.15742C83.8904 6.04723 83.7197 5.98089 83.541 5.96658L78.3118 5.55107L76.049 0.542056C75.9769 0.380725 75.8597 0.243699 75.7115 0.147514C75.5633 0.0513295 75.3904 9.71158e-05 75.2137 1.37932e-07C75.037 -9.684e-05 74.864 0.0509458 74.7157 0.146968C74.5674 0.24299 74.45 0.379887 74.3778 0.541138L72.115 5.55107L66.8858 5.96658C66.7101 5.9805 66.5422 6.04474 66.402 6.15161C66.2619 6.25849 66.1555 6.40348 66.0956 6.56923C66.0357 6.73498 66.0248 6.91448 66.0643 7.08625C66.1037 7.25802 66.1918 7.41479 66.318 7.5378L70.1824 11.3049L68.8157 17.2229C68.7742 17.402 68.7875 17.5895 68.8538 17.761C68.9202 17.9324 69.0366 18.08 69.1879 18.1845C69.3392 18.2891 69.5184 18.3457 69.7023 18.3471C69.8861 18.3485 70.0662 18.2946 70.219 18.1924L75.2134 14.8628L80.2077 18.1924C80.364 18.2961 80.5482 18.3495 80.7357 18.3454C80.9232 18.3413 81.1049 18.2799 81.2565 18.1694C81.408 18.0589 81.5221 17.9047 81.5834 17.7274C81.6446 17.5502 81.6501 17.3584 81.5992 17.1779L79.9215 11.3076L84.0821 7.56348C84.3545 7.31766 84.4545 6.93426 84.3371 6.58663Z"
                  fill="#F3CD03"
                />
                <path
                  d="M92.1977 11.3049L90.831 17.2229C90.7887 17.4021 90.8014 17.5899 90.8674 17.7618C90.9335 17.9336 91.0499 18.0816 91.2013 18.1863C91.3528 18.291 91.5323 18.3476 91.7164 18.3487C91.9006 18.3498 92.0808 18.2953 92.2334 18.1924L97.2278 14.8629L102.222 18.1924C102.378 18.2962 102.563 18.3496 102.75 18.3454C102.938 18.3413 103.119 18.2799 103.271 18.1694C103.422 18.0589 103.536 17.9047 103.598 17.7274C103.659 17.5502 103.665 17.3584 103.614 17.178L101.936 11.3077L106.097 7.56351C106.23 7.44353 106.325 7.28712 106.37 7.11362C106.416 6.94012 106.409 6.75715 106.351 6.58734C106.294 6.41752 106.188 6.26831 106.046 6.15815C105.905 6.04799 105.734 5.98172 105.555 5.96752L100.326 5.5511L98.0634 0.542085C97.9912 0.380794 97.8739 0.243833 97.7257 0.147729C97.5774 0.0516259 97.4045 0.000488281 97.2278 0.000488281C97.0511 0.000488281 96.8782 0.0516259 96.7299 0.147729C96.5816 0.243833 96.4643 0.380794 96.3922 0.542085L94.1294 5.5511L88.9002 5.96661C88.7245 5.98053 88.5566 6.04477 88.4164 6.15164C88.2763 6.25852 88.1699 6.40351 88.11 6.56926C88.0501 6.73501 88.0392 6.91451 88.0787 7.08628C88.1181 7.25805 88.2062 7.41482 88.3324 7.53783L92.1977 11.3049ZM94.8145 7.33696C94.9783 7.32406 95.1355 7.26735 95.2698 7.17278C95.404 7.07821 95.5104 6.94927 95.5777 6.79946L97.2278 3.14795L98.8779 6.79946C98.9452 6.94927 99.0515 7.07821 99.1858 7.17278C99.3201 7.26735 99.4773 7.32406 99.641 7.33696L103.284 7.62588L100.284 10.3262C100.024 10.561 99.9199 10.9224 100.015 11.26L101.165 15.282L97.7378 12.9972C97.5874 12.8963 97.4103 12.8423 97.2292 12.8423C97.048 12.8423 96.871 12.8963 96.7206 12.9972L93.1397 15.3848L94.1028 11.215C94.1381 11.0617 94.1333 10.9018 94.089 10.7508C94.0447 10.5998 93.9622 10.4627 93.8496 10.3528L91.0631 7.63597L94.8145 7.33696Z"
                  fill="#F3CD03"
                />
              </svg>
              <p className="text-[#737373] mt-[16px] text-[18px]">
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <div className="flex gap-4 items-center py-[20px]">
                <img src={El3} alt="" />
                <div className="leading-5">
                  <h4 className="text-[#02897A] font-semibold text-[16px] not-italic">
                    Wahid Ari
                  </h4>
                  <span className="text-[#252B42] font-medium	">Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#1F2E35] text-[#FFF] py-[40px] dark:bg-[#FFFFFF] ">
        <div className="container max-w-[1000px] mx-auto py-[10px] sm:px-[20px]">
          <div className="bg-[#02897A]  rounded-[32px] sm:flex sm:flex-col md:flex md:flex-row items-center p-[0px_42px]">
            <div className="md:w-[53%] sm:w-full">
              <h2 className="text-[32px] font-semibold sm:mt-[20px] md:mt-auto">
                Join 100 Compannies who boost their business with Product
              </h2>
              <button className="bg-[#FFF] text-[#02897A] font-semibold  p-[6px_20px] rounded-[8px] mt-[60px] ">
                Get This
              </button>
            </div>
            <div className="sm:mt-[50px] md:mt-auto">
              <img src={sc} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
