import {
  TextInput,
  Paper,
  Button,
  Group,
  Container,
  ScrollArea,
} from "@mantine/core";
import { motion } from 'framer-motion'
import Axios from 'axios';

const Extra2 = props => {
  let todoList = [];

  const process = () => {
    let list_of_deadline = props.taskList.map(e => new Deadline(e.taskName, new Date(e.date), e.timeToFinish, parseInt(e.priority))) // input
    let todo_list = {} // output
    let remaining_deadline = []
    let total_time = 0
    let time_per_day = props.extra.freeTime
    let time_offset = 0
    let total_weight = 0
    let weight_per_day = 0
    let max_focus_time = props.extra.focusTime
    let weight_offset = 3

    function Deadline(name, date, estimated_time_needed, weight) {
      this.name = name
      this.date = date
      this.estimated_time_needed = estimated_time_needed
      this.weight = weight
    }

    function Task(name, interval) {
      this.name = name
      this.interval = interval
    }

    function comparator(a, b) {
      if (new Date(a.date).getTime() === new Date(b.date).getTime() && a.estimated_time_needed === b.estimated_time_needed) {
        return a.weight > b.weight
      }
      else if (new Date(a.date).getTime() === new Date(b.date).getTime()) {
        return a.estimated_time_needed - b.estimated_time_needed
      }
      else {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      }
    }

    function preprocess() {
      list_of_deadline.forEach(deadline => {
        total_time += deadline.estimated_time_needed
        total_weight += deadline.weight * deadline.estimated_time_needed
      })
      let total_day = total_time / time_per_day
      weight_per_day = total_weight / total_day
      list_of_deadline.sort((a, b) => {
        return comparator(a, b)
      })
    }

    function generate(isMethod1) {
      if (isMethod1) {
        let time = 0
        let weight = 0
        let focus_time = 0
        let deadline_index = 0
        const last_index = list_of_deadline.length - 1
        for (let date = new Date(); date < list_of_deadline[last_index].date; date.setDate(date.getDate() + 1)) {
          if (deadline_index > last_index) {
            break
          }
          if (date >= list_of_deadline[last_index].date) {
            remaining_deadline = list_of_deadline.slice(deadline_index)
            return
          }
          time = 0
          weight = 0
          todo_list[date] = []
          focus_time = Math.min(max_focus_time, list_of_deadline[deadline_index].estimated_time_needed)
          while (deadline_index <= last_index && time + focus_time <= time_per_day + time_offset && weight + list_of_deadline[deadline_index].weight * focus_time <= weight_per_day + weight_offset) {
            focus_time = Math.min(max_focus_time, list_of_deadline[deadline_index].estimated_time_needed)
            list_of_deadline[deadline_index].estimated_time_needed -= focus_time
            time += focus_time
            weight += list_of_deadline[deadline_index].weight * focus_time

            todo_list[date].push(new Task(list_of_deadline[deadline_index].name, focus_time + 'h'))
            todo_list[date].push(new Task("Nghỉ", '5\''))
            if (list_of_deadline[deadline_index].estimated_time_needed <= 0) {
              deadline_index += 1
            }
          }
          todo_list[date].pop()
        }
        if (deadline_index <= last_index) {
          remaining_deadline = list_of_deadline.slice(deadline_index)
          return
        }
      }
      else {
        let last_index = list_of_deadline.length - 1
        let focus_time = 0
        let time = {}
        let weight = {}
        for (let date = new Date(); date < list_of_deadline[last_index].date; date.setDate(date.getDate() + 1)) {
          time[date] = 0
          weight[date] = 0
          todo_list[date] = []
        }
        list_of_deadline.forEach(deadline => {
          for (let period = 0; (period < time_per_day / max_focus_time) && (deadline.estimated_time_needed > 0); ++period) {
            for (let date = new Date(); (date < deadline.date) && (deadline.estimated_time_needed > 0); date.setDate(date.getDate() + 1)) {
              focus_time = Math.min(max_focus_time, deadline.estimated_time_needed)
              if ((time[date] + focus_time <= time_per_day + time_offset) && (weight[date] + deadline.weight * focus_time <= weight_per_day + weight_offset)) {
                focus_time = Math.min(max_focus_time, deadline.estimated_time_needed)
                deadline.estimated_time_needed -= focus_time
                time[date] += focus_time
                weight[date] += deadline.weight * focus_time

                todo_list[date].push(new Task(deadline.name, focus_time + 'h'))
                todo_list[date].push(new Task("Nghỉ", '5\''))
              }
            }
          }
          if (deadline.estimated_time_needed > 0) {
            remaining_deadline.push(deadline)
          }
        })
        Object.keys(todo_list).forEach(date => {
          todo_list[date].pop()
          if (todo_list[date].length === 0) {
            delete todo_list[date]
          }
        })
      }
    }

    preprocess()
    generate(props.extra.sapXepType === '1');

    let noRow = 0;
    todoList = Object.keys(todo_list).map((k => {
      noRow = Math.max(noRow, todo_list[k].length);
      return { date: k, tasks: todo_list[k] };
    }));
    props.setTodoList(todoList);
    props.setRemainingDeadline(remaining_deadline);
    props.setButtonStatus([...Array(noRow)].map(_ => Array(todoList.length).fill(false)));
  }

  return (
    <div className="center">
      <ScrollArea type="scroll">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: props.transitionDuration }}
        >
          <Container my={90}>
            <Paper withBorder shadow="md" p="xl" radius="md">
              <form onSubmit={props.emailField.onSubmit(async values => {
                if (!props.activeEmails.includes(values.email)) {
                  props.setActiveEmails(props.activeEmails.concat([values.email]));
                }
                props.emailField.reset();
                props.setGlobalPage(5);
                if (props.taskList.length > 0) {
                  await process();
                }
                else {
                  alert(props.language === 'vi-vn' ? 'Vui lòng nhập ít nhất 1 công việc!' : 'Please fill in at least 1 task!')
                  props.setGlobalPage(2);
                  return;
                }
                //await Axios.post('http://localhost:5000', {
                await Axios.post('https://khkt-tkb-api.onrender.com', {
                  requestType: 'send',
                  email: values.email,
                  language: props.language,
                  todoList: todoList,
                  learnerType: props.learnerType,
                }).then(res => console.log(res));
              })}>
                <TextInput
                  label={props.language === 'vi-vn' ? "Nhập email để nhận thông báo lịch" : "Enter email to receive schedule notifications"}
                  placeholder={props.language === 'vi-vn' ? "Nhập email" : "Enter email"}
                  required
                  {...props.emailField.getInputProps('email')}
                />
                <Group position="center" mt="xl">
                  <Button
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'cyan' }}
                    onClick={() => props.setGlobalPage(3)}
                  >
                    {props.language === 'vi-vn' ? 'Trước' : 'Previous'}
                  </Button>
                  <Button
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'cyan' }}
                    type="submit"
                  >
                    {props.language === 'vi-vn' ? 'Tiếp' : 'Next'}
                  </Button>
                </Group>
              </form>
            </Paper>
          </Container>
        </motion.div>
      </ScrollArea>
    </div>
  );
};

export default Extra2;