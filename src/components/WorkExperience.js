import React from 'react'
import styled from 'styled-components'
import { MdBusinessCenter } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const workIcon = {
  icon: <MdBusinessCenter />,
  iconStyle: { background: 'rgb(42, 151, 139)', color: '#fff'},
};

const starIcon = {
  icon: <AiFillStar />,
  iconStyle: { background: '#bb3459', color: '#fff'},
};

const timeline = [
  {
    icon: workIcon,
    date: 'Jan 2019 - Oct 2019',
    title: 'Software Developer',
    subtitle: 'Thumbmunkeys Ltd.,Gurugram',
    desc: ["C#", "Xamarin.iOS", ".NET"],
  },
  {
    icon: workIcon,
    date: 'Sep 2022 - Present',
    title: 'Front End Developer',
    subtitle: 'Deeporion Technology, Jaipur',
    desc: ['JavaScript', 'React.Js', 'Redux', 'TypeScript', 'Responsive User Interfaces', 'Rest Api', 'Figma Designs'],
  },
  { icon: starIcon },
];

const WorkExperience = () => {

  return (
    <>
      <WorkExperienceContainer>
        <Heading>
          Experiences
        </Heading>
        <MainContainer>
          <VerticalTimeline lineColor='rgb(42, 151, 139)' layout='2-columns'>
            {
            timeline.map((t, i) => {
              const contentStyle = i !== timeline.length-1 ? { border: '2px solid rgb(42, 151, 139)', color: 'rgb(28, 54, 54)' } : undefined;
              const arrowStyle = i!== timeline.length-1 ? { borderRight: '7px solid rgb(42, 151, 139)' } : undefined;

              return (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={contentStyle}
                  contentArrowStyle={arrowStyle}
                  // date={t.date}
                  {...t.icon}
                >
                  {t.title ? (
                    <React.Fragment>
                      <Title className="vertical-timeline-element-title">{t.title}</Title>
                      {t.subtitle && (
                        <Subtitle>
                          {t.subtitle}
                        </Subtitle>
                      )}
                      {
                      t.desc
                      && 
                      <Tags>
                      {
                      t.desc.map((item, index) => {
                        return(
                          <div key={index}>{item}</div>
                          )
                        })
                      }
                      </Tags>
                      }
                      {t.date && <Date>{t.date}</Date>}
                    </React.Fragment>
                  ) : undefined}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </MainContainer>
      </WorkExperienceContainer>
    </>
  )
}

const WorkExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  `

const Heading = styled.span`
  font-size: 2.6rem;
  letter-spacing: 0.8px;
  font-weight: 500;
  color: rgb(42, 151, 139);
  `

const MainContainer = styled.article`
  width: 100%;
  padding: 2rem;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 6px;
`

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 12px;

  div{
    font-size: 12px;
    font-weight: 500;
    padding: 8px;
    border: 1px solid rgb(28, 54, 54);
    border-radius: 16px;
  }
`
const Date = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
`
export default WorkExperience