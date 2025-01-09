import { useState } from 'react';
import './App.css';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Textarea } from './components/ui/textarea';
import { Button } from './components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem } from "./components/ui/select"

// Main application component
function App() {
  // State for managing hobbies, initialized with one empty string
  const [hobbies, setHobbies] = useState(['']);
  // State for managing relations with other characters, initialized with one empty relation
  const [relations, setRelations] = useState([{ character: '', relation: '' }]);

  // Function to add a new empty hobby to the hobbies state
  const handleAddHobby = () => {
    setHobbies([...hobbies, '']);
  };

  // Function to handle changes in a hobby input field
  const handleHobbyChange = (index: number, value: string) => {
    // Create a copy of the hobbies array
    const newHobbies = [...hobbies];
    // Update the hobby at the specified index
    newHobbies[index] = value;
    // Set the new hobbies array in the state
    setHobbies(newHobbies);
  };

  // Function to add a new empty relation to the relations state
  const handleAddRelation = () => {
    setRelations([...relations, { character: '', relation: '' }]);
  };

  // Function to handle changes in a relation input field (either character or relation)
  const handleRelationChange = (index: number, field: 'character' | 'relation', value: string) => {
    // Create a copy of the relations array
    const newRelations = [...relations];
    // Update the specified field (character or relation) at the specified index
    newRelations[index][field] = value;
    // Set the new relations array in the state
    setRelations(newRelations);
  };

  // JSX structure for the application
  return (
    <div className="container mx-auto p-6 max-w-xl bg-white shadow-md rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Character Bio</h1>
      <div className="grid gap-6">
        {/* Input field for the character's name */}
        <div>
          <Label htmlFor="name" className="block font-medium text-primary-400 mb-2">Name</Label>
          <Input type="text" id="name" placeholder="Character Name" className="w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
        </div>
        {/* Input field for the character's age */}
        <div>
          <Label htmlFor="age" className="block font-medium text-primary-400 mb-2">Age</Label>
          <Input type="number" id="age" placeholder="Age" className="w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
        </div>
        {/* Select field for the character's gender */}
        <div>
          <Label htmlFor="gender" className="block font-medium text-primary-400 mb-2">Gender</Label>
          <Select>
            <SelectTrigger className="w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50">Select gender</SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Input field for the character's occupation */}
        <div>
          <Label htmlFor="occupation" className="block font-medium text-primary-400 mb-2">Occupation</Label>
          <Input type="text" id="occupation" placeholder="Occupation" className="w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
        </div>
        {/* Textarea for the character's personality */}
        <div>
          <Label htmlFor="personality" className="block font-medium text-primary-400 mb-2">Personality</Label>
          <Textarea id="personality" placeholder="Personality" className="w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
        </div>
        {/* Section for managing hobbies */}
        <div>
          <Label className="block font-medium text-primary-400 mb-2">Hobbies</Label>
          {hobbies.map((hobby, index) => (
            <div key={index} className="flex space-x-2 mb-2 items-center">
              <Input
                type="text"
                placeholder="Hobby"
                placeholder:text-primary-500
                value={hobby}
                onChange={(e) => handleHobbyChange(index, e.target.value)}
                className="w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 placeholder:text-primary-500"
              />
              {/* Button to remove a hobby (only shown for hobbies after the first one) */}
              {index > -1 && (
                <Button variant="outline" size="icon" onClick={() => {
                  const newHobbies = [...hobbies];
                  newHobbies.splice(index, 1);
                  setHobbies(newHobbies);
                }} className="rounded-xl border border-primary-300 w-60">
                  Delete
                </Button>
              )}
            </div>
          ))}
          {/* Button to add a new hobby */}
          <Button type="button" onClick={handleAddHobby} className="mt-2 px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50">Add Hobby</Button>
        </div>
        {/* Textarea for the character's story */}
        <div>
          <Label htmlFor="story" className="block font-medium text-primary-400 mb-2">Story</Label>
          <Textarea id="story" placeholder="Story" className="w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
        </div>
        {/* Input field for the character's relation to the user */}
        <div>
          <Label htmlFor="relation" className="block font-medium text-primary-400 mb-2">Relation to You</Label>
          <Input type="text" id="relation" placeholder="Relation to You" className="w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" />
        </div>
        {/* Section for managing relations with other characters */}
        <div>
          <Label className="block font-medium text-primary-400 mb-2">Relation to Other Characters</Label>
          {relations.map((relation, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 mb-2 items-center">
              {/* Input field for the related character's name */}
              <Input
                type="text"
                placeholder="Character"
                placeholder:text-primary-500
                value={relation.character}
                onChange={(e) => handleRelationChange(index, 'character', e.target.value)}
                className="rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 placeholder:text-primary-500"
              />
              {/* Input field for the relation type */}
              <Input
                type="text"
                placeholder="Relation"
                placeholder:text-primary-500
                value={relation.relation}
                onChange={(e) => handleRelationChange(index, 'relation', e.target.value)}
                className="rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 placeholder:text-primary-500"
              />
              {/* Button to remove a relation (only shown for relations after the first one) */}
              {index > -1 && (
                <Button variant="outline" size="icon" onClick={() => {
                  const newRelations = [...relations];
                  newRelations.splice(index, 1);
                  setRelations(newRelations);
                }} className="rounded-xl border border-primary-300 w-auto">
                  Delete
                </Button>
              )}
            </div>
          ))}
          {/* Button to add a new relation */}
          <Button type="button" onClick={handleAddRelation} className="mt-2 px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50">Add Relation</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
