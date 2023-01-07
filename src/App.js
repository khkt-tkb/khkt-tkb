import { useState } from 'react';
import {
  MantineProvider,
  ActionIcon,
  Popover,
  Button,
  HoverCard,
  Text
} from '@mantine/core';
import { IconReload, IconInfoCircle, IconWorld } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { useLocalStorage } from '@mantine/hooks';
import Axios from 'axios';
import Expire from './components/Expire';
import Delay from './components/Delay';
import Survey from './pages/Survey';
import SurveyResult from './pages/SurveyResult';
import Add from './pages/Add';
import Extra from './pages/Extra';
import Extra2 from './pages/Extra2';
import Wait from './pages/Wait';
import ScheduleResult from './pages/ScheduleResult';
import './App.css';

const transitionDuration = 0.5;

export default function App() {
  const [surveyPage, setSurveyPage] = useState(0);
  const [globalPage, setGlobalPage] = useLocalStorage({ key: 'global-page', defaultValue: 0 });
  const [saveStatus, setSaveStatus] = useLocalStorage({ key: 'survey-status', defaultValue: 0 });
  const [language, setLanguage] = useLocalStorage({ key: 'language', defaultValue: 'vi-vn' });
  const [langOpened, setLangOpened] = useState(false);
  const [activeEmails, setActiveEmails] = useLocalStorage({ key: 'active-email', defaultValue: [] });

  const survey = useForm({
    initialValues: {
      Q1: '', Q2: '', Q3: '', Q4: '', Q5: '', Q6: '', Q7: '', Q8: '', Q9: '', Q10: '', Q11: '',
    }
  });
  const [learnerType, setLearnerType] = useLocalStorage({ key: 'learner-type', defaultValue: undefined })

  const add = useForm({
    initialValues: {
      taskName: '',
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      timeToFinish: undefined,
      priority: '1'
    },
    validate: {
      taskName: (value) => (taskList.some((task) => task.taskName === value) ? (language === 'vi-vn' ? 'Tên đã tồn tại!' : 'Name existed!') : null),
      timeToFinish: (value) => (value === 0 ? (language === 'vi-vn' ? 'Thời gian không hợp lệ!' : 'Invalid time!') : null)
    }
  });
  const [taskList, setTaskList] = useLocalStorage({ key: 'task-list', defaultValue: [] });

  const [extra, setExtra] = useLocalStorage({
    key: 'extra',
    defaultValue: {
      freeTime: 0.25,
      focusTime: 0.25,
      sapXepType: '1'
    }
  });
  const [todoList, setTodoList] = useLocalStorage({ key: 'todo-list', defaultValue: [] });

  const emailField = useForm({
    initialValues: {
      email: ''
    },
    validate: {
      email: (value) => (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? null : language === 'vi-vn' ? 'Email không hợp lệ!' : 'Invalid email!')
    }
  });
  const [buttonStatus, setButtonStatus] = useLocalStorage({ key: 'button-status', defaultValue: undefined });
  const [remainingDeadline, setRemainingDeadline] = useLocalStorage({ key: 'remaining-deadline', defaultValue: [] });

  const globalPageList = [
    <Survey
      transitionDuration={transitionDuration}
      language={language}
      survey={survey}
      surveyPage={surveyPage}
      setSurveyPage={setSurveyPage}
      setGlobalPage={setGlobalPage}
      setLearnerType={setLearnerType}
    />,
    <>
      <Expire delay={3000}>
        <Wait language={language} />
      </Expire>
      <Delay delay={3000} onFinishDelay={() => setSaveStatus(1)}>
        <SurveyResult
          transitionDuration={transitionDuration}
          language={language}
          learnerType={learnerType}
          setGlobalPage={setGlobalPage}
        />
      </Delay>
    </>,
    <Add
      transitionDuration={transitionDuration}
      language={language}
      add={add}
      taskList={taskList}
      setTaskList={setTaskList}
      setGlobalPage={setGlobalPage}
    />,
    <Extra
      transitionDuration={transitionDuration}
      language={language}
      extra={extra}
      setExtra={setExtra}
      setGlobalPage={setGlobalPage}
    />,
    <Extra2
      transitionDuration={transitionDuration}
      globalPage={globalPage}
      language={language}
      emailField={emailField}
      activeEmails={activeEmails}
      setActiveEmails={setActiveEmails}
      setGlobalPage={setGlobalPage}
      extra={extra}
      taskList={taskList}
      todoList={todoList}
      setTodoList={setTodoList}
      setButtonStatus={setButtonStatus}
      setRemainingDeadline={setRemainingDeadline}
      learnerType={learnerType}
    />,
    <>
      <Expire delay={5000}>
        <Wait language={language} />
      </Expire>
      <Delay delay={5000} onFinishDelay={() => setSaveStatus(2)}>
        <ScheduleResult
          transitionDuration={transitionDuration}
          language={language}
          todoList={todoList}
          setTodoList={setTodoList}
          setSaveStatus={setSaveStatus}
          buttonStatus={buttonStatus}
          setButtonStatus={setButtonStatus}
          setGlobalPage={setGlobalPage}
          remainingDeadline={remainingDeadline}
        />
      </Delay>
    </>
  ]

  const instructionList = [
    <Text>
      {language === 'vi-vn' ?
        'Thông qua bài test bạn sẽ biết được mình thuộc kiểu người học thiên về thị giác hay thiên về thính giác và các lời khuyên trong công việc học tập.' :
        'Through this test, you will know whether you are a visual learner or an auditory learner and tips to studying.'}
    </Text>,
    '',
    <div>
      <Text>
        {language === 'vi-vn' ?
          'Nhập các công việc + deadline + thời gian cần để hoàn thành công việc (dự kiến) + độ phức tạp (nặng) của công việc đó với bạn (từ 1->5).' :
          'Fill in the tasks + deadlines + the (expected) time it takes to finish the task + the complexity (weight) of the task (from 1 -> 5).'}
      </Text>
      <br />
      <Text color="red">
        {language === 'vi-vn' ? 'Lưu ý: Hiện tại phần mềm giới hạn người dùng chỉ có thể nhập dl trong 2 tuần tới.' :
          'Note: Currently, the users can only fill in the deadlines for the following 2 weeks.'}
      </Text>
    </div>,
    <div>
      <Text>
        {language === 'vi-vn' ? 'Nhập thời gian dành cho việc học (sau chính khóa) trong ngày.' :
          'Fill in the time allocated to studying (apart from school) of the day.'}
        <br />
        {language === 'vi-vn' ? 'Nhập thời gian bạn có thể tập trung hoàn toàn vào một công việc.' :
          'Fill in the time that you can concentrate fully on a task.'}
        <br />
        {language === 'vi-vn' ? 'Chọn kiểu thời khóa biểu bạn muốn (học liên tiếp hay xen kẽ các môn).' :
          'Choose the type of schedule you prefer (studying a subject continuously or switching between the subjects).'}
      </Text>
      <br />
      <Text color="red">
        {language === 'vi-vn' ? 'Lưu ý: tất cả các mốc thời gian nhập vào đều phải được làm tròn đến phần thập phân có dạng (00,25,50,75).' :
          'Note: All the filled timelines must be rounded to the decimal numbers that have one of these forms (00, 25, 50, 75).'}
        <br />
        {language === 'vi-vn' ? 'Ví dụ:' :
          'Eg:'}
        <br />
        {language === 'vi-vn' ? '+ 1.5, 2.75 là phù hợp.' :
          '+ 1.5, 2.75 are appropriate.'}
        <br />
        {language === 'vi-vn' ? '+ 1.3, 2.45 là không phù hợp.' :
          '+ 1.3, 2.45 are inappropriate.'}
      </Text>
    </div>,
    <div>
      <Text>
        {language === 'vi-vn' ? 'Nhập email để nhận thông báo từ phần mềm.' :
          'Fill in the email to receive notifications from the software.'}
        <br /> <br />
        {language === 'vi-vn' ? 'Dựa vào những thông tin được cung cấp, thuật toán sẽ tạo nên một thời khóa biểu phù hợp đối với bạn:' :
          'Based on the provided information, the algorithm will generate a schedule that suits you most:'}
        <br />
        {language === 'vi-vn' ? '+ Nếu bạn thuộc kiểu học thiên về thính giác, deadline sẽ được gửi đến bạn qua mail dưới dạng ghi âm mỗi ngày.' :
          '+ If you are an auditory learner, the deadlines will be sent to you daily via email under voice record.'}
        <br />
        {language === 'vi-vn' ? '+ Nếu bạn thuộc kiểu học thiên về hình ảnh, deadline sẽ được gửi đến bạn qua mail dưới dạng hình ảnh mỗi ngày.' :
          '+ If you are a visual learner, the deadlines will be sent to you daily via email under image forms.'}
      </Text>
      <br />
      <Text color="red">
        {language === 'vi-vn' ? 'Lưu ý: thông báo sẽ được gửi tới lúc 0h mỗi ngày từ ngày đầu tiên trong lịch nên bạn sẽ nhận được email thông báo từ ngày tiếp theo sau khi tạo thời khóa biểu.' :
          'Note: the notification will be sent at 0 o’clock daily from the first day of the schedule so you would receive an email from the following day after creating the schedule.'}
      </Text>
    </div>,
    <Text>
      {language === 'vi-vn' ? 'Khi hoàn thành 1 phần công việc, bạn có thể click vào ô tương ứng, màu của ô sẽ chuyển xanh để đánh dấu rằng bạn đã hoàn thành phần công việc đó.' :
        'When completing part of a task, you can click on the corresponding box, the color of the box would turn green to mark the part of a task that you have completed.'}
    </Text>
  ]

  const renderPage = () => {
    if (saveStatus === 1 && globalPage === 1) {
      return (
        <SurveyResult
          transitionDuration={transitionDuration}
          language={language}
          learnerType={learnerType}
          setGlobalPage={setGlobalPage}
        />
      );
    }

    if (saveStatus === 2 && globalPage === 5) {
      return (
        <ScheduleResult
          transitionDuration={transitionDuration}
          language={language}
          todoList={todoList}
          setTodoList={setTodoList}
          setSaveStatus={setSaveStatus}
          buttonStatus={buttonStatus}
          setButtonStatus={setButtonStatus}
          setGlobalPage={setGlobalPage}
          remainingDeadline={remainingDeadline}
        />
      );
    }

    return globalPageList[globalPage];
  };

  const cancelSend = async () => {
    if (activeEmails.length > 0) {
      await Axios.post('http://localhost:5000', {
      //await Axios.post('https://khkt-tkb-api.onrender.com', {
        requestType: 'cancel',
        emailList: activeEmails,
      }).then(res => console.log(res));
      setActiveEmails([]);
    }
  };

  return (
    <div className="App">
      <div className="background">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <MantineProvider thewithCSSVariables withGlobalStyles>
        <Popover opened={langOpened} onChange={setLangOpened} trapFocus position="bottom" withArrow>
          <Popover.Target>
            <ActionIcon
              variant="filled"
              color="gray"
              size="sm"
              radius="xl"
              style={{
                position: 'absolute',
                right: '0em',
                margin: '15px'
              }}
              onClick={() => setLangOpened(o => !o)}
            >
              <IconWorld />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown>
            <Button variant="white" color="dark" compact radius="xs" onClick={() => {
              setLanguage('vi-vn');
              setLangOpened(0);
            }}>🇻🇳</Button>
            <Button variant="white" color="dark" compact radius="xs" onClick={() => {
              setLanguage('en-us');
              setLangOpened(0);
            }}>🇬🇧</Button>
          </Popover.Dropdown>
        </Popover>
        <HoverCard withArrow>
          <HoverCard.Target>
            <ActionIcon
              variant="filled"
              color="gray"
              size="sm"
              radius="xl"
              style={{
                position: 'absolute',
                right: '2.25em',
                margin: '15px'
              }}
              onClick={() => {
                setSurveyPage(0);
                setGlobalPage(0);
                setSaveStatus(0);
                survey.reset();
                setLearnerType(undefined);
                add.reset();
                setTaskList([]);
                setExtra({ freeTime: 0.25, focusTime: 0.25, sapXepType: '1' });
                setTodoList([]);
                emailField.reset();
                setButtonStatus(undefined);
                cancelSend();
              }}
            >
              <IconReload />
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text>
              {language === 'vi-vn' ? '*Chú ý: đây sẽ ngừng gửi đến mọi email đã nhập!' : '*Note: this will unsubscribe from every submitted email!'}
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
        <Popover trapFocus position="bottom" withArrow>
          <Popover.Target>
            <ActionIcon
              variant="filled"
              color="gray"
              size="sm"
              radius="xl"
              style={{
                position: 'absolute',
                right: '4.5em',
                margin: '15px'
              }}
            >
              <IconInfoCircle />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown>
            <Text>
              {instructionList[globalPage]}
            </Text>
          </Popover.Dropdown>
        </Popover>
        {renderPage()}
      </MantineProvider>
    </div>
  );
}