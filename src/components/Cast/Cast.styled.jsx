import styled from 'styled-components';

export const CastContainer = styled.ul`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  list-style: none;
`;

export const CastItem = styled.li`
  margin-bottom: 16px;
`;

export const CastPoster = styled.img`
  box-shadow: 0px 3px 4px 1px rgba(44, 133, 200, 0.2);
  max-width: 200px;
  height: 300px;
  margin-bottom: 6px;
`;

export const CastName = styled.p`
  font-weight: 500;
  text-align: center;
  max-width: 200px;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  font-size: 16px;
  font-weight: 700;
`;
