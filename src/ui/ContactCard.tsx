import Link from "next/link";
import React from "react";
import Button from "@/ui/common/Button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const contactInfo = [
  {
    title: "Email",
    values: [
      {
        value: "abhishek3009.lodha@gmail.com",
        href: "mailto:abhishek3009.lodha@gmail.com",
      },
      {
        value: "abhishekjain.designer@gmail.com",
        href: "mailto:abhishekjain.designer@gmail.com",
      },
    ],
  },
  {
    title: "Phone",
    values: [
      { value: "+91 7976522662", href: "tel:+917976522662" },
      { value: "+91 7357422662", href: "tel:+917357422662" },
    ],
  },
  {
    title: "Address",
    values: [{ value: "Udaipur, Rajasthan, India", href: "#" }],
  },
];

const ContactCard = () => {
  return (
    <ShimmerButton
      className="shadow-2xl max-w-80 sm:max-w-2xl m-auto cursor-default"
      borderRadius="10px"
      background="radial-gradient(97.27% 224.15% at 47.97% 100%, rgba(33, 150, 243, 0.20), rgba(0, 0, 0, 0.00)), radial-gradient(42.95% 98.98% at 47.97% 100%, rgba(33, 150, 243, 0.50), rgba(0, 0, 0, 0.00)), #12191B"
    >
      <div className="flex flex-col items-start m-auto text-start mt-[1.6rem]  transition-all rounded-md  text-white  hover:scale-105">
        <h4 className="font-semibold text-lg">Let's Discuss Your Project</h4>
        <p className=" text-wrap font-medium text-base text-[#f6f7f8]">
          I help businesses achieve their creative goals through innovative
          design solutions and proven techniques.
        </p>

        <div>
          {contactInfo.map((contact, index) => {
            return (
              <div key={index} className="my-4 flex gap-5 items-center">
                {contact.title === "Email" ? (
                  <HiOutlineMail className="text-2xl text-[#42A5F5]" />
                ) : contact.title === "Phone" ? (
                  <HiOutlinePhone className="text-2xl text-[#42A5F5]" />
                ) : (
                  <GrLocation className="text-2xl text-[#42A5F5]" />
                )}
                <div className="flex flex-col">
                  <h5 className="text-sm font-medium">{contact.title}</h5>

                  {contact.values.map((value, index) => {
                    return (
                      <a
                        href={value.href}
                        key={index}
                        className="text-sm text-wrap"
                      >
                        {value.value}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ShimmerButton>
  );
};

export default ContactCard;
