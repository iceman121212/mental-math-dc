/* eslint-disable arrow-body-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '.';
import GameStateBefore from './components/GameStates/GameStateBefore';
import GameStateMid from './components/GameStates/GameStateMid';
import GameStatePost from './components/GameStates/GameStatePost';
import { GameState } from './redux/gameState/gameStateReducer';

const App = (): JSX.Element => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const gameState = useSelector((state: RootState) => state.gameState);

  if (gameState === GameState.Before) {
    return <GameStateBefore setStartTime={setStartTime} />;
  }
  if (gameState === GameState.Mid) {
    return <GameStateMid setEndTime={setEndTime} />;
  }
  return <GameStatePost startTime={startTime} endTime={endTime} />;
};

export default App;
