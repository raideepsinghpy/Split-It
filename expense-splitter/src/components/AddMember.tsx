import { useState } from "react";
import type { Member } from "../types";
import "./AddMember.css";


type Props = {
  onAdd: (member: Member) => void;
};

function AddMember({ onAdd }: Props) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;

    const newMember: Member = {
      id: Date.now(),
      name: name.trim(),
      balance: 0,
    };

    onAdd(newMember);
    setName("");
  };

  return (
    <div className="add-member">
  <input
    type="text"
    placeholder="Enter member name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <button onClick={handleAdd}>Add</button>
    </div>
    );
}
export default AddMember;
    

  


