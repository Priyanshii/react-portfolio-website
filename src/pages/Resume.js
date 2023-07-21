import React from 'react'
import styled from 'styled-components'
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../assets/doc/Resume.pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {

  return (
    <>
      <ResumeContainer>
        <FileContainer>
          <DocumentRender file={pdf}>
            <Page pageNumber={1}  />
          </DocumentRender>
        </FileContainer>
        <DownloadButton href={pdf} download="Priyanshi_Maheshwari_Resume.pdf">
          Download Resume
        </DownloadButton>
      </ResumeContainer>
    </>
  )
}

const ResumeContainer = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FileContainer = styled.div`
`

const DocumentRender = styled(Document)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3rem;
`

const DownloadButton = styled.a`
  background-color: transparent;
  margin-top: 40px;
  border:  2px solid rgb(28, 54, 54);
  cursor: pointer;
  padding: 15px 30px;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: rgb(28, 54, 54);
  
  &:hover{
    background-color: rgb(28, 54, 54);
    color: white;
  }
`
export default Resume;
