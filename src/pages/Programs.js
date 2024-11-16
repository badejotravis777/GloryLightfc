import React from 'react';
import styled from 'styled-components';

const ProgramsContainer = styled.div`
  padding: 20px;
`;

const ProgramSection = styled.section`
  margin: 20px 0;
`;

const Programs = () => {
  return (
    <ProgramsContainer>
      <h2>Our Training Programs</h2>
      <ProgramSection>
        <h3>Beginner Level</h3>
        <p>
          Ideal for young athletes starting their journey, focusing on foundational skills like footwork and
          endurance.
        </p>
      </ProgramSection>
      <ProgramSection>
        <h3>Intermediate Level</h3>
        <p>
          Aimed at players with basic skills, this level focuses on strategy, teamwork, and refining techniques.
        </p>
      </ProgramSection>
      <ProgramSection>
        <h3>Advanced Level</h3>
        <p>
          For seasoned players, the advanced level covers high-level tactics, endurance, and leadership skills.
        </p>
      </ProgramSection>
    </ProgramsContainer>
  );
};

export default Programs;
