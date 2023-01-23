import styled from "styled-components";

const Loader = () => {
  return (
    <div>
      <div className="container">
        <Dot1 className="bg-dot1  animation: pulse 2s infinite ease-in-out alternate" />
        <Dot2 className="bg-dot2" />
        <Dot3 className="bg-dot3" />
        <Dot4 className="bg-dot4" />
        <Dot5 className="bg-dot5" />
      </div>
    </div>
  );
};

export default Loader;

const Dot1 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px 10px;
  display: inline-block;
  animation: bounce 0.8s 0.1s infinite;
  @keyframes bounce {
    0%,
    100% {
      transform: translate(0, 20px);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const Dot2 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px 10px;
  display: inline-block;
  animation: bounce 0.8s 0.2s infinite;
  @keyframes bounce {
    0%,
    100% {
      transform: translate(0, 20px);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const Dot3 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px 10px;
  display: inline-block;
  animation: bounce 0.8s 0.3s infinite;
  @keyframes bounce {
    0%,
    100% {
      transform: translate(0, 20px);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const Dot4 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px 10px;
  display: inline-block;
  animation: bounce 0.8s 0.4s infinite;
  @keyframes bounce {
    0%,
    100% {
      transform: translate(0, 20px);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

const Dot5 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px 10px;
  display: inline-block;
  animation: bounce 0.8s 0.5s infinite;
  @keyframes bounce {
    0%,
    100% {
      transform: translate(0, 20px);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;
