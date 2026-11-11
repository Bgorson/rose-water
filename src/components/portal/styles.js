import styled from 'styled-components';
import { colors, shadows } from '../../utils/colors';

export const Page = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 7rem 1rem 4rem;
  font-family: 'DM Sans', sans-serif;
  color: ${colors.charcoal};
`;

export const Card = styled.section`
  background: ${colors.warmWhite};
  border: 1px solid ${colors.sand};
  border-radius: 16px;
  box-shadow: ${shadows.card};
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 0.25rem;
`;

export const Hint = styled.p`
  color: ${colors.muted};
  font-size: 0.875rem;
  margin: 0 0 1rem;
`;

export const Input = styled.input`
  padding: 0.6rem 0.8rem;
  border: 2px solid ${colors.sand};
  border-radius: 10px;
  font-size: 0.95rem;
  background: ${colors.warmWhite};
  color: ${colors.charcoal};
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${colors.sage};
  }
`;

export const Button = styled.button`
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: 10px;
  background: ${(p) => (p.$secondary ? colors.sand : colors.sageDark)};
  color: ${(p) => (p.$secondary ? colors.charcoal : 'white')};
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const ErrorText = styled.p`
  color: #b3261e;
  font-size: 0.9rem;
`;

export const TableWrap = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  th,
  td {
    padding: 0.6rem 0.75rem;
    text-align: right;
    border-bottom: 1px solid ${colors.sand};
    white-space: nowrap;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }

  th {
    color: ${colors.slate};
    font-weight: 500;
  }

  tfoot td {
    font-weight: 600;
    border-bottom: none;
  }
`;
