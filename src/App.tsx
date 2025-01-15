import { useState, useCallback } from "react"; // Importing React hooks for state management and memoized callbacks
import { Input } from "./components/ui/input"; // Importing Input component for form inputs
import { Label } from "./components/ui/label"; // Importing Label component for form labels
import { Textarea } from "./components/ui/textarea"; // Importing Textarea component for multiline text inputs
import { Button } from "./components/ui/button"; // Importing Button component for interactive buttons
import { Select, SelectTrigger, SelectContent, SelectItem } from "./components/ui/select";
import "./App.css";
interface Hobby { id: string; value: string; } // Defines the structure for a hobby with an id and value
interface Relation { id: string; character: string; relation: string; } // Defines the structure for a relation with an id, character name, and relation description
// Main application component
function App() {
    // State for form fields
    const [name, setName] = useState<string>(""); // State variable to hold the name of the character, initialized as an empty string
    const [age, setAge] = useState<string>(""); // State variable to hold the age of the character, initialized as an empty string
    const [gender, setGender] = useState<string>(""); // State variable to hold the gender of the character, initialized as an empty string
    const [occupation, setOccupation] = useState<string>(""); // State variable to hold the occupation of the character, initialized as an empty string
    const [personality, setPersonality] = useState<string>(""); // State variable to hold the personality traits of the character, initialized as an empty string
    const [story, setStory] = useState<string>(""); // State variable to hold the story or background of the character, initialized as an empty string
    const [relation, setRelation] = useState<string>(""); // State variable to hold the relationship status or details of the character, initialized as an empty string
    const [hobbies, setHobbies] = useState<Hobby[]>([{ id: crypto.randomUUID(), value: "" }]); // State variable to hold an array of hobbies for the character, initialized with one empty hobby object
    const [relations, setRelations] = useState<Relation[]>([{ id: crypto.randomUUID(), character: "", relation: "" }]); // State variable to hold an array of relations for the character, initialized with one empty relation object
    const handleAddHobby = useCallback(() => { setHobbies((prevHobbies) => [...prevHobbies, { id: crypto.randomUUID(), value: "" }]); }, []); // Adds a new hobby to the hobbies array
    const handleHobbyChange=useCallback((index:number,value:string)=>{setHobbies((prevHobbies)=>{const newHobbies=[...prevHobbies];newHobbies[index].value=value;return newHobbies;});},[]); // Updates the value of a hobby at a specific index
    const handleAddRelation=useCallback(()=>{setRelations((prevRelations)=>[...prevRelations,{id:crypto.randomUUID(),character:"",relation:""}]);},[]); // Adds a new relation to the relations array
    const handleRelationChange=useCallback((index:number,field:keyof Relation,value:string)=>{setRelations((prevRelations)=>{const newRelations=[...prevRelations];newRelations[index][field]=value;return newRelations;});},[]); // Updates a specific field of a relation at a given index
    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Validate required fields
        if (!name) return alert("Name is required"); // Check if name is empty
        if (!age) return alert("Age is required"); // Check if age is empty
        if (isNaN(Number(age))) return alert("Age must be a number"); // Validate age as a number
        if (!gender) return alert("Gender is required"); // Check if gender is selected
        // Prepare form data for saving
        const formData = { name, age, gender, occupation, personality, story, relation, hobbies: hobbies.map(h => h.value), relations: relations.map(({ character, relation }) => ({ character, relation })) };
        // Save form data to local storage
        localStorage.setItem("characterBio", JSON.stringify(formData));
        alert("Data saved to local storage!");
    }, [name, age, gender, occupation, personality, story, relation, hobbies, relations]);
    // Function to handle downloading the saved character data
    const handleDownload = useCallback(() => {
        const savedData = localStorage.getItem("characterBio");
        if (savedData) {
            const jsonData = JSON.stringify(JSON.parse(savedData), null, 2); // Parse and stringify the saved data with indentation
            const blob = new Blob([jsonData], { type: "application/json" }); // Create a Blob object with the JSON data
            const url = URL.createObjectURL(blob); // Generate a URL for the Blob
            const link = document.createElement("a"); // Create a temporary link element
            link.href = url; // Set the link's href to the Blob URL
            link.download = `${name}.json`; // Set the download filename
            document.body.appendChild(link); // Append the link to the document body
            link.click(); // Programmatically click the link to trigger download
            document.body.removeChild(link); // Remove the temporary link from the document
            URL.revokeObjectURL(url); // Clean up by revoking the Blob URL
        } else {
            alert("No data saved yet!"); // Display an alert if no data is found in local storage
        }
    }, [name]); // Dependency array includes 'name' to update the download filename when it changes
    // JSX structure for the application
    return (
        <form onSubmit={handleSubmit} className="container mx-auto p-6 max-w-xl bg-white shadow-md rounded-xl">
            <h1 className="text-3xl font-bold mb-6 text-center text-accent-300">Mio Character Bio Creator</h1>
            <div className="grid gap-6">
                <div>
                    <Label htmlFor="name" className="block font-medium text-primary-400 mb-2">Name</Label>
                    <Input type="text" id="name" placeholder="Character Name" value={name} onChange={(e) => setName(e.target.value)} className="text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 placeholder:text-primary-500" />
                </div>
                <div>
                    <Label htmlFor="age" className="block font-medium text-primary-400 mb-2">Age</Label>
                    <Input type="number" id="age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 placeholder:text-primary-500" />
                </div>
                <div>
                    <Label htmlFor="gender" className="block font-medium text-primary-400 mb-2">Gender</Label>
                    <Select value={gender} onValueChange={setGender}>
                        <SelectTrigger className="font-semibold w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 text-primary-500">{gender ? gender : "Select Gender"}</SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem className="text-primary-500" value="Male">Male</SelectItem>
                            <SelectItem className="text-primary-500" value="Female">Female</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label htmlFor="occupation" className="block font-medium text-primary-400 mb-2">Occupation</Label>
                    <Input type="text" id="occupation" placeholder="Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} className="text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 placeholder:text-primary-500" />
                </div>
                <div>
                    <Label htmlFor="personality" className="block font-medium text-primary-400 mb-2">Personality</Label>
                    <Textarea id="personality" placeholder="Personality" value={personality} onChange={(e) => { setPersonality(e.target.value); e.target.style.height = "auto"; e.target.style.height = `${e.target.scrollHeight}px`; }} className="text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 placeholder:text-primary-500" />
                </div>
                <div>
                    <Label className="block font-medium text-primary-400 mb-2">Hobbies</Label>
                    {hobbies.map((hobby) => (
                        <div key={hobby.id} className="flex space-x-2 mb-2 items-center">
                            <Input type="text" placeholder="Hobby" value={hobby.value} onChange={(e) => handleHobbyChange(hobbies.findIndex((h) => h.id === hobby.id), e.target.value)} className="text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 placeholder:text-primary-500 border-2" />
                            {hobbies.length > 1 && <Button variant="outline" size="icon" onClick={() => { setHobbies(hobbies.filter((h) => h.id !== hobby.id)); }} className="rounded-xl border-2 border-primary-300 w-60 text-primary-400">Delete</Button>}
                        </div>
                    ))}
                    <Button type="button" onClick={handleAddHobby} className="mt-2 px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 w-full">Add Hobby</Button>
                </div>
                <div>
                    <Label htmlFor="story" className="block font-medium text-primary-400 mb-2">Story</Label>
                    <Textarea id="story" placeholder="Story" value={story} onChange={(e) => { setStory(e.target.value); e.target.style.height = "auto"; e.target.style.height = `${e.target.scrollHeight}px`; }} className="text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 placeholder:text-primary-500" />
                </div>
                <div>
                    <Label htmlFor="relation" className="block font-medium text-primary-400 mb-2">Relation to You</Label>
                    <Input type="text" id="relation" placeholder="Relation to You" value={relation} onChange={(e) => setRelation(e.target.value)} className="text-primary-500 font-semibold text-opacity-100 w-full rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-2 placeholder:text-primary-500" />
                </div>
                <div>
                    <Label className="block font-medium text-primary-400 mb-2">Relation to Other Characters</Label>
                    {relations.map((relation) => (
                        <div key={relation.id} className="flex gap-2 mb-2 items-center w-auto">
                            <Input type="text" placeholder="Character" value={relation.character} onChange={(e) => handleRelationChange(relations.findIndex((r) => r.id === relation.id), "character", e.target.value)} className="text-primary-500 font-semibold text-opacity-100 rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 placeholder:text-primary-500 border-2" />
                            <Input type="text" placeholder="Relation" value={relation.relation} onChange={(e) => handleRelationChange(relations.findIndex((r) => r.id === relation.id), "relation", e.target.value)} className="text-primary-500 font-semibold text-opacity-100 rounded-xl border-primary-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 placeholder:text-primary-500 border-2" />
                            {relations.length > 1 && <Button variant="outline" size="icon" onClick={() => { setRelations(relations.filter((r) => r.id !== relation.id)); }} className="rounded-xl border-2 border-primary-300 w-60 text-primary-400">Delete</Button>}
                        </div>
                    ))}
                    <Button type="button" onClick={handleAddRelation} className="mt-2 px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 w-full">Add Relation</Button>
                </div>
            </div>
            <Button type="submit" className="mt-6 px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 w-full">Submit</Button>
            <Button type="button" onClick={handleDownload} className="mt-2 px-4 py-2 bg-primary-300 text-white rounded-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 w-full">Download</Button>
        </form>
    );
}
export default App;