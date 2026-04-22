import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName]   = useState("");
  const [score, setScore] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || score === "") {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }
    addStudent(name, score);
    setName("");
    setScore("");
  };

  return (
    <form
      className={`add-form ${shake ? "shake" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          className="form-input"
          type="text"
          placeholder="Student name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Score</label>
        <input
          className="form-input"
          type="number"
          placeholder="0 – 100"
          min="0"
          max="100"
          value={score}
          onChange={e => setScore(e.target.value)}
        />
      </div>
      <button className="btn-add" type="submit">+ Add Student</button>
    </form>
  );
}

export default AddStudentForm;