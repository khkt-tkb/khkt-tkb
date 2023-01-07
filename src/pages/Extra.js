import {
  Paper,
  NumberInput,
  Button,
  Group,
  Select
} from "@mantine/core";
import { motion } from "framer-motion";

const Extra = props => {
  return (
    <div className="center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: props.transitionDuration }}
      >
        <Paper withBorder shadow="md" p="xl" radius="md">
          <form>
            <NumberInput
              min={0.25}
              step={0.25}
              precision={2}
              label={props.language === 'vi-vn' ? "Thời gian dành cho việc học trong ngày (giờ)" : "Time allocated to studying of the day (hour)"}
              placeholder={props.language === 'vi-vn' ? "Nhập thời gian" : "Enter time"}
              required
              defaultValue={0.25}
              value={props.extra.freeTime}
              onChange={value => props.setExtra({ ...props.extra, freeTime: value })}
              formatter={value => (Math.round(value * 4) / 4).toFixed(2)}
            />
            <NumberInput
              min={0.25}
              step={0.25}
              precision={2}
              label={props.language === 'vi-vn' ? "Thời gian tập trung làm việc (giờ)" : "Period fully focused doing tasks (hour)"}
              placeholder={props.language === 'vi-vn' ? "Nhập thời gian" : "Enter time"}
              required
              defaultValue={0.25}
              mt="xs"
              value={props.extra.focusTime}
              onChange={value => props.setExtra({ ...props.extra, focusTime: value })}
              formatter={value => (Math.round(value * 4) / 4).toFixed(2)}
            />
            <Select
              label={props.language === 'vi-vn' ? "Cách sắp xếp lịch" : "Method of organizing schedule"}
              required
              data={[
                {
                  value: '1', label: props.language === 'vi-vn' ? 'Học liên tiếp các môn' : 'Studying subjects continuously'
                },
                {
                  value: '2', label: props.language === 'vi-vn' ? 'Học xen kẽ các môn' : 'Studying subjects alternatingly'
                },
              ]}
              defaultValue="1"
              value={props.extra.sapXepType}
              onChange={value => props.setExtra({ ...props.extra, sapXepType: value })}
              mt="xs"
            />
            <Group position="center" mt="xl">
              <Button
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
                onClick={() => props.setGlobalPage(2)}
              >
                {props.language === 'vi-vn' ? 'Trước' : 'Previous'}
              </Button>
              <Button
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
                onClick={() => {
                  props.setGlobalPage(4);
                }}
              >
                {props.language === 'vi-vn' ? 'Tiếp' : 'Next'}
              </Button>
            </Group>
          </form>
        </Paper>
      </motion.div>
    </div>
  );
};

export default Extra;