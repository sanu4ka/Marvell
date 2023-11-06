import React from "react";
import { DetailsWrapper } from "./details.styles";
import Markee from "../markee/markee.component";
import { BackButton } from "../styled-link/styled-link.component";

const Details = ({ selected }) => {
  return (
    <DetailsWrapper>
      <h1>{selected.name}</h1>
      <section id='info-container'>
        <span className='self-center'>
          <img
            className='rounded-md my-8'
            style={{ height: 200, width: 200 }}
            src={`${selected.thumbnail.path}.${selected.thumbnail.extension}`}
            alt='thumbnail'
          />
        </span>
      </section>

      <section className='max-w-[60vw]'>
        <p>{selected.description}</p>
      </section>
      <Markee name={selected.name} />

      <BackButton to='back'>Back</BackButton>
    </DetailsWrapper>
  );
};

export default Details;
