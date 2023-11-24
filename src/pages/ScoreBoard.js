import { Box } from '@mui/material';
import React from 'react'
import ScoreBoardBackground from '../assets/images/scoreboard-bg.jpg';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

function ScoreBoard(props) {
  const { totalQues, correctQues, wrongQues } = props;
  let percentage = (correctQues / totalQues) * 100; //quiz result percentage
  let attemptedPercentage = (correctQues + wrongQues) / totalQues * 100; //questions attempted percentage

  return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundImage: `url(${ScoreBoardBackground})`, 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        borderRadius: '0px 0px 50px 50px', 
        height: '100vh', minHeight: '377px' 
      }}
    >
      {/* Display Quiz score */}
      <Box sx={{ fontSize: '1.2rem', color: '#A45EDA', backgroundColor: 'white', borderRadius: '50%', p: '3rem 1.8rem', m: '2rem', fontWeight: '600', textAlign: 'center' }}>
        Your Score <br />
        <span style={{ fontSize: '2.3rem' }}>
          {percentage.toFixed(2)}
          <small>%</small>
        </span>
      </Box>
      
      {/* Points table */}
      <Box sx={{ display: 'inline-flex', flexWrap: 'wrap', m: '0px 20px', justifyContent: 'center', backgroundColor: 'white', color: 'black', borderRadius: '15px', maxWidth: '430px', position: 'relative', }}>
        {/* Attempted section */}
        <Box sx={{ m: '8px 6px', p: '6px 12px', display: 'flex', width: '155px', alignItems: 'baseline' }}>
          <div style={{ backgroundColor: '#A45EDA', width: '8px', height: '8px', borderRadius: '50%' }} className="circle"></div>
          <Box mx={2}>
            <div style={{ fontSize: '15px', fontWeight: '400' }}>Attempted</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '/*#A45EDA*/#fff', width: '5.8rem', background: '#212832', padding: '0.5rem', borderRadius: '0.5rem' }} className="point">
              {attemptedPercentage.toFixed(2)}%
            </div>
          </Box>
        </Box>

        {/* Total questions section */}
        <Box sx={{ m: '8px 6px', p: '6px 12px', display: 'flex', width: '155px', alignItems: 'baseline' }}>
          <div style={{ backgroundColor: '#A45EDA', width: '8px', height: '8px', borderRadius: '50%' }} className="circle"></div>
          <Box mx={2}>
            <div style={{ fontSize: '15px', fontWeight: '400' }}>Total Questions</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '/*#A45EDA*/#fff', width: '5.8rem', background: '#212832', padding: '0.5rem', borderRadius: '0.5rem' }} className="point">
              {totalQues}
            </div>
          </Box>
        </Box>

        {/* Correct answers section */}
        <Box sx={{ m: '8px 6px', p: '6px 12px', display: 'flex', width: '155px', alignItems: 'baseline' }}>
          <div style={{ backgroundColor: 'rgb(6 143 86)', width: '8px', height: '8px', borderRadius: '50%' }} className="circle"></div>
          <Box mx={2}>
            <div style={{ fontSize: '15px', fontWeight: '400' }}>Correct</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '/*#A45EDA*/#fff', width: '5.8rem', background: '#212832', padding: '0.5rem', borderRadius: '0.5rem' }} className="point">
              {correctQues}
            </div>
          </Box>
        </Box>

        {/* Wrong answers section */}
        <Box sx={{ m: '8px 6px', p: '6px 12px', display: 'flex', width: '155px', alignItems: 'baseline' }}>
          <div style={{ backgroundColor: 'rgb(223 75 75)', width: '8px', height: '8px', borderRadius: '50%' }}></div>
          <Box mx={2}>
            <div style={{ fontSize: '15px', fontWeight: '400' }}>Wrong</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '/*#A45EDA*/#fff', width: '5.8rem', background: '#212832', padding: '0.5rem', borderRadius: '0.5rem' }} className="point">
              {wrongQues}
            </div>
          </Box>
        </Box>
      </Box>

      {/* Footer section */}
      <Box sx={{ 
          height: '15rem', 
          bottom: '25px', 
          textAlign: 'center', 
          boxSizing: 'border-box', 
          pt: '2rem', width: '100%', 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          alignItems: 'start' 
        }}
      >
        {/* Return to home screen */}
        <Box textAlign='center'>
          <Box sx={{ backgroundColor: '#BE709F', color: 'white', borderRadius: '50%', p: '12px 12px 6px 12px', fontSize: '1.8rem', textDecoration: 'none', m: '0px 15px', '&:hover': { cursor: 'pointer', backgroundColor: 'rgba(236, 185, 255, 0.638) !important' } }}>
            <HouseOutlinedIcon fontSize='large' />
          </Box>
          <Box sx={{ fontSize: '13px' }}>Home</Box>
        </Box>

        {/* Share Score action */}
        <Box textAlign='center'>
          <Box sx={{ backgroundColor: '#755ED3', color: 'white', borderRadius: '50%', p: '12px 12px 6px 12px', fontSize: '1.8rem', textDecoration: 'none', m: '0px 15px', '&:hover': { cursor: 'pointer', backgroundColor: 'rgba(236, 185, 255, 0.638) !important' } }}>
            <ShareOutlinedIcon fontSize='large' />
          </Box>
          <Box sx={{ fontSize: '13px' }}>Share Score</Box>
        </Box>

        {/* Review Answer action */}
        <Box textAlign='center'>
          <Box sx={{ backgroundColor: '#BF8D6F', color: 'white', borderRadius: '50%', p: '12px 12px 6px 12px', fontSize: '1.8rem', textDecoration: 'none', m: '0px 15px', '&:hover': { cursor: 'pointer', backgroundColor: 'rgba(236, 185, 255, 0.638) !important' } }}>
            <VisibilityOutlinedIcon fontSize='large' />
          </Box>
          <Box sx={{ fontSize: '13px' }}>Review Answer</Box>
        </Box>

        {/* Replay quiz action */}
        <Box textAlign='center'>
          <Box sx={{ backgroundColor: '#5492B3', color: 'white', borderRadius: '50%', p: '12px 12px 6px 12px', fontSize: '1.8rem', textDecoration: 'none', m: '0px 15px', '&:hover': { cursor: 'pointer', backgroundColor: 'rgba(236, 185, 255, 0.638) !important' } }}>
            <ReplayOutlinedIcon fontSize='large' />
          </Box>
          <Box sx={{ fontSize: '13px' }}>Play Again</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ScoreBoard;