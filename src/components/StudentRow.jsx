function getInitials(name) {
    return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  }
  
  function StudentRow({ index, student, updateScore, removeStudent }) {
    const pass = student.score >= 40;
  
    return (
      <tr className="table-row">
        <td className="td-index">{index}</td>
        <td>
          <div className="name-cell">
            <div className="avatar">{getInitials(student.name)}</div>
            <span className="student-name">{student.name}</span>
          </div>
        </td>
        <td>
          <input
            className="score-input"
            type="number"
            min="0"
            max="100"
            value={student.score}
            onChange={e => updateScore(student.id, e.target.value)}
          />
        </td>
        <td className="td-bar">
          <div className="bar-bg">
            <div
              className={`bar-fill ${pass ? "bar-pass" : "bar-fail"}`}
              style={{ width: `${student.score}%` }}
            />
          </div>
        </td>
        <td>
          <span className={`badge ${pass ? "badge-pass" : "badge-fail"}`}>
            {pass ? "Pass" : "Fail"}
          </span>
        </td>
        <td>
          <button
            className="btn-del"
            onClick={() => removeStudent(student.id)}
            title="Remove"
          >✕</button>
        </td>
      </tr>
    );
  }
  
  export default StudentRow;