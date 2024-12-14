"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundAnimate";
import Lottie from "react-lottie";
import animationData from "@/data/confettie.json";
import { useState } from "react";
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";

const LottieNoSSR = dynamic(() => import("react-lottie"), {
  ssr: false,
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto mb-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img: string;
  imgClassName: string;
  spareImg: string;
  titleClassName: string;
}) => {
  const [copy, setCopy] = useState(false);
  const handlecopy = () => {
    navigator.clipboard.writeText("Yeshuyeshwanth2005@gmail.com");
    setCopy(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center h-full"}`}>
        <div className="w-full h-full absolute">
          {img && (
            <>
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover", "object-center")}
              />
            </>
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight  text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 3 && (
            <>
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 lg:gap-8 lg:gap-y-6">
                  {["React JS", "Next JS", "TypeScript"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 px-3 text-xs sm:text-base opacity-50 sm:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="py-4 px-4 rounded-lg text-center bg-[#10132e]" />
                </div>
                <div className="flex flex-col gap-3 lg:gap-8 lg:gap-y-6">
                  <span className="py-4 px-4 rounded-lg text-center bg-[#10132e]" />
                  {["AWS", "MongoDB", "Cloudinary"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 px-3 text-xs sm:text-base opacity-50 sm:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {id === 6 && (
            <>
              <div className="mt-5 relative">
                <div
                  className={`absolute -bottom-5 right-0 ${
                    copy ? "block" : "block"
                  }`}
                >
                  <LottieNoSSR
                    options={{
                      loop: copy,
                      autoplay: copy,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    height={200}
                    width={400}
                  />
                </div>
              </div>
              <Button
                title={copy ? "Email copied" : "Copy my Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handlecopy}
                otherClasses="!bg-[#161A31] gap-3 z-50"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
