import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { updateCalories } from '../../../Redux/Slices/calorieSlice'
import fitTrackrAPI from '../../../Axios/fitTrackrAPI';
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
  const dispatch = useDispatch();


  const inputRef = useRef(null);

  const handleMenuItemClick = (formType) => {
    setSelectedForm(formType);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const userId = parseInt(localStorage.getItem('user_id'));
      if (isNaN(userId)) {
        console.error('User ID is not valid.');
        return;
      }
  
      try {
        console.log('Fetching existing entry...');
        const existingEntryResponse = await fitTrackrAPI.get(`/calories/daily-calories/${userId}/`);
        console.log('Existing entry response:', existingEntryResponse);
        const existingEntry = existingEntryResponse.data;
        console.log('Existing entry:', existingEntry);
  
        const formData = new FormData();
  
        if (selectedForm === 'calories') {
          if (existingEntry) {
            console.log('Existing entry found, updating calories...');
            const updatedCalories = parseInt(existingEntry.calories) + parseInt(caloriesInput);
            console.log('Updated calories:', updatedCalories);
            formData.append('calories', updatedCalories);
            formData.append('user_profile', userId);
            await fitTrackrAPI.patch(`/calories/daily-calories/${userId}/`, formData);
            console.log('Calories updated successfully.');
            dispatch(updateCalories(updatedCalories));
          } else {
            console.log('No existing entry found, creating new entry...');
            formData.append('calories', caloriesInput);
            formData.append('user_profile', userId);
            await fitTrackrAPI.post(`/calories/create-daily-calories/${userId}/`, formData);
            console.log('New entry created successfully.');
            dispatch(updateCalories(caloriesInput));
          }
        }
        setCaloriesInput('');
        setSelectedForm(null);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log('No existing entry found, creating new entry...');
          const formData = new FormData();
          const currentDate = new Date().toISOString().split('T')[0];
          formData.append('calories', caloriesInput);
          formData.append('user_profile', userId);
          formData.append('date', currentDate);
          await fitTrackrAPI.post(`/calories/create-daily-calories/${userId}/`, formData);
          console.log('New entry created successfully.');
          dispatch(updateCalories(caloriesInput));

          setCaloriesInput('');
          setSelectedForm(null);
        } else {
          console.error('Error submitting data:', error);
        }
      }
    } catch (error) {
      console.error('Error fetching existing entry:', error);
    }
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
