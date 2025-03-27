import styled, { keyframes } from "styled-components";


export const SidebarContainer = styled.aside<{ $isOpened: boolean }>`
  background: rgb(237, 235, 235);
  width: ${({ $isOpened }) => ($isOpened ? '20vw' : '5vw')}; // ✅ dynamic width
  height: 100vh;
  font-family: Montserrat;
  color: rgb(49, 47, 47);
  font-size: 1.5rem;
  font-weight: 700;
  transition: width 0.3s ease; // ✅ smooth animation
`;


export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #000133;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const PageContainer = styled.div`
  padding: 20px;
  width: 80vw;
`;
