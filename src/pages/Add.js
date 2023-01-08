import {
  Container,
  Paper,
  Text,
  TextInput,
  Button,
  Select,
  NumberInput,
  ActionIcon,
  Group,
  Stack,
  SimpleGrid,
  ScrollArea
} from '@mantine/core';
import { DatePicker } from '@mantine/dates'
import { motion } from 'framer-motion';
import { IconTrashX } from '@tabler/icons'

const Add = props => {
  const handleRemoveItem = index => {
    props.setTaskList(props.taskList.filter((task, idx) => {
      if (idx !== index) {
        return task;
      }
      return null;
    }))
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
              <Stack align="center" spacing="xl">
                <form onSubmit={props.add.onSubmit(values => {
                  props.setTaskList(props.taskList.concat([values]))
                  props.add.reset();
                })}>
                  <Group grow>
                    <TextInput
                      label={props.language === 'vi-vn' ? "Công việc" : "Task"}
                      placeholder={props.language === 'vi-vn' ? "Nhập tên" : "Enter name"}
                      required
                      {...props.add.getInputProps('taskName')}
                    />
                    <DatePicker
                      placeholder={props.language === 'vi-vn' ? "Chọn ngày" : "Choose date"}
                      label="Deadline"
                      defaultValue={new Date(new Date().setDate(new Date().getDate() + 1))}
                      withAsterisk
                      clearable={false}
                      minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                      maxDate={new Date(new Date().setDate(new Date().getDate() + 13))}
                      {...props.add.getInputProps('date')}
                    />
                  </Group>
                  <Group mt="xs" grow>
                    <NumberInput
                      min={0}
                      precision={2}
                      label={props.language === 'vi-vn' ? "Thời gian hoàn thành (giờ)" : "Time required to finish (hour)"}
                      placeholder={props.language === 'vi-vn' ? "Nhập thời gian" : "Enter time"}
                      required
                      {...props.add.getInputProps('timeToFinish')}
                    />
                    <Select
                      label={props.language === 'vi-vn' ? "Độ nặng" : "Weight"}
                      required
                      defaultValue="1"
                      data={[
                        {
                          value: '1', label: props.language === 'vi-vn' ? '1 - Cực kì thoải mái' : '1 - Very comfortable'
                        },
                        {
                          value: '2', label: props.language === 'vi-vn' ? '2 - Thoải mái' : '2 - Comfortable'
                        },
                        {
                          value: '3', label: props.language === 'vi-vn' ? '3 - Bình thường' : '3 - Normal'
                        },
                        {
                          value: '4', label: props.language === 'vi-vn' ? '4 - Áp lực' : '4 - Intense'
                        },
                        {
                          value: '5', label: props.language === 'vi-vn' ? '5 - Cực kì áp lực' : '5 - Very intense'
                        },
                      ]}
                      {...props.add.getInputProps('priority')}
                    />
                  </Group>
                  <Button
                    fullWidth
                    mt="md"
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'cyan' }}
                    type="submit"
                  >
                    {props.language === 'vi-vn' ? 'Thêm' : 'Add'}
                  </Button>
                  <Paper withBorder shadow="md" p="xl" mt="md" radius="md">
                    <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
                      {props.taskList.map((task, index) => {
                        return (
                          <Group spacing="xs" key={index}>
                            <ActionIcon
                              variant="filled"
                              color="red"
                              size="xs"
                              radius="xl"
                              onClick={() => handleRemoveItem(index)}
                            >
                              <IconTrashX />
                            </ActionIcon>
                            <Text>{
                              task.taskName + ' - ' + new Date(task.date).getDate() + '/' + (new Date(task.date).getMonth() + 1) +
                              ' - ' + task.timeToFinish + (props.language === 'vi-vn' ? ' tiếng - ' : ' hour - ') + task.priority
                            }</Text>
                          </Group>
                        );
                      })}
                    </SimpleGrid>
                  </Paper>
                </form>
                <Button
                  variant="gradient"
                  gradient={{ from: 'indigo', to: 'cyan' }}
                  onClick={() => props.setGlobalPage(3)}
                >
                  {props.language === 'vi-vn' ? 'Tiếp' : 'Next'}
                </Button>
              </Stack>
            </Paper>
          </Container>
        </motion.div>
      </ScrollArea>
    </div>
  );
}

export default Add;