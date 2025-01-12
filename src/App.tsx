import { useState } from "react";
import "./App.css";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "./components/ui/select";
// Main application component
function App() {
  // State for form fields
  const [name, setName] = useState(""); // Character's name
  const [age, setAge] = useState(""); // Character's age
  const [gender, setGender] = useState(""); // Character's gender
  const [occupation, setOccupation] = useState(""); // Character's occupation
  const [personality, setPersonality] = useState(""); // Character's personality description
  const [story, setStory] = useState(""); // Character's backstory
  const [relation, setRelation] = useState(""); // Character's relation to the user
  // State for managing hobbies, initialized with one empty string
  const [hobbies, setHobbies] = useState([
    { id: crypto.randomUUID(), value: "" },
  ]);
  // State for managing relations with other characters, initialized with one empty relation
  const [relations, setRelations] = useState([
    { id: crypto.randomUUID(), character: "", relation: "" },
  ]);
  // Function to add a new empty hobby to the hobbies state
  const handleAddHobby = () => {
    setHobbies([...hobbies, { id: crypto.randomUUID(), value: "" }]);
  };
  // Function to handle changes in a hobby input field
  const handleHobbyChange = (index: number, value: string) => {
    // Create a copy of the hobbies array
    const newHobbies = [...hobbies];
    // Update the hobby at the specified index
    newHobbies[index] = { ...newHobbies[index], value };
    // Set the new hobbies array in the state
    setHobbies(newHobbies);
  };
  // Function to add a new empty relation to the relations state
  const handleAddRelation = () => {
    setRelations([
      ...relations,
      { id: crypto.randomUUID(), character: "", relation: "" },
    ]);
  };
  // Function to handle changes in a relation input field (either character or relation)
  const handleRelationChange = (
    index: number,
    field: "character" | "relation",
    value: string,
  ) => {
    // Create a copy of the relations array
    const newRelations = [...relations];
    // Update the specified field (character or relation) at the specified index
    newRelations[index][field] = value;
    // Set the new relations array in the state
    setRelations(newRelations);
  };
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Validate required fields
    if (!name) {
      alert("Name is required");
      return;
    }
    if (!age) {
      alert("Age is required");
      return;
    }
    if (isNaN(Number(age))) {
      alert("Age must be a number");
      return;
    }
    if (!gender) {
      alert("Gender is required");
      return;
    }
    // Prepare form data for saving
    const formData = {
      name,
      age,
      gender,
      occupation,
      personality,
      story,
      relation,
      hobbies: hobbies.map((hobby) => hobby.value), // Extract hobby values
      relations: relations.map((relation) => ({
        character: relation.character,
        relation: relation.relation,
      })), // Extract relation data
    };
    // Save form data to local storage
    localStorage.setItem("characterBio", JSON.stringify(formData));
    alert("Data saved to local storage!"); // Notify user of successful save
  };
  // JSX structure for the application
  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto p-6 max-w-xl bg-white shadow-md rounded-xl"
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-accent-300">
        Character Bio
      </h1>
      <div className="grid gap-6">
        {/* Input field for the character's name */}
        <div>
          <Label
            htmlFor="name"
            className="block font-medium text-primary-400 mb-2"
          >
            Name
          </Label>
          <Input
            type="text"
            id="name"
            placeholder="Character Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm
      focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2
      placeholder:text-primary-500"
          />
        </div>
        {/* Input field for the character's age */}
        <div>
          <Label
            htmlFor="age"
            className="block font-medium text-primary-400 mb-2"
          >
            Age
          </Label>
          <Input
            type="number"
            id="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className=" text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm
      focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2
      placeholder:text-primary-500"
          />
        </div>
        {/* Select field for the character's gender */}
        <div>
          <Label
            htmlFor="gender"
            className="block font-medium text-primary-400 mb-2"
          >
            Gender
          </Label>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger className="font-semibold w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 text-primary-500">
              {gender ? gender : "Select Gender"}
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem className="text-primary-500" value="Male">
                Male
              </SelectItem>
              <SelectItem className="text-primary-500" value="Female">
                Female
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Input field for the character's occupation */}
        <div>
          <Label
            htmlFor="occupation"
            className="block font-medium text-primary-400 mb-2"
          >
            Occupation
          </Label>
          <Input
            type="text"
            id="occupation"
            placeholder="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className=" text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm
      focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2
      placeholder:text-primary-500"
          />
        </div>
        {/* Textarea for the character's personality */}
        <div>
          <Label
            htmlFor="personality"
            className="block font-medium text-primary-400 mb-2"
          >
            Personality
          </Label>
          <Textarea
            id="personality"
            placeholder="Personality"
            value={personality}
            onChange={(e) => {
              setPersonality(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            className=" text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 placeholder:text-primary-500"
          />
        </div>
        {/* Section for managing hobbies */}
        <div>
          <Label className="block font-medium text-primary-400 mb-2">
            Hobbies
          </Label>
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="flex space-x-2 mb-2 items-center">
              <Input
                type="text"
                placeholder="Hobby"
                value={hobby.value}
                onChange={(e) =>
                  handleHobbyChange(
                    hobbies.findIndex((h) => h.id === hobby.id),
                    e.target.value,
                  )
                }
                className="text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 placeholder:text-primary-500 border-2"
              />
              {/* Button to remove a hobby (only shown for hobbies after the first one) */}
              {hobbies.length > 1 && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setHobbies(hobbies.filter((h) => h.id !== hobby.id));
                  }}
                  className="rounded-xl border-2 border-primary-300 w-60 text-primary-400"
                >
                  Delete
                </Button>
              )}
            </div>
          ))}
          {/* Button to add a new hobby */}
          <Button
            type="button"
            onClick={handleAddHobby}
            className="mt-2 px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 w-full"
          >
            Add Hobby
          </Button>
        </div>
        {/* Textarea for the character's story */}
        <div>
          <Label
            htmlFor="story"
            className="block font-medium text-primary-400 mb-2"
          >
            Story
          </Label>
          <Textarea
            id="story"
            placeholder="Story"
            value={story}
            onChange={(e) => {
              setStory(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
            className=" text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 placeholder:text-primary-500"
          />
        </div>
        {/* Input field for the character's relation to the user */}
        <div>
          <Label
            htmlFor="relation"
            className="block font-medium text-primary-400 mb-2"
          >
            Relation to You
          </Label>
          <Input
            type="text"
            id="relation"
            placeholder="Relation to You"
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
            className=" text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 placeholder:text-primary-500"
          />
        </div>
        {/* Section for managing relations with other characters */}
        <div>
          <Label className="block font-medium text-primary-400 mb-2">
            Relation to Other Characters
          </Label>
          {relations.map((relation) => (
            <div
              key={relation.id}
              className="flex gap-2 mb-2 items-center w-auto"
            >
              {/* Input field for the related character's name */}
              <Input
                type="text"
                placeholder="Character"
                value={relation.character}
                onChange={(e) =>
                  handleRelationChange(
                    relations.findIndex((r) => r.id === relation.id),
                    "character",
                    e.target.value,
                  )
                }
                className="text-primary-500 font-semibold text-opacity-100 rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 placeholder:text-primary-500 border-2"
              />
              {/* Input field for the relation type */}
              <Input
                type="text"
                placeholder="Relation"
                value={relation.relation}
                onChange={(e) =>
                  handleRelationChange(
                    relations.findIndex((r) => r.id === relation.id),
                    "relation",
                    e.target.value,
                  )
                }
                className="text-primary-500 font-semibold text-opacity-100 rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 placeholder:text-primary-500 border-2"
              />
              {/* Button to remove a relation (only shown for relations after the first one) */}
              {relations.length > 1 && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setRelations(relations.filter((r) => r.id !== relation.id));
                  }}
                  className="rounded-xl border-2 border-primary-300 w-60 text-primary-400"
                >
                  Delete
                </Button>
              )}
            </div>
          ))}
          {/* Button to add a new relation */}
          <Button
            type="button"
            onClick={handleAddRelation}
            className="mt-2 px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 w-full"
          >
            Add Relation
          </Button>
        </div>
      </div>
      {/* Submit button for the form */}
      <Button
        type="submit"
        className="mt-6 px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 w-full"
      >
        Submit
      </Button>
      {/* Button to download the saved data */}
      <Button
        type="button"
        onClick={handleDownload}
        className="mt-2 px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 w-full"
      >
        Download
      </Button>
    </form>
  );
  // Function to handle downloading the saved character data
  function handleDownload() {
    const savedData = localStorage.getItem("characterBio");
    if (savedData) {
      const jsonData = JSON.stringify(JSON.parse(savedData), null, 2); // Format JSON data
      const blob = new Blob([jsonData], { type: "application/json" }); // Create a blob for the JSON data
      const url = URL.createObjectURL(blob); // Create a URL for the blob
      const link = document.createElement("a"); // Create a link element
      link.href = url; // Set the link's href to the blob URL
      link.download = `${name}.json`; // Set the download filename
      document.body.appendChild(link); // Append the link to the document
      link.click(); // Programmatically click the link to trigger the download
      document.body.removeChild(link); // Remove the link from the document
      URL.revokeObjectURL(url); // Revoke the blob URL
    } else {
      alert("No data saved yet!"); // Alert if no data is found
    }
  }
}
export default App;
