import React from 'react';
import IngredientTable from './IngredientTable';
import IngredientCategoryTable from './IngredientCategoryTable';

const Ingredients = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        
        <div className="w-full lg:w-2/3 rounded-lg shadow p-4">
          <IngredientTable />
        </div>

        <div className="w-full lg:w-1/3 rounded-lg shadow p-4">
          <IngredientCategoryTable />
        </div>

      </div>
    </div>
  );
};

export default Ingredients;
