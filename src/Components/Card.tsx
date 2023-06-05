import React from "react"; // we need this to make JSX compile

type CardProps = {
  title: string;
  paragraph: string;
};

export const Card = ({ title, paragraph }: CardProps) => (
  <aside>
    <h2 role="heading" data-id-cy="heading">
      {title}
    </h2>
    <p role="paragraph" data-id-cy="paragraph">
      {paragraph}
    </p>
  </aside>
);
