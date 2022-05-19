import styled from "@emotion/styled";
import { Button, Input } from "antd";
import { NextPage } from "next";

const SignupStyled = styled.div`
  min-height: 100vh;

  .bg-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }

  .wrapper {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 24px;
    flex-direction: column;
  }

  h2 {
    color: white;
    font-weight: bold;
    font-size: 32px;
  }

  .container {
    background: white;
    padding: 24px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 420px;
  }

  .item {
    width: 100%;
    margin-bottom: 12px;

    p {
      margin-bottom: 4px;
    }
  }

  .btn {
    margin-top: 12px;
  }
`;

const Signup: NextPage = () => {
  return (
    <SignupStyled>
      <video autoPlay muted loop className="bg-video">
        <source src="/bg_video.mp4" />
      </video>
      <div className="wrapper">
        <h2>Tell Us About Your Company</h2>
        <div className="container">
          <div className="item">
            <p>Company Name:</p>
            <Input placeholder="Enter Company Name" />
          </div>

          <div className="item">
            <p>Company SSM:</p>
            <Input placeholder="Enter Company SSM" />
          </div>

          <div className="item">
            <p>Company Website:</p>
            <Input placeholder="Enter Company Website (Optional)" />
          </div>

          <Button className="btn" block>
            Sign Up
          </Button>
        </div>
      </div>
    </SignupStyled>
  );
};

export default Signup;
