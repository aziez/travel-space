import { Sky } from "@react-three/drei";

const SkyBG = (props) => {
  return (
    <Sky
      distance={1000}
      sunPosition={[5, 1, 8]}
      inclination={0}
      azimuth={1}
      {...props}
    />
  );
};
export default SkyBG;
