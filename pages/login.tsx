import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Checkbox, Input } from "antd";
import { useRouter } from "next/dist/client/router";

const ContainerStyled = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #b6fbff, #83a4d4);

  h2 {
    font-weight: bold;
  }

  .form-container {
    background: white;
    padding: 24px;
    width: 100%;
    max-width: 350px;
  }
`;

const Login = () => {
  const router = useRouter();

  return (
    <ContainerStyled>
      <div className="form-container rounded">
        <h2 className="text-center mb-4">Login</h2>
        <Input className="mb-2" placeholder="Email" prefix={<UserOutlined />} />
        <Input
          className="mb-2"
          placeholder="Password"
          prefix={<LockOutlined />}
          type="password"
        />
        <Checkbox className="mb-4">Remember me</Checkbox>
        <Button
          className="mb-2"
          block
          type="primary"
          onClick={() => router.push("/")}
        >
          Login
        </Button>
        <Button block>Sign Up</Button>
      </div>
    </ContainerStyled>
  );
};

export default Login;
