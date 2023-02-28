import styled from "styled-components";

const Cube = () => {
  window.addEventListener("scroll", () => {
    document.body.style.setProperty(
      "--scroll",
      (
        window.pageYOffset /
        (document.body.offsetHeight - window.innerHeight)
      ).toString()
    );
  });

  return (
    <CubeWrapper>
      <StyledCube>
        <TopSide />
        <BottomSide />
        <FrontSide />
        <BackSide />
        <LeftSide />
        <RightSide />
      </StyledCube>
    </CubeWrapper>
  );
};

const CubeWrapper = styled.div`
  --size: 5vmin;
  position: fixed;
  bottom: 10%;
  right: 10%;
  width: 0;
  height: 0;
  perspective: 50vmin;
`;

const StyledCube = styled.div`
  transform-style: preserve-3d;
  transform: rotateX(450deg) rotateZ(45deg) rotateY(-45deg);
  animation: cube 1s linear;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);
  animation-iteration-count: 2;
  animation-fill-mode: both;

  @keyframes cube {
    to {
      transform: rotateX(90deg) rotateZ(45deg) rotateY(-45deg);
    }
  }
`;

const Side = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  background-color: #eee;
  backface-visibility: visible;
  top: calc(var(--size) * -0.5);
  left: calc(var(--size) * -0.5);
`;

const TopSide = styled(Side)`
  background-color: #fff;
  transform: rotateX(90deg) translateZ(calc(var(--size) * 0.5));
  transform-origin: 10px;
`;

const BottomSide = styled(Side)`
  background-color: #999;
  transform: rotateX(90deg) translateZ(calc(var(--size) * -0.5));
`;

const FrontSide = styled(Side)`
  background-color: #aaa;
  transform: translateZ(calc(var(--size) * 0.5));
`;

const BackSide = styled(Side)`
  background-color: #bbb;
  transform: translateZ(calc(var(--size) * -0.5));
`;

const LeftSide = styled(Side)`
  background-color: #ccc;
  transform: rotateY(90deg) translateZ(calc(var(--size) * 0.5));
`;

const RightSide = styled(Side)`
  background-color: #ddd;
  transform: rotateY(90deg) translateZ(calc(var(--size) * -0.5));
`;

export default Cube;
