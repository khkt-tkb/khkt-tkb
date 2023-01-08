import {
  Container,
  Paper,
  Table,
  Button,
  Text,
  List,
  Flex,
  ScrollArea,
} from "@mantine/core";
import { motion } from "framer-motion";

const ScheduleResult = props => {
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          {props.todoList.map((element, index) => {
            return (
              <th key={index}>
                {new Date(element.date).getDate() + "/" +
                  (new Date(element.date).getMonth() + 1)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  const renderTableBody = () => {
    let noRow = 0;
    props.todoList.forEach(element => noRow = Math.max(noRow, element.tasks.length))
    let tableBody = new Array(noRow);
    for (let i = 0; i < noRow; i++) {
      let eachRow = new Array(props.todoList.length);
      props.todoList.forEach((element, index) => {
        eachRow.push(
          <td key={index}>
            {element.tasks[i] !== undefined ?
              <button
                className="btn"
                style={{ backgroundColor: props.buttonStatus[i][index] ? 'limegreen' : 'slategray' }}
                onClick={() => {
                  const buttonStatus = props.buttonStatus.slice();
                  buttonStatus[i][index] = !buttonStatus[i][index];
                  props.setButtonStatus(buttonStatus);
                }}
                disabled={element.tasks[i].name === 'Nghỉ' && element.tasks[i].interval === "5'"}
              >
                {(props.language === 'en-us' && element.tasks[i].name === 'Nghỉ' ? 'Break' : element.tasks[i].name) + " (" + element.tasks[i].interval + ")"}
              </button> : ''}
          </td>
        )
      });
      tableBody.push(<tr key={i}>{eachRow}</tr>);
    }

    return (
      <tbody>
        {tableBody}
      </tbody>
    );
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
            <Flex gap="md">
              <Paper withBorder shadow="md" p="xl" radius="md" align="center">
                <Table>
                  {renderTableHead()}
                  {renderTableBody()}
                </Table>
                <Button
                  variant="gradient"
                  gradient={{ from: 'indigo', to: 'cyan' }}
                  mt="xl"
                  onClick={() => {
                    props.setSaveStatus(1);
                    props.setGlobalPage(4);
                  }}
                >
                  {props.language === 'vi-vn' ? 'Trước' : 'Previous'}
                </Button>
              </Paper>
              {props.remainingDeadline.length > 0 ?
                (
                  <Paper withBorder shadow="md" p="xl" radius="md" align="center">
                    <Text>{props.language === 'vi-vn' ? 'Danh sách deadline dư' : 'List of leftover deadlines'}</Text>
                    <List>
                      {props.remainingDeadline.map((e, i) => {
                        return (
                          <List.Item key={i}>{e.name + " (" + e.estimated_time_needed + "h)"}</List.Item>
                        );
                      })}
                    </List>
                  </Paper>
                ) : ''
              }
            </Flex>
          </Container>
        </motion.div>
      </ScrollArea>
    </div>
  );
}

export default ScheduleResult;