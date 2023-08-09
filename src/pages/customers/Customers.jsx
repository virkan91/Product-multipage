import React from "react";

import amico5 from "../../assets/amico5.png";
import F1 from "../../assets/F1.png";
import F2 from "../../assets/F2.png";
import F3 from "../../assets/F3.png";
import plus from "../../assets/plus.png";
import sc from "../../assets/sc.png";


const Customers = () => {
  return (
    <div>
      <section className=" bg-[#1F2E35] text-[#FFF] py-[110px] dark:bg-[#FFFFFF] dark:text-[#22343D] ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold">PRICING</h2>
            <h1 className="text-[32px] font-bold mt-[20px]">
              Let’s get some real work done here.
            </h1>
            <p className="font-medium	mt-[10px]">
              Prodict is your perfect solution for working. Get started now for
              free
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-[60px] sm:grid-cols-1 py-[40px]">
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
      <section className=" bg-[#22343D] text-[#FFF] py-[30px] dark:bg-[#F6F6F600] dark:text-[#22343D] ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="text-center">
            <h2 className="text-[24px] font-semibold">ENTERPRISE</h2>
            <h1 className="text-[32px] font-bold mt-[10px]">
              Are you interested in a custom-tailored plan?{" "}
            </h1>
            <p className="font-medium	mt-[10px]">
              Product is a set of advanced features for really large teams with
              projects.
            </p>
            <button className="bg-[#02897A] p-[6px_30px] rounded-[8px] mt-[30px]">
              Get in touch with us
            </button>
          </div>
        </div>
      </section>

      <section className=" bg-[#1F2E35] text-[#FFF] py-[110px] dark:bg-[#FFFFFF] dark:text-[#22343D]  ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="text-center">
            <h1 className="text-[32px] font-bold not-italic">
              Product is being used with great effects alongside:
            </h1>
          </div>
          <div className="flex items-center md:justify-between flex-wrap sm:justify-center py-[60px]">
            <div>
              <img src={amico5} alt="" />
            </div>
            <div className="w-[42%]">
              <div className="flex items-center gap-4 mt-[20px]">
                <img src={F1} alt="" />
                <h2 className="text-[24px] font-semibold">Enterpreneur</h2>
              </div>
              <p className="mt-[16px]">
                Product is a great way to help medium and samall enterprise
                owners achieve their goals
              </p>
              <div>
                <div className="flex items-center gap-4 mt-[30px]">
                  <img src={F2} alt="" />
                  <h2 className="text-[24px] font-semibold">Accountants</h2>
                </div>
                <p className="mt-[16px]">
                  Whether you are working on contract with clients, or on other
                  key accounting documents, Product is for you
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 mt-[30px]">
                  <img src={F3} alt="" />
                  <h2 className="text-[24px] font-semibold">Universities</h2>
                </div>
                <p className="mt-[16px]">
                  Organize university projects and have documents easily graded
                  online with Product
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-[#1F2E35] text-[#FFF]  dark:bg-[#FFFFFF] dark:text-[#22343D] ">
        <div className="container max-w-[1100px] mx-auto py-[10px] sm:px-[20px]">
          <div className="text-center leading-[50px]">
            <h1 className="text-[32px] font-bold not-italic">
              Frequently asked question{" "}
            </h1>
            <p className="text-[18px]">
              Something is not clear? You need help? Check our FAQ section
            </p>
          </div>
          <div className="flex gap-4 border-b-[1px] border-[#474747] pb-[20px] mt-[45px]">
            <img src={plus} alt="" />
            <h4 className="text-[17px] font-medium	not-italic">
              What are my payment option?
            </h4>
          </div>
          <div>
            <div className="flex gap-4  mt-[20px]">
              <img src={plus} alt="" />
              <h4 className="text-[17px] font-medium	not-italic">
                How can I invite collaborator to platform?
              </h4>
            </div>
            <p className="border-b-[1px] border-[#474747] pb-[20px] mt-[10px]">
              After creating your account you will have an oppurtunity to create
              your first project that will be associated withthe collaborators
              e-mail. An invitation will be sent automatically. Then, invited
              user will have to confirm his account by e-mail and finish userd
              onboarding.
            </p>
          </div>
          <div className="flex gap-4 border-b-[1px] border-[#474747] pb-[20px] mt-[10px]">
            <img src={plus} alt="" />
            <h4 className="text-[17px] font-medium	not-italic text-[#22343D]">
              Can I upgrade my plan?
            </h4>
          </div>
          <div className="flex gap-4 border-b-[1px] border-[#474747] pb-[20px] mt-[10px]">
            <img src={plus} alt="" />
            <h4 className="text-[17px] font-medium	not-italic">
              Can I cancel my plan at anytime?
            </h4>
          </div>
        </div>
      </section>

      <section className=" bg-[#1F2E35] text-[#FFF] py-[40px] dark:bg-[#FFFFFF] dark:text-[#22343D] ">
        <div className="container max-w-[1000px] mx-auto py-[10px] sm:px-[20px]">
          <div className="bg-[#02897A]  rounded-[32px] sm:flex sm:flex-col md:flex md:flex-row items-center p-[0px_42px]">
            <div className="md:w-[53%] sm:w-full">
              <h2 className="text-[32px] font-semibold sm:mt-[20px] md:mt-auto dark:text-[#FFFFFF]">
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

export default Customers;
