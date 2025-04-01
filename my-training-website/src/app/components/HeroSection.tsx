import { Box, Typography } from "@mui/material";
import {
  Heading3,
  Heading1,
  Paragraph,
} from "../../../components/typography/index";

const HeroSection = () => {
  // Define unique images for each profile
  const profileImages = [
    "/images/pic6.png",
    "/images/pic2.png",
    "/images/pic5.png",
    "/images/pic4.png",
    "/images/pic3.png",
  ];

  const profilePositions = [
    { top: "83%", left: "30%" },
    { top: "53%", left: "14%" },
    { top: "65%", left: "70%" },
    { top: "13%", left: "75%" },
    { top: "26%", left: "34%" },
  ];

  const redCirclePositions = [
    { top: "15%", left: "20%" },
    { top: "25%", left: "70%" },
    { top: "40%", left: "40%" },
    { top: "65%", left: "34%" },
  ];
  const redCircleSizes = [25, 18, 10, 18];
  return (
    <div className="flex w-full justify-between bg-[#EAF2FF]">
      <div className="flex flex-col gap-4.5 !pt-25 !pb-50 !pl-30">
        <h6 className="text-[#23A6F0]">Online training</h6>
        <h1 className="w-2 text-5xl leading-18 font-bold text-[#252B42]">
          Highly Distinguished Courses
        </h1>
        <p className="w-90 text-xl font-light text-[#737373]">
          We know how large objects will act, but things on a small scale
        </p>
      </div>
      <div className="w-200 !pl-30 text-white">
        <div
          style={{
            position: "relative",
            marginRight: 70,
            width: "500px",
            height: "500px",
          }}
        >
          <svg
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <circle
              cx="50%"
              cy="50%"
              r="60"
              stroke="#FFC7D4"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="110"
              stroke="#FFC7D4"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="160"
              stroke="#FFC7D4"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="210"
              stroke="#FFC7D4"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80px",
              height: "80px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid #FFC7D4",
            }}
          >
            <img
              src="/images/pic1.png"
              alt="Center Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Surrounding circles */}
          {profileImages.map((src, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                ...profilePositions[index],
                width: "50px",
                height: "50px",
                backgroundColor: "#fff",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid #FFC7D4",
              }}
            >
              <img
                src={src}
                alt={`Profile ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
          {/* Red Circles */}
          {redCirclePositions.map((style, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                width: `${redCircleSizes[index]}px`,
                height: `${redCircleSizes[index]}px`,
                ...style,
              }}
            >
              <img
                src="/images/red.png"
                alt={`Profile ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    //old code :
    // <div style={{ backgroundColor: "#EAF2FF", position: "relative" }}>
    //   <section
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //       // marginTop: 104,
    //       marginLeft: 150,
    //       paddingTop: 50,
    //       paddingBottom: 100,
    //       textAlign: "left",
    //     }}
    //   >
    //     <div style={{ maxWidth: "400px" }}>
    //       <h3
    //         style={{
    //           color: "#23a6f0",
    //           width: 200,
    //           height: 24,
    //           fontWeight: 1000,
    //           fontSize: 16,
    //           paddingBottom: 50,
    //         }}
    //       >
    //         Online Training
    //       </h3>
    //       <h1
    //         style={{
    //           color: "#252b42",
    //           width: 350,
    //           fontSize: "50px",
    //           fontWeight: 10000,
    //         }}
    //       >
    //         Master Coding with Experts
    //       </h1>
    //       <Paragraph sx={{ fontSize: 18, paddingTop: 5 }}>
    //         Learn to code from scratch and enhance your skills with industry
    //         professionals.
    //       </Paragraph>
    //     </div>

    //     {/* Orbiting circles */}
    //     <div
    //       style={{
    //         position: "relative",
    //         marginRight: 70,
    //         width: "500px",
    //         height: "500px",
    //       }}
    //     >
    //       <svg
    //         width="100%"
    //         height="100%"
    //         style={{ position: "absolute", top: 0, left: 0 }}
    //       >
    //         <circle
    //           cx="50%"
    //           cy="50%"
    //           r="60"
    //           stroke="#FFC7D4"
    //           strokeWidth="1"
    //           fill="none"
    //         />
    //         <circle
    //           cx="50%"
    //           cy="50%"
    //           r="110"
    //           stroke="#FFC7D4"
    //           strokeWidth="1"
    //           fill="none"
    //         />
    //         <circle
    //           cx="50%"
    //           cy="50%"
    //           r="160"
    //           stroke="#FFC7D4"
    //           strokeWidth="1"
    //           fill="none"
    //         />
    //         <circle
    //           cx="50%"
    //           cy="50%"
    //           r="210"
    //           stroke="#FFC7D4"
    //           strokeWidth="1"
    //           fill="none"
    //         />
    //       </svg>

    //       {/* Center circle */}
    //       <div
    //         style={{
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           width: "80px",
    //           height: "80px",
    //           backgroundColor: "#fff",
    //           borderRadius: "50%",
    //           overflow: "hidden",
    //           border: "1px solid #FFC7D4",
    //         }}
    //       >
    //         <img
    //           src="/images/pic1.png"
    //           alt="Center Profile"
    //           style={{ width: "100%", height: "100%", objectFit: "cover" }}
    //         />
    //       </div>

    //       {/* Surrounding circles */}
    //       {profileImages.map((src, index) => (
    //         <div
    //           key={index}
    //           style={{
    //             position: "absolute",
    //             ...profilePositions[index],
    //             width: "50px",
    //             height: "50px",
    //             backgroundColor: "#fff",
    //             borderRadius: "50%",
    //             overflow: "hidden",
    //             border: "1px solid #FFC7D4",
    //           }}
    //         >
    //           <img
    //             src={src}
    //             alt={`Profile ${index + 1}`}
    //             style={{ width: "100%", height: "100%", objectFit: "cover" }}
    //           />
    //         </div>
    //       ))}

    //       {/* Red Circles */}
    //       {redCirclePositions.map((style, index) => (
    //         <div
    //           key={index}
    //           style={{
    //             position: "absolute",
    //             width: `${redCircleSizes[index]}px`,
    //             height: `${redCircleSizes[index]}px`,
    //             ...style,
    //           }}
    //         >
    //           <img
    //             src="/images/red.png"
    //             alt={`Profile ${index + 1}`}
    //             style={{ width: "100%", height: "100%", objectFit: "cover" }}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    // </div>
  );
};

export default HeroSection;
