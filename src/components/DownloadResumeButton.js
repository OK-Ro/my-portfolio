import React from "react";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa";

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;
  &:hover {
    background-color: ${(props) => props.theme.buttonHoverBackground};
  }
  svg {
    margin-right: 10px;
  }
`;

function DownloadResumeButton({ pdfUrl }) {
  return (
    <DownloadButton href={pdfUrl} download>
      <FaDownload /> Download Resume PDF
    </DownloadButton>
  );
}

export default DownloadResumeButton;
