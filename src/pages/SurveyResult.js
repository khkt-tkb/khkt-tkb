import {
  Container,
  Title,
  Text,
  Stack,
  Button,
  Paper,
  ScrollArea
} from "@mantine/core";
import { motion } from "framer-motion";

const SurveyResult = props => {
  return (
    <Stack style={{ height: '100vh' }} align="center">
      <ScrollArea type="scroll">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: props.transitionDuration }}
        >
          <Container my={90}>
            <Stack align="center">
              <Title
                align="center"
                order={1}
                sx={theme => ({
                  fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                  fontWeight: 1000
                })}
              >
                {props.language === 'vi-vn' ? 'Bạn là một...' : 'You are a...'}
              </Title>
              <Text size={50} align="center" color="indigo.9">
                {props.language === 'vi-vn' ? props.learnerType === 'Visual' ? 'Người học thiên về thị giác!' : 'Người học thiên về thính giác!' :
                  props.learnerType + " learner!"}
              </Text>
              <Paper withBorder shadow="md" p="xl" radius="md" mt={30}>
                <Stack align="center">
                  {props.learnerType === 'Visual' ? props.language === 'vi-vn' ?
                    <p>
                      Dưới đây là một số điều mà những người học hình tượng như bạn có thể làm để học tốt hơn:<br />
                      - Ngồi gần phía đầu của lớp học. (Điều đó không có nghĩa là bạn là học trò cưng của giáo viên!)<br />
                      - Thường xuyên kiểm tra thị lực của bạn<br />
                      - Sử dụng thẻ ghi chú để học từ mới<br />
                      - Cố gắng hình dung những điều bạn nghe được hoặc những điều được đọc cho bạn nghe<br />
                      - Viết ra những từ khóa, ý tưởng hoặc hướng dẫn<br />
                      - Vẽ tranh để giúp giải thích các khái niệm mới và sau đó giải thích<br />
                      - Sử dụng màu sắc để<br />
                      - Tránh sao nhãng trong thời gian học<br />
                      - Hãy nhớ rằng bạn cần nhìn thấy mọi thứ chứ không chỉ nghe thấy mọi thứ để học tốt.
                    </p> :
                    <p>
                      Here are some things that visual learners like you can do to learn better:<br />
                      - Sit near the front of the classroom. (It won't mean you're the teacher's pet!)<br />
                      - Have your eyesight checked on a regular basis<br />
                      - Use flashcards to learn new words<br />
                      - Try to visualize things that you hear or things that are read to you<br />
                      - Write down key words, ideas, or instructions<br />
                      - Draw pictures to help explain new concepts and then explain the pictures<br />
                      - Color code things<br />
                      - Avoid distractions during study times<br />
                      - Remember that you need to see things, not just hear things, to learn well.
                    </p>
                    : props.language === 'vi-vn' ?
                      <p>
                        Dưới đây là một số điều mà những người học thính giác như bạn có thể làm để học tốt hơn:<br />
                        - Ngồi ở nơi bạn có thể nghe thấy<br />
                        - Thường xuyên kiểm tra thính giác của bạn<br />
                        - Sử dụng thẻ ghi chú để học từ mới; đọc to chúng<br />
                        - Đọc to các câu chuyện, bài tập hoặc hướng dẫn<br />
                        - Tự ghi lại các từ chính tả và sau đó nghe đoạn ghi âm<br />
                        - Yêu cầu đọc to các câu hỏi kiểm tra cho bạn nghe<br />
                        - Nghiên cứu tài liệu mới bằng cách đọc to<br />
                        - Hãy nhớ rằng bạn cần nghe mọi thứ, không chỉ nhìn thấy mọi thứ, để học tốt.
                      </p> :
                      <p>
                        Here are some things that auditory learners like you can do to learn better:<br />
                        - Sit where you can hear<br />
                        - Have your hearing checked on a regular basis<br />
                        - Use flashcards to learn new words; read them out loud<br />
                        - Read stories, assignments, or directions out loud<br />
                        - Record yourself spelling words and then listen to the recording<br />
                        - Have test questions read to you out loud<br />
                        - Study new material by reading it out loud<br />
                        - Remember that you need to hear things, not just see things, in order to learn well.
                      </p>
                  }
                  <Button
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'cyan' }}
                    onClick={() => props.setGlobalPage(2)}
                  >
                    {props.language === 'vi-vn' ? 'Tiếp' : 'Next'}
                  </Button>
                </Stack>
              </Paper>
            </Stack>
          </Container>
        </motion.div>
      </ScrollArea>
    </Stack>
  );
};

export default SurveyResult;