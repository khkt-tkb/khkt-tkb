import {
  Loader,
  Title
} from "@mantine/core";

const Wait = props => {
  return (
    <div className="center">
      <Title
        align="center"
        order={1}
        sx={theme => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 1000
        })}
      >
        {props.language === 'vi-vn' ? 'Đang xử lý...' : 'Processing...'}
      </Title>
      <Loader size="xl" color="indigo.9" variant="dots" mt="xl" />
    </div>
  );
};

export default Wait;