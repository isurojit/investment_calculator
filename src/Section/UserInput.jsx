import React from "react";

const UserInput = () => {
  return (
    <div class="flex flex-wrap -mx-2">
      <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
        <label for="field1" class="block mb-2">
          Field 1
        </label>
        <input
          id="field1"
          type="text"
          class="w-full md:w-1/2 px-4 py-2 border rounded-md"
        />
      </div>
      <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
        <label for="field2" class="block mb-2">
          Field 2
        </label>
        <input
          id="field2"
          type="text"
          class="w-full md:w-1/2 px-4 py-2 border rounded-md"
        />
      </div>
      <div class="w-full md:w-1/2 px-2">
        <label for="field3" class="block mb-2">
          Field 3
        </label>
        <input
          id="field3"
          type="text"
          class="w-full md:w-1/2 px-4 py-2 border rounded-md"
        />
      </div>
      <div class="w-full md:w-1/2 px-2">
        <label for="field4" class="block mb-2">
          Field 4
        </label>
        <input
          id="field4"
          type="text"
          class="w-full md:w-1/2 px-4 py-2 border rounded-md"
        />
      </div>
    </div>
  );
};

export default UserInput;
