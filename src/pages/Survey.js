import {
  Stack,
  Container,
  Title,
  Text,
  ScrollArea,
} from '@mantine/core';
import { motion } from 'framer-motion';
import * as Questions from '../components/Questions';

const Survey = props => {
  const pageList = [
    <Questions.Q1 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q2 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q3 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q4 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q5 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q6 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q7 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q8 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q9 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q10 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q11 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  ];

  return (
    <Stack style={{ height: '100vh' }} align="center">
      <ScrollArea type="scroll">
        <Container my={90}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: props.transitionDuration }}
          >
            <Container mt={70}>
              <Title
                align="center"
                order={1}
                sx={theme => ({
                  fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                  fontWeight: 1000
                })}
              >
                {props.language === 'vi-vn' ? 'Gi??? kh???o s??t!' : 'Survey time!'}
              </Title>
              <Text size={14} align="center">
                {props.language === 'vi-vn' ? 'Phong c??ch h???c c???a b???n l?? g??? H??y tr??? l???i 11 c??u h???i sau ????y' : 'What\'s your learning style? Answer these 11 questions!'}
              </Text>
            </Container>
          </motion.div>
          {pageList[props.surveyPage]}
        </Container>
      </ScrollArea>
    </Stack>
  );
};

export default Survey;