import {
  Stack,
  Container,
  Title,
  Text,
} from '@mantine/core';
import { motion } from 'framer-motion';
import * as Questions from '../components/Questions';

const Survey = props => {
  const pageList = [
    <Questions.Q1  transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q2  transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q3  transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q4  transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q5  transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q6  transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q7  transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q8  transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q9  transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q10 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />,
    <Questions.Q11 transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  ];

  return (
    <Stack align="center">
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
            {props.language === 'vi-vn' ? 'Giờ khảo sát!' : 'Survey time!'}
          </Title>
          <Text size={14} align="center">
            {props.language === 'vi-vn' ? 'Phong cách học của bạn là gì? Hãy trả lời 11 câu hỏi sau đây' : 'What\'s your learning style? Answer these 11 questions!'}
          </Text>
        </Container>
      </motion.div>
      {pageList[props.surveyPage]}
    </Stack>
  );
};

export default Survey;