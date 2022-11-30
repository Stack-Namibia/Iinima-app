import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CardActionArea, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface Props {
  items: {
    id: string;
    name: string;
    images: string[];
    location: string;
    price: {
      day: number;
      week: number;
      month: number;
    };
    description: string;
    category: string;
    likes: number;
    user: {
      name: string;
      avatar: string;
      id: string;
    };
    liked: boolean;
  }[];
  maxWidth: number;
}

function ItemsCouresal({ items, maxWidth }: Props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = items.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: maxWidth, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItemss: "center",
          height: 50,
          p: 2,
          bgcolor: "background.default",
          justifyContent: "space-between",
        }}
      >
        <Typography>{items[activeStep].name}</Typography>
        <Typography variant='body2' className='text-primary'>
          N$ {items[activeStep].price.day}
          <span className='text-black'>/day</span>
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items.map((item, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Link to='/item/browse'>
                <CardActionArea>
                  <Box
                    component='img'
                    sx={{
                      height: 255,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={item.images[0]}
                    alt={item.name}
                  />
                </CardActionArea>
              </Link>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default ItemsCouresal;
