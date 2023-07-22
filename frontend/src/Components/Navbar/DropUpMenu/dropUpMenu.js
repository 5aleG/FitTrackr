import React from 'react';
import { DropUpContainer, MenuItem, CircleIcon } from './dropUpMenuStyled';
import { FaTint, FaDumbbell, FaWeight } from 'react-icons/fa';
import { PiBowlFoodDuotone } from 'react-icons/pi'

const DropUpMenu = () => {
    const options = [
      { text: 'Water', icon: FaTint, color: '#0071FF' },
      { text: 'Workout', icon: FaDumbbell, color: '#E57842' },
      { text: 'Weight', icon: FaWeight, color: '#FFC83B' },
      { text: 'Calories', icon: PiBowlFoodDuotone, color: '#78C4D3' }, 
    ]
  
    return (
      <DropUpContainer>
        {options.map((option, index) => (
          <MenuItem key={index}>
            <CircleIcon color={option.color}>
              <option.icon size={24} />
            </CircleIcon>
            {option.text}
          </MenuItem>
        ))}
      </DropUpContainer>
    );
  };

  export default DropUpMenu;