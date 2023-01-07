import {
  Select,
  Paper,
  Stack,
  Button
} from "@mantine/core";
import { motion } from "framer-motion";
import Expire from './Expire';
import Delay from './Delay';

const Questions = props => {
  const questionList = [
    <Select
      label={props.language === 'vi-vn' ? "Loại sách bạn đọc để thư giãn là gì?" : "What kind of book would you like to read for fun?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Cuốn sách với nhiều hình ảnh' : 'A book with lots of pictures in it'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'Cuốn sách với nhiều chữ' : 'A book with lots of words in it'
        },
      ]}
      {...props.survey.getInputProps('Q1')}
    />,
    <Select
      label={props.language === 'vi-vn' ? "Khi gặp khó khăn trong việc đánh vần một từ bạn sẽ làm gì?" : "When you are not sure how to spell a word, what are you most likely to do?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Viết ra để xem nó có đúng không' : 'Write it down to see if it looks right'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'Đánh vần thành tiếng để nghe xem nó có đúng không' : 'Spell it out loud to see if it sounds right'
        },
      ]}
      {...props.survey.getInputProps('Q2')}
    />,
    <Select
      label={props.language === 'vi-vn' ? "Trong khi đứng đợi chờ thanh toán khi mua quần áo, bạn sẽ làm gì lúc đó?" : "You're out shopping for clothes, and you're waiting in line to pay. What are you most likely to do while you are waiting?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Nhìn quần áo trên giá' : 'Look around at other clothes on the racks'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'Bắt chuyện với người trong hàng chờ' : 'Talk to the person next to you in line'
        },
      ]}
      {...props.survey.getInputProps('Q3')}
    />,
    <Select
      label={props.language === 'vi-vn' ? "Khi nghĩ tới từ “mèo” bạn sẽ làm gì" : "When you see the word 'cat', what do you do first?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Hình dung một con mèo trong suy nghĩ' : 'Picture a cat in your mind'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'Tự nói thầm từ “mèo”' : 'Say the word "cat" to yourself'
        },
      ]}
      {...props.survey.getInputProps('Q4')}
    />,
    <Select
      label={props.language === 'vi-vn' ? "Cách tốt nhất để ôn thi cho kì kiểm tra" : "What's the best way for you to study for a test?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Đọc sách hoặc ghi chú và ôn lại các hình ảnh và biểu đồ' : 'Read the book or your notes and review pictures or charts'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'Nhờ người khác dò bài bằng các câu hỏi và trả lời' : 'Have someone ask you questions that you can answer out loud'
        },
      ]}
      {...props.survey.getInputProps('Q5')}
    />,
    <Select
      label={props.language === 'vi-vn' ? "Cách để bạn biết cách hoạt động của một vật" : "What's the best way for you to learn about how something works (like a computer or a video game)?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Nhờ người khác chỉ' : 'Get someone to show you'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'Tự tìm kiếm hoặc nghe người khác chỉ' : 'Read about it or listen to someone explain it'
        },
      ]}
      {...props.survey.getInputProps('Q6')}
    />,
    <Select
      label={props.language === 'vi-vn' ? "Khi bạn đi đến một buổi biểu diễn văn nghệ của trường, thứ gì sẽ khiến bạn nhớ nhất vào ngày hôm sau?" : "If you went to a school dance, what would you be most likely to remember the next day?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Khuôn mặt của mọi người dự tiệc' : 'The faces of the people who were there'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'Bài nhạc được chơi trong buổi tiệc' : 'The music that was played'
        },
      ]}
      {...props.survey.getInputProps('Q7')}
    />,
    <Select
      label={props.language === 'vi-vn' ? "Điều khiến bạn mất tập trung khi học tập" : "What do you find most distracting when you are trying to study?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Những người đi ngang' : 'People walking past you'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'Âm thanh ồn ào' : 'Loud noises'
        },
      ]}
      {...props.survey.getInputProps('Q8')}
    />,
    <Select
      label={props.language === 'vi-vn' ? "Khi ở một nơi xa lạ bạn sẽ làm gì để tìm đường" : "When in a new place, how do you find your way around?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Tìm kiếm bản đồ hoặc chỉ dẫn để chỉ đường' : 'Look for a map or directory that shows you where everything is'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'Hỏi mọi người xung quanh' : 'Ask someone for directions'
        },
      ]}
      {...props.survey.getInputProps('Q9')}
    />,
    <Select
      label={props.language === 'vi-vn' ? "Khi tức giận bạn sẽ làm gì" : "When you are angry, what are you most likely to do?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Làm bộ mặt khó chịu' : 'Put on your "mad" face'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'La hét' : 'Yell and scream'
        },
      ]}
      {...props.survey.getInputProps('Q10')}
    />,
    <Select
      label={props.language === 'vi-vn' ? "Khi đang vui bạn sẽ làm gì" : "When you are happy, what are you most likely to do?"}
      placeholder={props.language === 'vi-vn' ? "Chọn lựa chọn" : "Choose option"}
      required
      data={[
        {
          value: '1', label: props.language === 'vi-vn' ? 'Cười rạng rỡ' : 'Smile from ear to ear'
        },
        {
          value: '2', label: props.language === 'vi-vn' ? 'Nói chuyện niềm nở' : 'Talk up a storm'
        },
      ]}
      {...props.survey.getInputProps('Q11')}
    />
  ].map(e => {
    return (
      <>
        <Expire delay={props.transitionDuration * 1000}>
          <div style={{pointerEvents: 'none'}}>
            {e}
          </div>
        </Expire>
        <Delay delay={props.transitionDuration * 1000}>
          {e}
        </Delay>
      </>
    );
  }); // abomination

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: props.transitionDuration }}
    >
      <Paper withBorder shadow="md" p="xl" mt={30} radius="md">
        <form
          onSubmit={props.survey.onSubmit(values => {
            const errorMsg = props.language === 'vi-vn' ? 'Vui lòng trả lời câu hỏi!' : 'Please answer the question!';

            if (props.surveyPage === 0 && values.Q1 === '') {
              props.survey.setFieldError('Q1', errorMsg);
              return;
            }
            if (props.surveyPage === 1 && values.Q2 === '') {
              props.survey.setFieldError('Q2', errorMsg);
              return;
            }
            if (props.surveyPage === 2 && values.Q3 === '') {
              props.survey.setFieldError('Q3', errorMsg);
              return;
            }
            if (props.surveyPage === 3 && values.Q4 === '') {
              props.survey.setFieldError('Q4', errorMsg);
              return;
            }
            if (props.surveyPage === 4 && values.Q5 === '') {
              props.survey.setFieldError('Q5', errorMsg);
              return;
            }
            if (props.surveyPage === 5 && values.Q6 === '') {
              props.survey.setFieldError('Q6', errorMsg);
              return;
            }
            if (props.surveyPage === 6 && values.Q7 === '') {
              props.survey.setFieldError('Q7', errorMsg);
              return;
            }
            if (props.surveyPage === 7 && values.Q8 === '') {
              props.survey.setFieldError('Q8', errorMsg);
              return;
            }
            if (props.surveyPage === 8 && values.Q9 === '') {
              props.survey.setFieldError('Q9', errorMsg);
              return;
            }
            if (props.surveyPage === 9 && values.Q10 === '') {
              props.survey.setFieldError('Q10', errorMsg);
              return;
            }
            if (props.surveyPage === 10) {
              if (values.Q11 === '') {
                props.survey.setFieldError('Q11', errorMsg);
                return;
              }
              let firstSum = 0, secondSum = 0;
              Object.values(props.survey.values).forEach(value => {
                if (value === '1') {
                  firstSum++;
                }
                else {
                  secondSum++;
                }
              })
              props.setLearnerType(firstSum > secondSum ? 'Visual' : 'Auditory');
              props.setGlobalPage(1);
              return;
            }

            props.setSurveyPage(props.surveyPage + 1);
          })}
        >
          <Stack align="center" spacing="xl">
            {questionList[props.surveyPage]}
            <Button
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              type="submit"
            >
              {props.language === 'vi-vn' ? 'Tiếp' : 'Next'}
            </Button>
          </Stack>
        </form>
      </Paper>
    </motion.div>
  );
};

// cancer

export const Q1 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};

export const Q2 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};

export const Q3 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};

export const Q4 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};

export const Q5 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};

export const Q6 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};

export const Q7 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};

export const Q8 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};

export const Q9 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};

export const Q10 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};

export const Q11 = props => {
  return (
    <Questions transitionDuration={props.transitionDuration} survey={props.survey} language={props.language} surveyPage={props.surveyPage} setSurveyPage={props.setSurveyPage} setGlobalPage={props.setGlobalPage} setLearnerType={props.setLearnerType} />
  );
};