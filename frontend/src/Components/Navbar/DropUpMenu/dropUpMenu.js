import React, { useState, useEffect, useRef } from 'react';
import { 
  DropUpContainer, 
  MenuItem, 
  CircleIcon, 
  FormField 
} from './dropUpMenuStyled';
import { FaTint, FaDumbbell, FaWeight, FaCheck, FaPlus } from 'react-icons/fa'; // Import FaPlus icon
import { PiBowlFoodDuotone } from 'react-icons/pi';

const DropUpMenu = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [waterInput, setWaterInput] = useState('');
  const [workoutInput, setWorkoutInput] = useState('');
  const [weightInput, setWeightInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState('');

  const inputRef = useRef(null);

  const handleMenuItemClick = (formType) => {
    setSelectedForm(formType);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Placeholder to be replaced with API Post
    switch (selectedForm) {
      case 'water':
        console.log(`Water intake recorded: ${waterInput} mL`);
        setWaterInput('');
        break;
      case 'workout':
        console.log(`Workout recorded: ${workoutInput}`);
        setWorkoutInput('');
        break;
      case 'weight':
        console.log(`Weight recorded: ${weightInput} kg`);
        setWeightInput('');
        break;
      case 'calories':
        console.log(`Calories recorded: ${caloriesInput}`);
        setCaloriesInput('');
        break;
      default:
        break;
    }
    setSelectedForm(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSelectedForm(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  const checkIcon = <FaCheck size={18} />;
  const plusIcon = <FaPlus size={18} />;

  return (
    <DropUpContainer expanded={selectedForm !== null}>
      <MenuItem onClick={() => handleMenuItemClick('water')}>
        <CircleIcon color="#0071FF">
          <FaTint size={24} />
        </CircleIcon>
        Water
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('workout')}>
        <CircleIcon color="#E57842">
          <FaDumbbell size={24} />
        </CircleIcon>
        Workout
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('weight')}>
        <CircleIcon color="#FFC83B">
          <FaWeight size={24} />
        </CircleIcon>
        Weight
      </MenuItem>
      <MenuItem onClick={() => handleMenuItemClick('calories')}>
        <CircleIcon color="#78C4D3">
          <PiBowlFoodDuotone size={24} />
        </CircleIcon>
        Calories
      </MenuItem>
      {selectedForm && (
        <form onSubmit={handleFormSubmit}>
          <FormField>
            {selectedForm === 'water' && (
              <input
                type="number"
                placeholder="Water Intake (dl)"
                value={waterInput}
                onChange={(e) => setWaterInput(e.target.value)}
                pattern="[0-9]*"
                onClick={handleInputClick}
              />
            )}
            {selectedForm === 'workout' && (
              <input
                type="number"
                placeholder="Workout (min)"
                value={workoutInput}
                onChange={(e) => setWorkoutInput(e.target.value)}
                pattern="[0-9]*"
                onClick={handleInputClick}
              />
            )}
            {selectedForm === 'weight' && (
              <input
                type="number"
                placeholder="Weight (kg)"
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
                pattern="[0-9]*"
                onClick={handleInputClick}
              />
            )}
            {selectedForm === 'calories' && (
              <input
                type="number"
                placeholder="Calories"
                value={caloriesInput}
                onChange={(e) => setCaloriesInput(e.target.value)}
                pattern="[0-9]*"
                onClick={handleInputClick}
              />
            )}
            <button type="submit" disabled={selectedForm && !waterInput && !workoutInput && !weightInput && !caloriesInput}>
              {selectedForm && (waterInput || workoutInput || weightInput || caloriesInput) ? checkIcon : plusIcon}
            </button>
          </FormField>
        </form>
      )}
    </DropUpContainer>
  );
};

export default DropUpMenu;
