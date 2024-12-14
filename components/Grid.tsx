import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="About">
      <BentoGrid>
        {gridItems.map(
          ({
            title,
            className,
            description,
            id,
            img,
            imgClassName,
            spareImg,
            titleClassName,
          }) => (
            <BentoGridItem
              key={id}
              title={title}
              description={description}
              className={className}
              id={id}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
              titleClassName={titleClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
